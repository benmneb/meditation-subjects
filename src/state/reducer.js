export function reducer(state, action) {
	switch (action.type) {
		case 'TOGGLE_ABOUT_DRAWER':
			return { ...state, showAboutDrawer: action.showAboutDrawer };
		default:
			return state;
	}
}
