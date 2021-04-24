import React, { createContext, useReducer } from 'react'
import { globalReducer, globalInitialState } from '../reducers'

const GlobalContext = createContext()

function GlobalContextProvider({ children }) {
	const [state, dispatch] = useReducer(globalReducer, globalInitialState)
	return (
		<GlobalContext.Provider value={[state, dispatch]}>{children}</GlobalContext.Provider>
	)
}

export { GlobalContext, GlobalContextProvider }
