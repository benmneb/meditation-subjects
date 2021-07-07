export const initialState = {
	showAboutDrawer: false,
	showFilters: false,
	showFootnote: false,
	subject: null,
	footnote: null,
	filters: {
		classifications: [
			'Kasina',
			'Foulness',
			'Recollections',
			'Divine Abidings',
			'Immaterial States',
			'Other'
		],
		maxAbsorption: [
			'Access Concentration',
			'First Jhana',
			'Second Jhana',
			'Third Jhana',
			'Fourth Jhana'
		],
		possibleFor: ['Humans', 'Devas', 'Brahmas', 'Immaterial Beings'],
		temperaments: [
			'Greedy',
			'Hating',
			'Deluded',
			'Speculative',
			'Faithful',
			'Intelligent'
		]
	},
	activeFilters: {
		classifications: [],
		possibleFor: '',
		maxAbsorption: '',
		temperaments: []
	}
};
