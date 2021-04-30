import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { loginApi } from '../api/services'

const useLogin = () => {
	const [, dispatch] = useContext(GlobalContext)
	const [showLoginModal, setShowLoginModal] = useState(false)
	const [showLoginBtn, setShowLoginBtn] = useState(false)
	const [showSideMenu, setShowSideMenu] = useState(false)

	const clickLogin = () => {
		setShowLoginBtn(false)
		setShowLoginModal(true)
	}

	const toggleShowLoginBtn = () => setShowLoginBtn(!showLoginBtn)
	const toggleShowSideMenu = () => setShowSideMenu(!showSideMenu)

	useEffect(() => {
		const clickOutside = e => {
			if (e.target?.id === 'modal') setShowLoginModal(false)
			else if (e.target?.id === 'modal-menu') setShowSideMenu(false)
			// setError('')
		}
		document.addEventListener('click', clickOutside)
		return () => document.removeEventListener('click', clickOutside)
	}, [])

	const login = async loginData => {
		dispatch({ type: 'LOGIN_START' })

		try {
			const response = await loginApi(loginData)
			dispatch({ type: 'LOGIN_SUCCESS', payload: response.avatarUrl })
			setShowLoginModal(false)
		} catch (err) {
			console.log(err)
			dispatch({ type: 'LOGIN_FAIL', payload: { msg: 'Username or password invalid' } })
		} finally {
			dispatch({ type: 'LOGIN_FINISH' })
		}
	}

	const logOut = () => {
		dispatch({ type: 'LOGOUT' })
		setShowLoginBtn(false)
	}

	return [
		showSideMenu,
		showLoginModal,
		showLoginBtn,
		clickLogin,
		login,
		toggleShowSideMenu,
		toggleShowLoginBtn,
		logOut,
	]
}

export default useLogin
