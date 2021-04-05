import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import useVideoDetail from '../../customHooks/useVideoDetail'
import { YoutubeContextProvider } from '../../context/YoutubeContext'

jest.mock('react-router', () => ({
	...jest.requireActual('react-router'),
	useParams: () => ({
		videoId: 'testId123456',
	}),
}))

describe('useVideoDetail tests', () => {
	const wrapper = ({ children }) => (
		<YoutubeContextProvider>{children}</YoutubeContextProvider>
	)

	it('verifies that it works well with no initial value', () => {
		const { result } = renderHook(() => useVideoDetail(), { wrapper })
		expect(result.current[0]).toEqual({ snippet: { title: '...' } }) // currentVideo
		expect(result.current[1]).toEqual([]) // relatedVideos
		expect(result.current[2]).toBe('testId123456') // videoId
	})
})
