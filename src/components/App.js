import React from 'react'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeContextProvider } from '../context/ThemeContext'
import { YoutubeContextProvider } from '../context/YoutubeContext'
import Layout from './Layout'
import Home from '../pages/Home'
import GlobalStyle from '../globalStyles'
import VideoDetail from '../pages/VideoDetail'

const customHistory = createBrowserHistory()
const App = () => {
	return (
		<YoutubeContextProvider>
			<ThemeContextProvider>
				<GlobalStyle />
				<Router history={customHistory}>
					<Switch>
						<Route exact path="/">
							<Layout>
								<Home />
							</Layout>
						</Route>
						<Route path="/video-detail/:videoId">
							<Layout>
								<VideoDetail />
							</Layout>
						</Route>
					</Switch>
				</Router>
			</ThemeContextProvider>
		</YoutubeContextProvider>
	)
}

export default App
