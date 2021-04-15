import React, { useContext } from 'react'
import styled from 'styled-components/macro'
import { GlobalContext } from '../../context/GlobalContext'
import THEMES from '../../themes'

const SwitchToggle = styled.label`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 15px;
	margin-top: 10px;
	margin-right: 20px;
	input {
		opacity: 0;
		width: 0;
		height: 0;
		&:checked + span {
			background-color: #999999;
		}
		&:focus + span {
			box-shadow: 0 0 1px #999999;
		}
		&:checked + span:before {
			-webkit-transform: translateX(26px);
			-ms-transform: translateX(26px);
			transform: translateX(26px);
		}
	}
	span {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
		&:before {
			position: absolute;
			content: '';
			height: 26px;
			width: 26px;
			left: -1px;
			bottom: -5px;
			background-color: white;
			-webkit-transition: 0.4s;
			transition: 0.4s;
			border-radius: 50%;
		}
	}
`
const IndicatorStyled = styled.span`
	color: ${props => props.theme.color};
	display: flex;
	align-items: center;
	margin-right: 8px;
	cursor: pointer;
`

const SwitchTheme = () => {
	const [state, dispatch] = useContext(GlobalContext)
	const { currentTheme } = state
	const handleSetTheme = () => {
		const newTheme = currentTheme === 'light' ? 'dark' : 'light'
		dispatch({ type: 'SET_CURRENT_THEME', payload: newTheme })
	}
	return (
		<>
			<IndicatorStyled theme={THEMES[currentTheme]} onClick={handleSetTheme}>
				{currentTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
			</IndicatorStyled>
			<SwitchToggle theme={THEMES[currentTheme]}>
				<input
					type="checkbox"
					checked={currentTheme === 'light'}
					onChange={handleSetTheme}
				/>
				<span />
			</SwitchToggle>
		</>
	)
}

export default SwitchTheme
