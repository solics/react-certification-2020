export const saveArrayOnLocalStorage = (id, value) => {
	localStorage.setItem(id, JSON.stringify(value))
}
export const getArrayFromLocalStorage = id => {
	return JSON.parse(localStorage.getItem(id))
}
