import React from 'react'
import { Route, Switch } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { GlobalContextProvider } from '../context/GlobalContext'
import Layout from './Layout'
import Home from '../pages/Home'
import GlobalStyle from '../globalStyles'
import VideoDetail from '../pages/VideoDetail'
import FavoritesVideos from '../pages/FavoritesVideos'

const App = () => {
	return (
		<GlobalContextProvider>
			<GlobalStyle />
			<HashRouter>
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
					<Route path="/favorites">
						<Layout>
							<FavoritesVideos />
						</Layout>
					</Route>
				</Switch>
			</HashRouter>
		</GlobalContextProvider>
	)
}

export default App
