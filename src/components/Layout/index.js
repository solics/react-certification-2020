import React, { useContext } from 'react'
import styled from 'styled-components'
import Header from '../Header'
import { ThemeContext } from '../../context/ThemeContext'

const MainStyled = styled.main`
	background-color: ${props => props.theme.background};
	min-height: calc(100vh - 75px);
	p {
		color: ${props => props.theme.color};
	}
	span {
		color: ${props => props.theme.color};
	}
	h1 {
		color: ${props => props.theme.colorTitle};
	}
`

const Layout = ({ children }) => {
	const themeContext = useContext(ThemeContext)

	return (
		<>
			<Header />
			<MainStyled theme={themeContext}>{children}</MainStyled>
		</>
	)
}

export default Layout
