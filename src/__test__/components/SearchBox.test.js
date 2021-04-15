import React from 'react'
import userEvent from '@testing-library/user-event'
import { Router, Route } from 'react-router'
import { fireEvent, render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import SearchBox from '../../components/SearchBox'
import { GlobalContextProvider } from '../../context/GlobalContext'

const history = createMemoryHistory()
history.push('/video-detail/21321321')

export const renderWithRouter = Component =>
	render(
		<GlobalContextProvider>
			<Router history={history}>
				<Route>
					<Component />
				</Route>
			</Router>
		</GlobalContextProvider>
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
