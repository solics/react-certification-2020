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
		default:
			return state
	}
}
export { reducer, initialState }
