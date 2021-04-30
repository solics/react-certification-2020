import React from 'react'
import styled from 'styled-components/macro'
import useVideoDetail from '../../customHooks/useVideoDetail'
import THEMES from '../../themes'
import RelatedVideos from '../../components/RelatedVideos'

const VideoDetailStyled = styled.div`
	padding: 20px 80px;
	display: flex;
	flex-wrap: wrap;
	& > span:first-child {
		display: block;
		width: 70%;
	}
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
	const [
		currentTheme,
		isLogged,
		isLoading,
		video,
		isFavoriteVideo,
		addToFavorites,
		removeFromFavorites,
	] = useVideoDetail()
	const {
		snippet: { title, channelTitle, description },
		id,
	} = video

	return (
		<VideoDetailStyled>
			{isLoading ? (
				<span>Loading</span>
			) : (
				<VideoInfoStyled theme={THEMES[currentTheme]}>
					<IframeStyled title={title} src={`https://www.youtube.com/embed/${id}`} />
					<h2>{title}</h2>
					{isLogged && !isFavoriteVideo && (
						<button type="button" onClick={addToFavorites}>
							Add to favorites
						</button>
					)}
					{isLogged && isFavoriteVideo && (
						<button type="button" onClick={removeFromFavorites}>
							Remove from favorites
						</button>
					)}
					<h4>{channelTitle}</h4>
					<p>{description}</p>
				</VideoInfoStyled>
			)}
			<RelatedVideos theme={THEMES[currentTheme]} videoId={id} />
		</VideoDetailStyled>
	)
}
