import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import THEMES from '../../themes'
import { GlobalContext } from '../../context/GlobalContext'

const VideoCardStyled = styled.div`
	width: 18%;
	margin: 20px 10px;
	border-radius: 5px;
	overflow: hidden;
	display: flex;
	flex-flow: column;
	background-color: ${props => props.theme.cardBackground};
	@media only screen and (max-width: 1400px) {
		width: 23%;
	}
	@media only screen and (max-width: 1100px) {
		width: 30%;
	}
	@media only screen and (max-width: 768px) {
		width: 45%;
	}
	@media only screen and (max-width: 475px) {
		width: 100%;
	}
	a {
		text-decoration: inherit;
		color: inherit;
	}
`
const VideoThumbnail = styled.img`
	width: 100%;
	height: 120px;
	object-fit: cover;
	display: block;
`
const VideoInfo = styled.div`
	padding: 10px;
	flex: 1;
`

const VideoTitle = styled.span`
	display: -webkit-box;
	font-size: 14px;
	font-weight: 800;
	min-height: 32px;
	max-height: 32px;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	margin-bottom: 8px;
`
const VideoDescription = styled.p`
	color: #888;
	font-size: 12px;
	font-style: italic;
	margin: 0;
`

export default function VideoCard({ item }) {
	const [state] = useContext(GlobalContext)
	return (
		<VideoCardStyled theme={THEMES[state.currentTheme]}>
			<Link to={`/video-detail/${item.id.videoId}`}>
				<VideoThumbnail src={item.snippet.thumbnails.default.url} alt="thumbnail" />
				<VideoInfo>
					<VideoTitle>{item.snippet.title}</VideoTitle>
					<VideoDescription>{item.snippet.description}</VideoDescription>
				</VideoInfo>
			</Link>
		</VideoCardStyled>
	)
}
