import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

const THEMES = {
	light: {
		background: '#eeeeee',
		color: '#555555',
		colorTitle: '#333333',
		headerBackground: '#dddddd',
		cardBackground: '#e6e6e6',
	},
	dark: {
		background: '#33333d',
		color: '#b7b7ba',
		colorTitle: '#f9f9f9',
		headerBackground: '#424251',
		cardBackground: '#1a1a1a',
	},
}
function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState('dark')
	const defaultContext = {
		theme,
		toggle: () => setTheme(theme === 'light' ? 'dark' : 'light'),
		...THEMES[theme],
	}

	return <ThemeContext.Provider value={defaultContext}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider }
