import React from 'react'
import { render } from '@testing-library/react'
import App from '../../components/App'

describe('App', () => {
	it('App Snapshot', () => {
		const component = render(<App />)
		expect(component.container).toMatchSnapshot()
	})
})
