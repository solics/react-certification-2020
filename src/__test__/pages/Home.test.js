import React from 'react'
import { render } from '@testing-library/react'
import { GlobalContextProvider } from '../../context/GlobalContext'
import Home from '../../pages/Home'

describe('Home', () => {
	it('Home Snapshot', () => {
		const component = render(
			<GlobalContextProvider>
				<Home />
			</GlobalContextProvider>
		)
		expect(component.container).toMatchSnapshot()
	})
})
