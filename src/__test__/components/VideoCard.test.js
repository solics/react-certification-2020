import { getByText } from '@testing-library/dom'
import React from 'react'
import ReactDOM from 'react-dom'
import VideoCard from '../../components/VideoCard'
import videosMock from '../../youtube-videos-mock.json'

describe('VideoCard testing', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div')
		/*
			item in position 0 in items on videosMock is 'Wizeline'
			*/
		ReactDOM.render(<VideoCard item={videosMock.items[0]} />, div)
		getByText(div, 'Wizeline')
	})
})
