// import * as actions from './actions';

const initialState = {
	showAboutDrawer: false,
	showFilters: false,
	showFootnote: false,
	showSubjectDrawer: false,
	subject: null,
	footnote: null,
	totalVisibleSubjects: 40,
	filters: {
		classifications: [
			'Kasina',
			'Foulness',
			'Recollections',
			'Divine Abidings',
			'Immaterial States',
			'Other',
		],
		possibleFor: ['Humans', 'Devas', 'Brahmas', 'Immaterial Beings'],
		maxAbsorption: [
			'Access Concentration',
			'First Jhana',
			'Second Jhana',
			'Third Jhana',
			'Fourth Jhana',
		],
		temperaments: [
			'Greedy',
			'Hating',
			'Deluded',
			'Speculative',
			'Faithful',
			'Intelligent',
		],
	},
	activeFilters: {
		classifications: [],
		possibleFor: '',
		maxAbsorption: '',
		temperaments: [],
	},
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_ABOUT_DRAWER':
			return { ...state, showAboutDrawer: action.show };
		case 'TOGGLE_FILTERS':
			return { ...state, showFilters: action.show };
		case 'SHOW_SUBJECT_DRAWER':
			return { ...state, showSubjectDrawer: action.show };
		case 'CHOOSE_SUBJECT':
			return { ...state, subject: action.subject };
		case 'SHOW_FOOTNOTE':
			return { ...state, showFootnote: action.show };
		case 'ACTIVE_FOOTNOTE':
			return { ...state, footnote: action.data };
		case 'APPLY_FILTER':
			return {
				...state,
				activeFilters: {
					...state.activeFilters,
					[action.source]: action.filter,
				},
			};
		case 'RESET_FILTERS':
			return {
				...state,
				activeFilters: initialState.activeFilters,
			};
		case 'SET_TOTAL_VISIBLE_SUBJECTS':
			return {
				...state,
				totalVisibleSubjects: action.number,
			};
		default:
			return state;
	}
}
