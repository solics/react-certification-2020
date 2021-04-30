import React from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import VideoCard from '../VideoCard'

const VideosListStyled = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
`
const MessageStyled = styled.p`
	font-size: 18px;
`

export default function VideosList({ videos, isLoading, onError }) {
	return !isLoading ? (
		<>
			<VideosListStyled>
				{videos.map(item => (
					<VideoCard key={uuidv4()} item={item} />
				))}
				{videos.length === 0 && <MessageStyled>No results</MessageStyled>}
			</VideosListStyled>
			{onError?.msg && <p>{onError?.msg}</p>}
		</>
	) : (
		<p>Loading...</p>
	)
}
