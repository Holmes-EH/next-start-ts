type ACTIONTYPE =
	| { type: 'MESSAGE'; payload: { text: string; type: string } | null }
	| { type: 'CLEAR_MESSAGE' }

export default function reducer(state: {}, action: ACTIONTYPE) {
	switch (action.type) {
		case 'MESSAGE':
			return { ...state, message: action.payload }
		case 'CLEAR_MESSAGE':
			return { ...state, message: null }
		default:
			throw new Error()
	}
}
