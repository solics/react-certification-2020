import React from 'react'
import styled from 'styled-components/macro'
import VideosList from '../../components/VideosList'
import { getFavoriteVideos } from '../../utils/localStorage'

const FavoritesContainer = styled.div`
	padding: 40px;
`

export default function FavoritesVideos() {
	const favoritesVideos = getFavoriteVideos()
	return (
		<FavoritesContainer>
			<VideosList videos={favoritesVideos} isLoading={false} />
		</FavoritesContainer>
	)
}
