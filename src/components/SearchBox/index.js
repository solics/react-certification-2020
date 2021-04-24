import React, { useState, useContext } from 'react'
import { useHistory, useLocation } from 'react-router'
import styled from 'styled-components/macro'
import { GlobalContext } from '../../context/GlobalContext'
import useSearchVideos from '../../customHooks/useSearchVideos'
import THEMES from '../../themes'

const InputSearch = styled.input`
	display: block;
	border: none;
	height: 35px;
	background-color: ${props => props.theme.background};
	color: ${props => props.theme.color};
	padding: 0 10px;
	&:focus {
		border: 0;
		outline: 0;
	}
	&::placeholder {
		color: #888;
		opacity: 1;
	}
`
export default function SearchBox() {
	const location = useLocation()
	const history = useHistory()
	const [state] = useContext(GlobalContext)
	const [inpSearch, setInpSearch] = useState('')
	const [requestVideos] = useSearchVideos()
	const handleChangeInpSearch = e => setInpSearch(e.target.value)

	const handleOnSubmit = e => {
		e.preventDefault()
		requestVideos(inpSearch)
		if (location.pathname !== '/') history.push('/')
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<InputSearch
				theme={THEMES[state.currentTheme]}
				value={inpSearch}
				onChange={handleChangeInpSearch}
				type="text"
				placeholder="Search"
				id="search-inp"
			/>
		</form>
	)
}
