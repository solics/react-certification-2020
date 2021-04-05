import React from 'react'
import styled from 'styled-components'
import VideosList from '../../components/VideosList'

const HomeStyled = styled.div`
	padding: 20px;
`
const Title = styled.h1`
	text-align: center;
`

const Home = () => {
	return (
		<HomeStyled>
			<Title>Results</Title>
			<VideosList />
		</HomeStyled>
	)
}

export default Home
