import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import useVideoDetail from '../../customHooks/useVideoDetail'
import { GlobalContextProvider } from '../../context/GlobalContext'

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useParams: () => ({
		videoId: 'testId123456',
	}),
}))

describe('useVideoDetail tests', () => {
	const wrapper = ({ children }) => (
		<GlobalContextProvider>{children}</GlobalContextProvider>
	)

	it('verifies that it works well with no initial value', () => {
		const { result } = renderHook(() => useVideoDetail(), { wrapper })
		expect(result.current[0]).not.toBeUndefined() // currentVideo
		expect(result.current[1]).toBe('testId123456') // videoId
	})
})
