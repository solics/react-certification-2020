import React, { useContext } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import useVideoDetail from '../../customHooks/useVideoDetail'

const VideoDetailStyled = styled.div`
	padding: 20px 80px;
	display: flex;
`
const VideoInfoStyled = styled.div`
	margin-right: 20px;
	color: ${props => props.theme.color};
`
const RelatedVideosStyled = styled.div`
	a {
		text-decoration: inherit;
	}
`
const ThumbnailVideoStyled = styled.div`
	display: grid;
	grid-template-columns: 120px auto;
	margin-bottom: 8px;
	background: ${props => props.theme.headerBackground};
	p {
		margin-top: 8px;
		font-size: 12px;
	}
	span {
		font-size: 10px;
	}
`
const ThumbnailVideoDescriptionStyled = styled.div`
	padding: 0px 8px;
`
const IframeStyled = styled.iframe`
	width: 900px;
	height: 500px;
	border: 0;
`

export default function VideoDetail() {
	const themeContext = useContext(ThemeContext)
	const [currentVideo, relatedVideos, videoId] = useVideoDetail()

	const {
		snippet: { title, channelTitle, description },
	} = currentVideo

	return (
		<VideoDetailStyled>
			<VideoInfoStyled theme={themeContext}>
				<IframeStyled title={title} src={`https://www.youtube.com/embed/${videoId}`} />
				<h2>{title}</h2>
				<h4>{channelTitle}</h4>
				<p>{description}</p>
			</VideoInfoStyled>
			<RelatedVideosStyled>
				{relatedVideos.map(video => {
					return (
						<Link key={uuidv4()} to={`/video-detail/${video.id.videoId}`}>
							<ThumbnailVideoStyled theme={themeContext}>
								<img
									src={video.snippet.thumbnails.default.url}
									alt={video.snippet.title}
								/>
								<ThumbnailVideoDescriptionStyled>
									<p>{video.snippet.title}</p>
									<span>{video.snippet.channelTitle}</span>
								</ThumbnailVideoDescriptionStyled>
							</ThumbnailVideoStyled>
						</Link>
					)
				})}
			</RelatedVideosStyled>
		</VideoDetailStyled>
	)
}
