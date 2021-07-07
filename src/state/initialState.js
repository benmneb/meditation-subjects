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
		possibleFor: ['Humans', 'Devas', 'Brahmas', 'Immaterial Beings'],
		maxAbsorption: [
			'Access Concentration',
			'First Jhana',
			'Second Jhana',
			'Third Jhana',
			'Fourth Jhana'
		],
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
