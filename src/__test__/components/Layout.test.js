import { render } from '@testing-library/react'
import React from 'react'
import Layout from '../../components/Layout'
import { ThemeContextProvider } from '../../context/ThemeContext'

describe('Layout testing', () => {
	it('Layout Snapshot', () => {
		const component = render(
			<ThemeContextProvider>
				<Layout />
			</ThemeContextProvider>
		)
		expect(component.container).toMatchSnapshot()
	})
})
