import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { YoutubeContext } from '../../context/YoutubeContext'
import { ThemeContext } from '../../context/ThemeContext'

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
	const themeContext = useContext(ThemeContext)
	const history = useHistory()
	const { search } = useContext(YoutubeContext)
	const [inpSearch, setInpSearch] = useState('')

	const handleChangeInpSearch = e => setInpSearch(e.target.value)

	const handleOnSubmit = e => {
		e.preventDefault()
		search(inpSearch)
		history.push(`/search/${inpSearch}`)
	}

	return (
		<form onSubmit={handleOnSubmit}>
			<InputSearch
				theme={themeContext}
				value={inpSearch}
				onChange={handleChangeInpSearch}
				type="text"
				placeholder="Search"
			/>
		</form>
	)
}
