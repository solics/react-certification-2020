import { useContext, useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router'
import { GlobalContext } from '../context/GlobalContext'
import { YT_DETAIL_API } from '../utils/urls'
import { addFavoriteVideo, removeFavoriteVideo, isFavorite } from '../utils/localStorage'

export default function useVideoDetail() {
	const { videoId } = useParams()
	const [state, dispatch] = useContext(GlobalContext)

	const [isFavoriteVideo, setIsFavoriteVideo] = useState(isFavorite(videoId))
	const {
		currentTheme,
		youtube: {
			currentVideo: { video, isLoading },
		},
		sessionData: { isLogged },
	} = state

	useEffect(() => {
		setIsFavoriteVideo(isFavorite(videoId))
	}, [isLogged, videoId])

	const addToFavorites = () => {
		addFavoriteVideo(video)
		setIsFavoriteVideo(!isFavoriteVideo)
	}
	const removeFromFavorites = () => {
		removeFavoriteVideo(videoId)
		setIsFavoriteVideo(!isFavoriteVideo)
	}

	const requestVideoDetail = useCallback(
		async term => {
			dispatch({ type: 'GET_VIDEO_DETAIL_START', payload: { term } })
			try {
				const resp = await fetch(`${YT_DETAIL_API}id=${videoId}`)
				const data = await resp.json()
				if (data?.items[0]) {
					dispatch({
						type: 'GET_VIDEO_DETAIL_SUCCESS',
						payload: data.items[0],
					})
				} else {
					dispatch({
						type: 'GET_VIDEO_DETAIL_FAIL',
						payload: { msg: data.error.message },
					})
				}
			} catch (e) {
				dispatch({
					type: 'GET_VIDEO_DETAIL_FAIL',
					// payload: { code: e.error.code, msg: e.error.errors[0].message },
				})
			} finally {
				dispatch({ type: 'GET_VIDEO_DETAIL_FINISH' })
			}
		},
		[dispatch, videoId]
	)

	useEffect(() => {
		requestVideoDetail()
		setIsFavoriteVideo(isFavorite(videoId))
	}, [requestVideoDetail, videoId])

	return [
		currentTheme,
		isLogged,
		isLoading,
		video,
		isFavoriteVideo,
		addToFavorites,
		removeFromFavorites,
	]
}
