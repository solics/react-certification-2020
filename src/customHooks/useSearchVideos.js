import { useCallback, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { YT_API } from '../utils/urls'

const MAX_RESULTS = 25

const useSearchVideos = () => {
	const [, dispatch] = useContext(GlobalContext)

	const requestVideos = useCallback(
		async term => {
			dispatch({ type: 'SEARCH_VIDEOS_START', payload: { term } })
			try {
				const resp = await fetch(`${YT_API}maxResults=${MAX_RESULTS}&q=${term}`)
				const data = await resp.json()
				if (data?.items?.length) {
					dispatch({
						type: 'SEARCH_VIDEOS_SUCCESS',
						payload: { videos: data.items },
					})
				} else {
					dispatch({ type: 'SEARCH_VIDEOS_FAIL', payload: { msg: data.error.message } })
				}
			} catch (e) {
				console.log('Error: ', e)
				dispatch({ type: 'SEARCH_VIDEOS_FAIL' })
			} finally {
				dispatch({ type: 'SEARCH_VIDEOS_FINISH' })
			}
		},
		[dispatch]
	)

	return [requestVideos]
}

export default useSearchVideos
