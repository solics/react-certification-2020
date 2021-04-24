export const saveArrayOnLocalStorage = (id, value) => {
	localStorage.setItem(id, JSON.stringify(value))
}
export const getArrayFromLocalStorage = id => {
	return JSON.parse(localStorage.getItem(id))
}
export const addFavoriteVideo = video => {
	const favoriteVideos = JSON.parse(localStorage.getItem('favoriteVideos'))
	if (!favoriteVideos) localStorage.setItem('favoriteVideos', JSON.stringify([video]))
	else {
		favoriteVideos.push(video)
		localStorage.setItem('favoriteVideos', JSON.stringify(favoriteVideos))
	}
}
