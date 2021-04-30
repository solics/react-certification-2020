import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import MENU_ICON from '../../assets/img/svg/menu.svg'
import { GlobalContext } from '../../context/GlobalContext'
import SearchBox from '../SearchBox'
import SwitchTheme from '../SwitchTheme'
import THEMES from '../../themes'
import Login from '../../pages/Login'
import SideMenu from '../SideMenu'
import useLogin from '../../customHooks/useLogin'

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
	outline: none;
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
	position: relative;
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
	cursor: pointer;
	img {
		width: 100%;
	}
`
const MenuLogIn = styled.div`
	position: absolute;
	bottom: -100%;
	right: 0;
	background-color: #ffffff;
	color: #000000;
	padding: 10px;
	cursor: pointer;
	&:hover {
		background-color: #cccccc;
	}
`

const Header = () => {
	const [
		{
			currentTheme,
			sessionData: { avatarUrl, onError, isLogged },
		},
	] = useContext(GlobalContext)
	const [
		showSideMenu,
		showLoginModal,
		showLoginBtn,
		clickLogin,
		login,
		toggleShowSideMenu,
		toggleShowLoginBtn,
		logOut,
	] = useLogin()

	return (
		<>
			<HeaderStyled theme={THEMES[currentTheme]}>
				{showSideMenu && <SideMenu isLogged={isLogged} />}
				<HeaderLeft>
					<MenuButton onClick={toggleShowSideMenu}>
						<img src={MENU_ICON} alt="menu" />
					</MenuButton>
					<SearchBox />
				</HeaderLeft>
				<HeaderRight>
					<SwitchTheme />
					<Avatar onClick={toggleShowLoginBtn}>
						<img src={avatarUrl} alt="avatar" />
					</Avatar>
					{showLoginBtn && !isLogged && (
						<MenuLogIn onClick={clickLogin}>
							<span>Log in</span>
						</MenuLogIn>
					)}
					{showLoginBtn && isLogged && (
						<MenuLogIn onClick={logOut}>
							<span>Log out</span>
						</MenuLogIn>
					)}
				</HeaderRight>
			</HeaderStyled>
			{showLoginModal && <Login handleSubmitLogin={login} error={onError.msg} />}
		</>
	)
}

export default Header
