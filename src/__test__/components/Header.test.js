import React from 'react'
import ReactDOM from 'react-dom'
import { fireEvent, render } from '@testing-library/react'
import Header from '../../components/Header'

describe('Header testing', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Header />, div)
	})

	it("There's and input for search", () => {
		const { queryByPlaceholderText } = render(<Header />)
		expect(queryByPlaceholderText('Search')).toBeTruthy()
	})

	it('Click toggle', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Header />, div)
		const toggle = div.querySelector('input[type=checkbox]')
		fireEvent.click(toggle, { button: 0 })
	})

	it('Header Snapshot', () => {
		const component = render(<Header />)
		expect(component.container).toMatchSnapshot()
	})

	it('Menu button is an img', () => {
		const { queryByAltText } = render(<Header />)
		expect(queryByAltText('menu')).toBeTruthy()
	})

	it('Avatar icon is an img', () => {
		const { queryByAltText } = render(<Header />)
		expect(queryByAltText('avatar')).toBeTruthy()
	})
})
