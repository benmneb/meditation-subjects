import { initialState } from './index';

export function reducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_ABOUT_DRAWER':
			return { ...state, showAboutDrawer: action.show };
		case 'TOGGLE_FILTERS':
			return { ...state, showFilters: action.show };
		case 'SHOW_FOOTNOTE':
			return { ...state, showFootnote: action.show };
		case 'CHOOSE_SUBJECT':
			return { ...state, subject: action.subject };
		case 'ACTIVE_FOOTNOTE':
			return { ...state, footnote: action.data };
		case 'APPLY_FILTER':
			return {
				...state,
				activeFilters: {
					...state.activeFilters,
					[action.data.source]: action.data.filter
				}
			};
		case 'RESET_FILTERS':
			return {
				...state,
				activeFilters: initialState.activeFilters
			};
		default:
			return state;
	}
}
