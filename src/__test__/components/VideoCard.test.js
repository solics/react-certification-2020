import { getNodeText, render } from '@testing-library/react'
import { Route, Router } from 'react-router'
import { createMemoryHistory } from 'history'
import React from 'react'
import VideoCard from '../../components/VideoCard'
import videosMock from '../../youtube-videos-mock.json'
import { ThemeContextProvider } from '../../context/ThemeContext'

const history = createMemoryHistory()
history.push('/')

export const renderWithRouter = Component =>
	render(
		<ThemeContextProvider>
			<Router history={history}>
				<Route>
					<Component item={videosMock.items[0]} />
				</Route>
			</Router>
		</ThemeContextProvider>
	)

describe('VideoCard testing', () => {
	it('checks if the info passed in props is being rendering correctly', () => {
		const { container } = renderWithRouter(VideoCard)
		const title = getNodeText(container.querySelector('span'))
		const description = getNodeText(container.querySelector('p'))
		const imgSrc = container.querySelector('img').src

		expect(title).toBe(videosMock.items[0].snippet.title)
		expect(description).toBe(videosMock.items[0].snippet.description)
		expect(imgSrc).toBe(videosMock.items[0].snippet.thumbnails.default.url)
	})
})
