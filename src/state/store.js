import { createContext, useContext, useReducer } from 'react';

import { reducer } from './reducer';
import { initialState } from './initialState';

const GlobalState = createContext(initialState);

export function useGlobalState() {
	const [state, dispatch] = useContext(GlobalState);

	return [state, dispatch];
}

export function useGlobalSelector() {
	const [state] = useContext(GlobalState);

	return state;
}

export function useGlobalDispatch() {
	const [, dispatch] = useContext(GlobalState);

	return dispatch;
}

export function StateProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalState.Provider value={[state, dispatch]}>{children}</GlobalState.Provider>
	);
}
