import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { GlobalContext } from '../../context/GlobalContext'
import THEMES from '../../themes'

const ModalSideMenu = styled.div`
	position: fixed;
	background-color: #00000099;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	z-index: 3;
`
const SideMenuStyled = styled.div`
	height: 100vh;
	position: fixed;
	width: 300px;
	left: 0px;
	top: 0;
	background-color: ${props => props.theme.headerBackground};
`
const LinkStyled = styled.div`
	padding: 16px 30px;
	width: 100%;
	border-bottom: 1px solid ${props => props.theme.color};
	a {
		color: inherit;
		text-decoration: none;
		color: ${props => props.theme.color};
	}
`

export default function SideMenu({ isLogged }) {
	const [state] = useContext(GlobalContext)

	return (
		<ModalSideMenu id="modal-menu">
			<SideMenuStyled theme={THEMES[state.currentTheme]}>
				<LinkStyled theme={THEMES[state.currentTheme]}>
					<Link to="/"> Home </Link>
				</LinkStyled>
				{isLogged && (
					<LinkStyled theme={THEMES[state.currentTheme]}>
						<Link to="/favorites"> Favorites </Link>
					</LinkStyled>
				)}
			</SideMenuStyled>
		</ModalSideMenu>
	)
}
