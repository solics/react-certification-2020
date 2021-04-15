import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import MENU_ICON from '../../assets/img/svg/menu.svg'
import USER_ICON from '../../assets/img/svg/user.svg'
import { GlobalContext } from '../../context/GlobalContext'
import SearchBox from '../SearchBox'
import SwitchTheme from '../SwitchTheme'
import THEMES from '../../themes'

const HeaderStyled = styled.header`
	padding: 20px;
	display: flex;
	justify-content: space-between;
	background-color: ${props => props.theme.headerBackground};
`
const MenuButton = styled.button`
	padding: 5px 10px 0 0px;
	background: none;
	border: none;
	cursor: pointer;
	img {
		width: 70%;
	}
`
const HeaderLeft = styled.div`
	display: grid;
	grid-template-columns: 40px auto;
	width: 300px;
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`
const HeaderRight = styled.div`
	display: flex;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`
const Avatar = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	overflow: hidden;
	border: 2px solid white;
	img {
		width: 100%;
	}
`

const Header = () => {
	const [state] = useContext(GlobalContext)

	return (
		<>
			<HeaderStyled theme={THEMES[state.currentTheme]}>
				<HeaderLeft>
					<MenuButton>
						<img src={MENU_ICON} alt="menu" />
					</MenuButton>
					<SearchBox />
				</HeaderLeft>
				<HeaderRight>
					<SwitchTheme />
					<Avatar>
						<img src={USER_ICON} alt="avatar" />
					</Avatar>
				</HeaderRight>
			</HeaderStyled>
		</>
	)
}

export default Header
