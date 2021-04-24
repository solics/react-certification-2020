import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components/macro'

const ModalLoginStyled = styled.div`
	position: fixed;
	background-color: #00000099;
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
`
const LoginBoxStyled = styled.div`
	width: 300px;
	padding: 40px;
	background-color: #ffffff;
`
const InputStyled = styled.input`
	border: 1px solid #ccc;
	padding: 10px;
	display: block;
	width: 100%;
	margin-bottom: 8px;
`
const SubmitStyled = styled.button`
	width: 100%;
	padding: 10px;
	display: block;
	cursor: pointer;
	background-color: #b7b7ba;
	border: 0;
`
const ErrorStyled = styled.p`
	font-size: 12px;
	color: red;
`

export default function Login({ handleSubmitLogin, error }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	return ReactDOM.createPortal(
		<ModalLoginStyled id="modal">
			<LoginBoxStyled>
				<form onSubmit={() => handleSubmitLogin({ username, password })}>
					<h2>Login</h2>
					<InputStyled
						placeholder="Username"
						value={username}
						onChange={e => setUsername(e.target.value)}
					/>
					<InputStyled
						placeholder="Passowrd"
						value={password}
						type="password"
						onChange={e => setPassword(e.target.value)}
					/>
					{error && <ErrorStyled>{error}</ErrorStyled>}
					<SubmitStyled>Send</SubmitStyled>
				</form>
			</LoginBoxStyled>
		</ModalLoginStyled>,
		document.getElementById('root')
	)
}
