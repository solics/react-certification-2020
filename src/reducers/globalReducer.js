import USER_ICON from '../assets/img/svg/user.svg'

const avatarUrlDefault = USER_ICON

const initialState = {
	currentTheme: 'dark',
	youtube: {
		searched: {
			searchedTerm: '',
			videos: [],
			isLoading: false,
			onError: {
				code: '',
				msg: '',
			},
		},
		related: {
			videoId: '',
			videos: [],
			isLoading: false,
			onError: {
				code: '',
				msg: '',
			},
		},
		currentVideo: {
			video: { snippet: { title: '...' } },
			isLoading: false,
			onError: {
				code: '',
				msg: '',
			},
		},
	},
	sessionData: {
		isLogged: false,
		isLoading: false,
		avatarUrl: avatarUrlDefault,
		onError: {
			code: '',
			msg: '',
		},
	},
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'SET_CURRENT_THEME':
			return {
				...state,
				currentTheme: action.payload,
			}
		case 'SEARCH_VIDEOS_START':
			return {
				...state,
				youtube: {
					...state.youtube,
					searched: {
						...state.youtube.searched,
						searchedTerm: action.payload.searchedTerm,
						isLoading: true,
					},
				},
			}
		case 'SEARCH_VIDEOS_SUCCESS':
			return {
				...state,
				youtube: {
					...state.youtube,
					searched: {
						...state.youtube.searched,
						videos: action.payload.videos,
					},
				},
			}
		case 'SEARCH_VIDEOS_FAIL':
			return {
				...state,
				youtube: {
					...state.youtube,
					searched: {
						...state.youtube.searched,
						onError: {
							code: action.payload?.code || 'Unknown',
							msg: action.payload?.msg || 'Generic Error',
						},
					},
				},
			}
		case 'SEARCH_VIDEOS_FINISH':
			return {
				...state,
				youtube: {
					...state.youtube,
					searched: {
						...state.youtube.searched,
						isLoading: false,
						onError: {
							code: '',
							msg: '',
						},
					},
				},
			}
		case 'CLEAN_VIDEOS_RESULTS':
			return {
				...state,
				youtube: {
					...state.youtube,
					searched: {
						searchedTerm: '',
						videos: [],
						isLoading: false,
						onError: {
							code: '',
							msg: '',
						},
					},
				},
			}
		case 'SEARCH_RELATED_VIDEOS_START':
			return {
				...state,
				youtube: {
					...state.youtube,
					related: {
						...state.youtube.related,
						videoId: action.payload.videoId,
						isLoading: true,
					},
				},
			}

		case 'SEARCH_RELATED_VIDEOS_SUCCESS':
			return {
				...state,
				youtube: {
					...state.youtube,
					related: {
						...state.youtube.related,
						videos: action.payload.videos,
					},
				},
			}
		case 'SEARCH_RELATED_VIDEOS_FAIL':
			return {
				...state,
				youtube: {
					...state.youtube,
					related: {
						...state.youtube.related,
						onError: {
							code: action.payload?.code || 'Unknown',
							msg: action.payload?.msg || 'Generic Error',
						},
					},
				},
			}
		case 'SEARCH_RELATED_VIDEOS_FINISH':
			return {
				...state,
				youtube: {
					...state.youtube,
					related: {
						...state.youtube.related,
						isLoading: false,
						onError: {
							code: '',
							msg: '',
						},
					},
				},
			}
		case 'GET_VIDEO_DETAIL_START':
			return {
				...state,
				youtube: {
					...state.youtube,
					currentVideo: {
						...state.youtube.currentVideo,
						isLoading: true,
					},
				},
			}
		case 'GET_VIDEO_DETAIL_SUCCESS':
			return {
				...state,
				youtube: {
					...state.youtube,
					currentVideo: {
						...state.youtube.currentVideo,
						video: action.payload,
					},
				},
			}
		case 'GET_VIDEO_DETAIL_FAIL':
			return {
				...state,
				youtube: {
					...state.youtube,
					currentVideo: {
						...state.youtube.currentVideo,
						onError: {
							code: action.payload?.code || 'Unknown',
							msg: action.payload?.msg || 'Generic Error',
						},
					},
				},
			}
		case 'GET_VIDEO_DETAIL_FINISH':
			return {
				...state,
				youtube: {
					...state.youtube,
					currentVideo: {
						...state.youtube.currentVideo,
						isLoading: false,
					},
				},
			}
		case 'LOGIN_START':
			return {
				...state,
				sessionData: {
					...state.sessionData,
					isLoading: true,
				},
			}
		case 'LOGIN_SUCCESS':
			return {
				...state,
				sessionData: {
					...state.sessionData,
					avatarUrl: action.payload,
					isLogged: true,
				},
			}
		case 'LOGIN_FAIL':
			return {
				...state,
				sessionData: {
					...state.sessionData,
					onError: {
						code: action.payload?.code || 'Unknown',
						msg: action.payload?.msg || 'Generic Error',
					},
				},
			}
		case 'LOGIN_FINISH':
			return {
				...state,
				sessionData: {
					...state.sessionData,
					isLoading: false,
				},
			}
		case 'LOGOUT':
			return {
				...state,
				sessionData: {
					...state.sessionData,
					isLogged: false,
					avatarUrl: avatarUrlDefault,
				},
			}
		default:
			return state
	}
}
export { reducer, initialState }
