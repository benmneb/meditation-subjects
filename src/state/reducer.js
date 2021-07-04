export function reducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_ABOUT_DRAWER':
			return { ...state, showAboutDrawer: action.showAboutDrawer };
		case 'CHOOSE_SUBJECT':
			return { ...state, subject: action.subject };
		default:
			return state;
	}
}
