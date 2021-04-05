import React from 'react'
import userEvent from '@testing-library/user-event'
import { Router, Route } from 'react-router'
import { fireEvent, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import SearchBox from '../../components/SearchBox'
import { ThemeContextProvider } from '../../context/ThemeContext'
import { YoutubeContextProvider } from '../../context/YoutubeContext'

const history = createMemoryHistory()
history.push('/video-detail/21321321')

export const renderWithRouter = Component =>
	render(
		<YoutubeContextProvider>
			<ThemeContextProvider>
				<Router history={history}>
					<Route>
						<Component />
					</Route>
				</Router>
			</ThemeContextProvider>
		</YoutubeContextProvider>
	)

describe('SearchBox', () => {
	it('looks for a query being in the video detail view', () => {
		const { container } = renderWithRouter(SearchBox)
		const inputSearchBox = container.querySelector('input')
		userEvent.type(inputSearchBox, 'Cars')
		expect(container.querySelector('input')).toHaveValue('Cars')
		expect(history.location.pathname !== '/').toBeTruthy()
		fireEvent.submit(inputSearchBox)
		expect(history.location.pathname === '/').toBeTruthy()
	})
})

describe('SearchBox', () => {
	it('looks for a query being in the home view', () => {
		const { container } = renderWithRouter(SearchBox)
		const inputSearchBox = container.querySelector('input')
		userEvent.type(inputSearchBox, 'Cars')
		expect(container.querySelector('input')).toHaveValue('Cars')
		expect(history.location.pathname === '/').toBeTruthy()
		fireEvent.submit(inputSearchBox)
		expect(history.location.pathname === '/').toBeTruthy()
	})
})
