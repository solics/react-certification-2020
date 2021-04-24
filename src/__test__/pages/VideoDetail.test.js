import { render } from '@testing-library/react'
import { Route, Router } from 'react-router'
import { createMemoryHistory } from 'history'
import React from 'react'
import { GlobalContextProvider } from '../../context/GlobalContext'
import VideoDetail from '../../pages/VideoDetail'

const history = createMemoryHistory()
history.push('/video-detail/testId123456')

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useParams: () => ({
		videoId: 'testId123456',
	}),
}))

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

describe('VideoDetail testing', () => {
	it('Video Detail Snapshot', () => {
		const { container } = renderWithRouter(VideoDetail)
		expect(container).toMatchSnapshot()
	})
})
