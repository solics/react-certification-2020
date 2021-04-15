import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { Route, Router } from 'react-router'
import { GlobalContextProvider } from '../../context/GlobalContext'
import App from '../../components/App'
import { YT_API } from '../../utils/urls'
import mockYT from '../../youtube-videos-mock.json'

const history = createMemoryHistory()
history.push('/')

export const renderWithRouter = Component =>
	render(
		<GlobalContextProvider>
			<Router history={history}>
				<Route>
					<Component />
				</Route>
			</Router>
		</GlobalContextProvider>
	)

const handlers = [
	rest.get(`${YT_API}q=shingeki`, (req, res, ctx) => {
		return res(ctx.json(mockYT))
	}),
]
const server = setupServer(...handlers)
beforeAll(() => {
	server.listen()
})
afterAll(() => {
	server.close()
})

describe('App', () => {
	it('App Snapshot', () => {
		const component = render(<App />)
		expect(component.container).toMatchSnapshot()
	})
	it('verifies if when I search a term it brings the list of videos and look for the title of one of them', async () => {
		server.use(
			rest.post(`${YT_API}q=shingeki`, (req, res, ctx) => {
				return res(ctx.json(mockYT))
			})
		)
		const { container } = renderWithRouter(App)
		const inputSearchBox = container.querySelector('input')
		userEvent.type(inputSearchBox, 'shingeki')
		expect(container.querySelector('input')).toHaveValue('shingeki')
		fireEvent.submit(inputSearchBox)
		expect(
			await screen.findByText(/Welcome to Wizeline Guadalajara/i)
		).toBeInTheDocument()
	})
})
