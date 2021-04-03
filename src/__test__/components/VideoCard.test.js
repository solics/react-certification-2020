import { getNodeText } from '@testing-library/react'
import ReactDOM from 'react-dom'
import React from 'react'
import VideoCard from '../../components/VideoCard'
import videosMock from '../../youtube-videos-mock.json'
import { ThemeContextProvider } from '../../context/ThemeContext'

describe('VideoCard testing', () => {
	it('render the title of the atribute title of the mock', () => {
		const div = document.createElement('div')
		ReactDOM.render(
			<ThemeContextProvider>
				<VideoCard item={videosMock.items[0]} />
			</ThemeContextProvider>,
			div
		)
		const title = getNodeText(div.querySelector('span'))
		const description = getNodeText(div.querySelector('p'))
		const imgSrc = div.querySelector('img').src

		expect(title).toBe(videosMock.items[0].snippet.title)
		expect(description).toBe(videosMock.items[0].snippet.description)
		expect(imgSrc).toBe(videosMock.items[0].snippet.thumbnails.default.url)
	})
})
