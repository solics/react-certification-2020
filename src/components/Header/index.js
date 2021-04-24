import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import MENU_ICON from '../../assets/img/svg/menu.svg'
import USER_ICON from '../../assets/img/svg/user.svg'
import { GlobalContext } from '../../context/GlobalContext'
import SearchBox from '../SearchBox'
import SwitchTheme from '../SwitchTheme'
import THEMES from '../../themes'
import Login from '../../pages/Login'
import { loginApi } from '../../api/services'
import SideMenu from '../SideMenu'

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
	const [state] = useContext(GlobalContext)
	const [showLoginBtn, setShowLoginBtn] = useState(false)
	const [showLoginModal, setShowLoginModal] = useState(false)
	const [avatarUrl, setAvatarUrl] = useState(USER_ICON)
	const [error, setError] = useState('')
	const [showSideMenu, setShowSideMenu] = useState(false)

	useEffect(() => {
		const clickOutside = e => {
			if (e.target?.id === 'modal') setShowLoginModal(false)
			else if (e.target?.id === 'modal-menu') setShowSideMenu(false)
			setError('')
		}
		document.addEventListener('click', clickOutside)
		return () => document.removeEventListener('click', clickOutside)
	}, [])

	const handleClickLogin = () => {
		setShowLoginBtn(false)
		setShowLoginModal(true)
	}

	const handleSubmitLogin = async ({ username, password }) => {
		try {
			const response = await loginApi({ username, password })
			setAvatarUrl(response.avatarUrl)
			setShowLoginModal(false)
		} catch (err) {
			console.log(err)
			setError('Username or password invalid')
		}
	}

	return (
		<>
			<HeaderStyled theme={THEMES[state.currentTheme]}>
				{showSideMenu && <SideMenu />}
				<HeaderLeft>
					<MenuButton onClick={() => setShowSideMenu(!showSideMenu)}>
						<img src={MENU_ICON} alt="menu" />
					</MenuButton>
					<SearchBox />
				</HeaderLeft>
				<HeaderRight>
					<SwitchTheme />
					<Avatar onClick={() => setShowLoginBtn(!showLoginBtn)}>
						<img src={avatarUrl} alt="avatar" />
					</Avatar>
					{showLoginBtn && (
						<MenuLogIn onClick={handleClickLogin}>
							<span>Log in</span>
						</MenuLogIn>
					)}
				</HeaderRight>
			</HeaderStyled>
			{showLoginModal && <Login handleSubmitLogin={handleSubmitLogin} error={error} />}
		</>
	)
}

export default Header
