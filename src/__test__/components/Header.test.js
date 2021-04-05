import React from 'react'
import { createMemoryHistory } from 'history'
import { Route, Router } from 'react-router'
import { render } from '@testing-library/react'
import Header from '../../components/Header'
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

describe('Header', () => {
	it('Header render with its context without crashing', () => {
		renderWithRouter(Header)
	})
	it('App Snapshot', () => {
		const { container } = renderWithRouter(Header)
		expect(container).toMatchSnapshot()
	})
})
