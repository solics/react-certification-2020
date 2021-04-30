import React, { useContext, useEffect } from 'react'
import styled from 'styled-components/macro'
import VideosList from '../../components/VideosList'
import { GlobalContext } from '../../context/GlobalContext'

const HomeStyled = styled.div`
	padding: 20px;
`
const Title = styled.h1`
	text-align: center;
`

const Home = () => {
	const [state, dispatch] = useContext(GlobalContext)
	const {
		youtube: {
			searched: { videos, isLoading, onError },
		},
	} = state
	const props = { videos, isLoading, onError }

	useEffect(() => {
		return () => {
			dispatch({ type: 'CLEAN_VIDEOS_RESULTS' })
		}
	}, [dispatch])

	return (
		<HomeStyled>
			<Title>Results</Title>
			<VideosList {...props} />
		</HomeStyled>
	)
}

export default Home
