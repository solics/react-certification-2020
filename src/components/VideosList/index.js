import React, { useContext } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { YoutubeContext } from '../../context/YoutubeContext'
import VideoCard from '../VideoCard'

const VideosListStyled = styled.div`
	display: flex;
	flex-flow: wrap;
	justify-content: space-between;
`
const MessageStyled = styled.p`
	font-size: 18px;
`

export default function VideosList() {
	const { videos, loading, errorMsg } = useContext(YoutubeContext)
	return !loading ? (
		<>
			<VideosListStyled>
				{videos.map(item => (
					<VideoCard key={uuidv4()} item={item} />
				))}
				{videos.length === 0 && <MessageStyled>There&apos;s no results</MessageStyled>}
			</VideosListStyled>
			{errorMsg && <p>{errorMsg}</p>}
		</>
	) : (
		<p>Loading...</p>
	)
}
