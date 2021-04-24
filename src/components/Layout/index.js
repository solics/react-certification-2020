import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import Header from '../Header'
import THEMES from '../../themes'
import { GlobalContext } from '../../context/GlobalContext'

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
	const [state] = useContext(GlobalContext)

	return (
		<>
			<Header />
			<MainStyled theme={THEMES[state.currentTheme]}>{children}</MainStyled>
		</>
	)
}

export default Layout
