import { render } from '@testing-library/react'
import React from 'react'
import { GlobalContextProvider } from '../../context/GlobalContext'
import RelatedVideos from '../../components/RelatedVideos'
import THEMES from '../../themes'

describe('VideosList testing', () => {
	it('VideosList Snapshot', () => {
		const { container } = render(
			<GlobalContextProvider>
				<RelatedVideos videoId="1123asdsa123" theme={THEMES.light} />
			</GlobalContextProvider>
		)
		expect(container).toMatchSnapshot()
	})
})
