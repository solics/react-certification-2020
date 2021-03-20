import { render } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from '../../components/Layout'

describe('Layout testing', () => {
	it('Renders without crashing', () => {
		const div = document.createElement('div')
		ReactDOM.render(<Layout />, div)
	})

	it('Layout Snapshot', () => {
		const component = render(<Layout />)
		expect(component.container).toMatchSnapshot()
	})
})
