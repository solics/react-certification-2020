import { useContext, useCallback } from 'react'
import { useParams } from 'react-router'
import { GlobalContext } from '../context/GlobalContext'
import { YT_DETAIL_API } from '../utils/urls'

export default function useVideoDetail() {
	const { videoId } = useParams()
	const [, dispatch] = useContext(GlobalContext)

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

	return [requestVideoDetail, videoId]
}
