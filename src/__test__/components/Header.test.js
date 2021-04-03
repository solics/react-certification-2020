import React from 'react'
import { render } from '@testing-library/react'
import Header from '../../components/Header'
import { ThemeContextProvider } from '../../context/ThemeContext'

describe('Header testing', () => {
	it("There's and input for search", () => {
		const { queryByPlaceholderText } = render(
			<ThemeContextProvider>
				<Header />
			</ThemeContextProvider>
		)
		expect(queryByPlaceholderText('Search')).toBeTruthy()
	})
})
