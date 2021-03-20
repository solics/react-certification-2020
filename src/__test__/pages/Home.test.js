import { getByText } from '@testing-library/dom'
import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../../pages/Home'

describe('Home testing', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div')
		/*
			item in position 0 in items on videosMock is 'Wizeline'
			*/
		ReactDOM.render(<Home />, div)
		getByText(div, 'Videos List')
	})
	it('Home Snapshot', () => {
		const component = render(<Home />)
		expect(component.container).toMatchSnapshot()
	})
})
