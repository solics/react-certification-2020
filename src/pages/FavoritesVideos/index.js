import React from 'react'
import styled from 'styled-components/macro'

const FavoritesContainer = styled.div`
	padding: 40px;
`

export default function FavoritesVideos() {
	const favoritesVideos = []
	return (
		<FavoritesContainer>
			{favoritesVideos.length === 0 && <p>You have no favorite videos yet</p>}
			{favoritesVideos &&
				favoritesVideos.map(item => {
					return <div>{item.title}</div>
				})}
		</FavoritesContainer>
	)
}
