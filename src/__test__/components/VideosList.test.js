import { render } from '@testing-library/react'
import React from 'react'
import { YoutubeContextProvider } from '../../context/YoutubeContext'
import VideosList from '../../components/VideosList'

describe('VideosList testing', () => {
	it('VideosList Snapshot', () => {
		const { container } = render(
			<YoutubeContextProvider>
				<VideosList />
			</YoutubeContextProvider>
		)
		expect(container).toMatchSnapshot()
	})
})
