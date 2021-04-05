import {
	getArrayFromLocalStorage,
	saveArrayOnLocalStorage,
} from '../../utils/localStorage'

describe('Testing localstorage utils', () => {
	it('Testing getArrayFromLocalStorage & saveArrayOnLocalStorage', () => {
		saveArrayOnLocalStorage('test-id', [1, 2, 3, 4, 5])
		expect(getArrayFromLocalStorage('test-id')).toEqual([1, 2, 3, 4, 5])
	})
})
