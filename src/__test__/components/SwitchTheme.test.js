import React from 'react'
import { getNodeText, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeContextProvider } from '../../context/ThemeContext'
import SwitchTheme from '../../components/SwitchTheme'

describe('SwitchTheme testing', () => {
	it('checks if change the text of theme on click switch toggle', () => {
		const { container } = render(
			<ThemeContextProvider>
				<SwitchTheme />
			</ThemeContextProvider>
		)
		expect(getNodeText(container.querySelector('span'))).toBe('Dark Mode')
		userEvent.click(container.querySelector('label'))
		expect(getNodeText(container.querySelector('span'))).toBe('Light Mode')
		userEvent.click(container.querySelector('span'))
		expect(getNodeText(container.querySelector('span'))).toBe('Dark Mode')
	})
})
