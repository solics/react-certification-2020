import React from 'react'
import { createMemoryHistory } from 'history'
import { Route, Router } from 'react-router'
import { render } from '@testing-library/react'
import Header from '../../components/Header'
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

describe('Header', () => {
	it('Header render with its context without crashing', () => {
		renderWithRouter(Header)
	})
	it('App Snapshot', () => {
		const { container } = renderWithRouter(Header)
		expect(container).toMatchSnapshot()
	})
})
