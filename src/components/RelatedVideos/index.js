import React, { useEffect, useContext } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import { Link } from 'react-router-dom'
import useSearchRelatedVideos from '../../customHooks/useSearchRelatedVideos'
import { GlobalContext } from '../../context/GlobalContext'

const RelatedVideosStyled = styled.div`
	width: 30%;
	a {
		text-decoration: inherit;
	}
	@media only screen and (max-width: 768px) {
		width: 100%;
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
export default function RelatedVideos({ videoId, theme }) {
	const [requestRelatedVideos] = useSearchRelatedVideos()
	const [state] = useContext(GlobalContext)

	const {
		youtube: {
			related: { videos },
		},
	} = state

	useEffect(() => {
		requestRelatedVideos(videoId)
	}, [requestRelatedVideos, videoId])

	return videos.length ? (
		<RelatedVideosStyled>
			<h4>Related Videos</h4>
			{videos.map(video => {
				if (!video.snippet) return null
				return (
					<Link key={uuidv4()} to={`/video-detail/${video.id.videoId}`}>
						<ThumbnailVideoStyled theme={theme}>
							<img
								src={video.snippet?.thumbnails.default.url}
								alt={video.snippet?.title || 'alt-description'}
							/>
							<ThumbnailVideoDescriptionStyled>
								<p>{video.snippet?.title}</p>
								<span>{video.snippet?.channelTitle}</span>
							</ThumbnailVideoDescriptionStyled>
						</ThumbnailVideoStyled>
					</Link>
				)
			})}
		</RelatedVideosStyled>
	) : (
		<div>loading...</div>
	)
}
