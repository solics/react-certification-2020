import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { GlobalContextProvider, GlobalContext } from './context/GlobalContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import GlobalStyle from './globalStyles'
import VideoDetail from './pages/VideoDetail'
import FavoritesVideos from './pages/FavoritesVideos'

const PrivateRoute = ({ children }) => {
	const [
		{
			sessionData: { isLogged },
		},
	] = useContext(GlobalContext)

	return <>{isLogged ? children : <Redirect to="/" />}</>
}
const App = () => {
	return (
		<GlobalContextProvider>
			<GlobalStyle />
			<HashRouter>
				<Switch>
					<Route path="/video-detail/:videoId">
						<Layout>
							<VideoDetail />
						</Layout>
					</Route>
					<Route path="/favorites">
						<PrivateRoute>
							<Layout>
								<FavoritesVideos />
							</Layout>
						</PrivateRoute>
					</Route>
					<Route path="/:searchTerm">
						<Layout>
							<Home />
						</Layout>
					</Route>
					<Route path="/">
						<Layout>
							<Home />
						</Layout>
					</Route>
				</Switch>
			</HashRouter>
		</GlobalContextProvider>
	)
}

export default App
