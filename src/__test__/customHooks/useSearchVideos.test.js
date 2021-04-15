import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import useSearchVideos from '../../customHooks/useSearchVideos'
import { GlobalContextProvider } from '../../context/GlobalContext'

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useParams: () => ({
		videoId: 'testId123456',
	}),
}))

describe('useSearchVideos tests', () => {
	const wrapper = ({ children }) => (
		<GlobalContextProvider>{children}</GlobalContextProvider>
	)

	it('verifies that it works well with no initial value', () => {
		const { result } = renderHook(() => useSearchVideos(), { wrapper })
		expect(result.current[0]).not.toBeUndefined() // currentVideo
	})
})
