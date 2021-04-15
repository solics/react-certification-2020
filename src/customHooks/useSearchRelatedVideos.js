import { useCallback, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { YT_API } from '../utils/urls'

const MAX_RESULTS = 25

const useSearchRelatedVideos = () => {
	const [, dispatch] = useContext(GlobalContext)

	const requestRelatedVideos = useCallback(
		async videoId => {
			dispatch({ type: 'SEARCH_RELATED_VIDEOS_START', payload: { videoId } })
			try {
				const resp = await fetch(
					`${YT_API}maxResults=${MAX_RESULTS}&relatedToVideoId=${videoId}`
				)
				const data = await resp.json()
				if (data?.items?.length) {
					dispatch({
						type: 'SEARCH_RELATED_VIDEOS_SUCCESS',
						payload: { videos: data.items },
					})
				} else {
					dispatch({
						type: 'SEARCH_RELATED_VIDEOS_FAIL',
						payload: { msg: data.error.message },
					})
				}
			} catch (e) {
				console.log('Error: ', e)
				dispatch({ type: 'SEARCH_RELATED_VIDEOS_FAIL' })
			} finally {
				dispatch({ type: 'SEARCH_RELATED_VIDEOS_FINISH' })
			}
		},
		[dispatch]
	)

	return [requestRelatedVideos]
}

export default useSearchRelatedVideos
