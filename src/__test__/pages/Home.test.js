import React from 'react'
import { render } from '@testing-library/react'
import { YoutubeContextProvider } from '../../context/YoutubeContext'
import Home from '../../pages/Home'

describe('Home', () => {
	it('Home Snapshot', () => {
		const component = render(
			<YoutubeContextProvider>
				<Home />
			</YoutubeContextProvider>
		)
		expect(component.container).toMatchSnapshot()
	})
})
