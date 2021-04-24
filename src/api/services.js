const mockedUser = {
	id: '123',
	name: 'Wizeline',
	avatarUrl:
		'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
}
export const loginApi = async ({ username, password }) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (username === 'wizeline' && password === '123') {
				return resolve(mockedUser)
			}
			return reject(new Error('Username or password invalid'))
		}, 500)
	})
}
