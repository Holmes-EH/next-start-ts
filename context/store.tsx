import { createContext, ReactNode, useContext, useReducer } from 'react'
import reducer from './reducer'

type ContextType = {
	message: { text: string; type: string } | null
}
type Props = {
	children: ReactNode
}

const contextDefaultValues: ContextType = {
	message: null,
}

const Context = createContext<ContextType>(contextDefaultValues)
Wrapper.displayName = 'Store'
export function Wrapper({ children }: Props) {
	let initialState = {}
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<Context.Provider value={[state, dispatch]}>
			{children}
		</Context.Provider>
	)
}

export function globalContext() {
	return useContext(Context)
}
