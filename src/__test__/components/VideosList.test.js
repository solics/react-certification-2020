import { render } from '@testing-library/react'
import React from 'react'
import { GlobalContextProvider } from '../../context/GlobalContext'
import VideosList from '../../components/VideosList'

describe('VideosList testing', () => {
	it('VideosList Snapshot', () => {
		const { container } = render(
			<GlobalContextProvider>
				<VideosList />
			</GlobalContextProvider>
		)
		expect(container).toMatchSnapshot()
	})
})
