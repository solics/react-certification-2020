import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import VideosList from '../../components/VideosList'
import videosMock from '../../youtube-videos-mock.json'

describe('VideosList testing', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<VideosList items={videosMock.items} />, div)
	})
	it('VideosList Snapshot', () => {
		const component = render(<VideosList items={videosMock.items} />)
		expect(component.container).toMatchSnapshot()
	})
})
