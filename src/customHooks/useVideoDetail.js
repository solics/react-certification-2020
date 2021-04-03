import { useContext, useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router'
import { YoutubeContext } from '../context/YoutubeContext'
import { getArrayFromLocalStorage } from '../utils/localStorage'

export default function useVideoDetail() {
	const { videoId } = useParams()
	const { videos, setVideosContext } = useContext(YoutubeContext)
	const [currentVideo, setCurrentVideo] = useState({ snippet: { title: '...' } })

	useEffect(() => {
		let videosTmp
		if (videos.length) videosTmp = [...videos]
		else {
			videosTmp = getArrayFromLocalStorage('videos') || []
			if (videosTmp.length) setVideosContext(videosTmp)
		}

		const videoFound = videosTmp.find(
			video => String(video.id.videoId) === String(videoId)
		)
		setCurrentVideo(videoFound)
	}, [videoId, videos, setVideosContext]) // It'll be executed once

	const relatedVideos = useMemo(() => {
		return videos.filter(video => video.id.videoId !== videoId)
	}, [videos, videoId])

	return [currentVideo, relatedVideos, videoId]
}
