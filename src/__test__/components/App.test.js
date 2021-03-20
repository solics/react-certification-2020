import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../components/App'

describe('App testing', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<App />, div)
	})

	it('App Snapshot', () => {
		const component = render(<App />)
		expect(component.container).toMatchSnapshot()
	})
})
