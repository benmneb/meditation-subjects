export function toggleAboutDrawer(show) {
	return {
		type: 'TOGGLE_ABOUT_DRAWER',
		show,
	};
}

export function toggleFilters(show) {
	return {
		type: 'TOGGLE_FILTERS',
		show,
	};
}

export function showFootnote(show) {
	return {
		type: 'SHOW_FOOTNOTE',
		show,
	};
}

export function activeFootnote(data) {
	return {
		type: 'ACTIVE_FOOTNOTE',
		data,
	};
}

export function showSubjectDrawer(show) {
	return {
		type: 'SHOW_SUBJECT_DRAWER',
		show,
	};
}

export function toggleExpandSection(section) {
	return {
		type: 'TOGGLE_EXPAND_SECTION',
		section,
	};
}

export function toggleExpandPrepDetails(section) {
	return {
		type: 'TOGGLE_EXPAND_PREP_DETAILS',
		section,
	};
}

export function resetSubjectDrawerState() {
	return {
		type: 'RESET_SUBJECT_DRAWER_STATE',
	};
}

export function chooseSubject(subject) {
	return {
		type: 'CHOOSE_SUBJECT',
		subject,
	};
}

export function applyFilter(source, filter) {
	return {
		type: 'APPLY_FILTER',
		source,
		filter,
	};
}

export function resetFilters() {
	return {
		type: 'RESET_FILTERS',
	};
}

export function setTotalVisibleSubjects(number) {
	return {
		type: 'SET_TOTAL_VISIBLE_SUBJECTS',
		number,
	};
}
