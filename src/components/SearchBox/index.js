import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import styled from 'styled-components'
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
	const history = useHistory()
	const { searchTerm } = useParams()
	const themeContext = useContext(ThemeContext)
	const { search } = useContext(YoutubeContext)
	const [inpSearch, setInpSearch] = useState(searchTerm)

	useEffect(() => {
		if (searchTerm) search(inpSearch)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm])

	const handleChangeInpSearch = e => setInpSearch(e.target.value)

	const handleOnKeyDown = e => {
		if (e.keyCode === 13 && inpSearch) history.push(`/search/${inpSearch}`)
	}

	return (
		<>
			<InputSearch
				theme={themeContext}
				value={inpSearch}
				onChange={handleChangeInpSearch}
				onKeyDown={handleOnKeyDown}
				type="text"
				placeholder="Search"
			/>
		</>
	)
}
