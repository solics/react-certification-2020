import React, { createContext, useState } from 'react'
import { saveArrayOnLocalStorage } from '../utils/localStorage'

const API_KEY = process.env.REACT_APP_YT_API_KEY
const MAX_RESULTS = 20

const YoutubeContext = createContext()

const SEARCH_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=video&maxResults=${MAX_RESULTS}&`

function YoutubeContextProvider({ children }) {
	const [videos, setVideos] = useState([])
	const defaultContext = {
		videos,
		search: term => {
			fetch(`${SEARCH_URL}q=${term}`)
				.then(response => response.json())
				.then(data => {
					if (data?.items?.length) {
						setVideos(data.items)
						saveArrayOnLocalStorage('videos', data.items)
					} else setVideos([])
				})
				.catch(error => {
					console.error(error)
				})
		},
		setVideosContext: newVideos => {
			setVideos(newVideos)
		},
	}

	return (
		<YoutubeContext.Provider value={defaultContext}>{children}</YoutubeContext.Provider>
	)
}

export { YoutubeContext, YoutubeContextProvider }
