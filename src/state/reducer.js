export function reducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_ABOUT_DRAWER':
			return { ...state, showAboutDrawer: action.showAboutDrawer };
		case 'SHOW_FOOTNOTE':
			return { ...state, showFootnote: action.show };
		case 'CHOOSE_SUBJECT':
			return { ...state, subject: action.subject };
		case 'ACTIVE_FOOTNOTE':
			return { ...state, footnote: action.data };
		default:
			return state;
	}
}
