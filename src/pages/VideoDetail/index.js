import React, { useContext, useEffect } from 'react'
import styled from 'styled-components/macro'
import { GlobalContext } from '../../context/GlobalContext'
import useVideoDetail from '../../customHooks/useVideoDetail'
import THEMES from '../../themes'
import RelatedVideos from '../../components/RelatedVideos'

const VideoDetailStyled = styled.div`
	padding: 20px 80px;
	display: flex;
	flex-wrap: wrap;
`
const VideoInfoStyled = styled.div`
	padding-right: 40px;
	color: ${props => props.theme.color};
	width: 70%;
	min-width: 70%;
	@media only screen and (max-width: 768px) {
		width: 100%;
		padding-right: 0px;
	}
`

const IframeStyled = styled.iframe`
	width: 100%;
	min-height: 500px;
	border: 0;
	@media only screen and (max-width: 1100px) {
		min-height: 300px;
	}
`

export default function VideoDetail() {
	const [state] = useContext(GlobalContext)
	const [requestVideoDetail, videoId] = useVideoDetail()

	const {
		currentTheme,
		youtube: {
			currentVideo: { video, isLoading },
		},
	} = state

	useEffect(() => {
		requestVideoDetail()
	}, [requestVideoDetail, videoId])

	const {
		snippet: { title, channelTitle, description },
	} = video

	return (
		<VideoDetailStyled>
			{isLoading ? (
				<span>Loading</span>
			) : (
				<VideoInfoStyled theme={THEMES[currentTheme]}>
					<IframeStyled title={title} src={`https://www.youtube.com/embed/${videoId}`} />
					<h2>{title}</h2>
					<h4>{channelTitle}</h4>
					<p>{description}</p>
				</VideoInfoStyled>
			)}
			<RelatedVideos theme={THEMES[currentTheme]} videoId={videoId} />
		</VideoDetailStyled>
	)
}
