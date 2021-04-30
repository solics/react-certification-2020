export const saveArrayOnLocalStorage = (id, value) => {
	localStorage.setItem(id, JSON.stringify(value))
}

export const getArrayFromLocalStorage = id => {
	return JSON.parse(localStorage.getItem(id))
}

export const addFavoriteVideo = video => {
	const currentVideo = JSON.parse(JSON.stringify(video))
	delete currentVideo.snippet.description
	const favoriteVideos = JSON.parse(localStorage.getItem('favoriteVideos')) || []
	favoriteVideos.push(currentVideo)
	localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos))
}

export const removeFavoriteVideo = videoId => {
	const favoriteVideos = JSON.parse(localStorage.getItem('favoriteVideos')) || []
	const newFavoriteVideos = favoriteVideos.filter(
		videoIdFavorite => videoId !== videoIdFavorite.id.videoId
	)
	if (newFavoriteVideos.length)
		localStorage.setItem('favoriteVideos', JSON.stringify(newFavoriteVideos))
	else localStorage.removeItem('favoriteVideos')
}

export const isFavorite = videoId => {
	const favoriteVideos = JSON.parse(localStorage.getItem('favoriteVideos'))
	if (favoriteVideos && favoriteVideos.find(video => video.id === videoId)) return true
	return false
}

export const getFavoriteVideos = () => {
	return JSON.parse(localStorage.getItem('favoriteVideos')) || []
}
