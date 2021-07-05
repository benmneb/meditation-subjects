import {
	brown,
	cyan,
	red,
	blue,
	yellow,
	grey,
	blueGrey,
	amber,
	purple,
	lightGreen,
	lime,
	deepPurple,
	indigo,
	green,
	orange,
	pink,
	deepOrange,
	lightBlue
} from '@material-ui/core/colors';

export const subjects = [
	{
		id: 1,
		shortName: 'Earth Kasina',
		longName: 'The Earth Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 4,
			title: 'The Earth Kasina'
		},
		color: brown[800],
		details: []
	},
	{
		id: 2,
		shortName: 'Water Kasina',
		longName: 'The Water Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: cyan[500],
		details: [
			{
				id: 2.1,
				text: 'When someone has had practice in previous [lives], the sign arises for him in water that is not made up, such as a pool, a lake, a lagoon, or the ocean as in the case of the Elder Cūḷa-Sīva. The venerable one, it seems, thought to abandon gain and honour and live a secluded life. He boarded a ship at Mahātittha (Mannar) and sailed to Jambudīpa (India). As he gazed at the ocean meanwhile, the kasiṇa sign, the counterpart of that ocean, arose in him.'
			},
			{
				id: 2.2,
				text: 'Someone with no such previous practice should guard against the four faults of a kasiṇa (IV.24) and not apprehend the water as one of the colours, blue, yellow, red or white. He should fill a bowl or a four-footed water pot1 to the brim with water uncontaminated by soil, taken in the open through a clean cloth [strainer], or with any other clear unturbid water. He should put it in a screened place on the outskirts of the monastery as already described and seat himself comfortably. He should neither review its colour nor bring its characteristic to mind. Apprehending the colour as belonging to its physical support, he should set his mind on the [name] concept as the most outstanding mental datum, and using any among the [various] names for water (āpo) such as “rain” (ambu), “liquid” (udaka), “dew” (vāri), “fluid” (salila),2 he should develop [the kasiṇa] by using [preferably] the obvious “water, water.”',
				footNotes: {
					1: 'Kuṇḍika—“a four-footed water pot”: not in PED.',
					2: 'English cannot really furnish five words for water.'
				}
			},
			{
				id: 2.3,
				text: 'As he develops it in this way, the two signs eventually arise in him in the way already described. Here, however, the learning sign has the appearance of moving. [171] If the water has bubbles of froth mixed with it, the learning sign has the same appearance, and it is evident as a fault in the kasiṇa. But the counterpart sign appears inactive, like a crystal fan set in space, like the disk of a looking- glass made of crystal. With the appearance of that sign he reaches access jhāna and the jhāna tetrad and pentad in the way already described.'
			}
		]
	},
	{
		id: 3,
		shortName: 'Fire Kasina',
		longName: 'The Fire Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: red[800]
	},
	{
		id: 4,
		shortName: 'Air Kasina',
		longName: 'The Air Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: grey[300]
	},
	{
		id: 5,
		shortName: 'Blue Kasina',
		longName: 'The Blue Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: blue[800]
	},
	{
		id: 6,
		shortName: 'Yellow Kasina',
		longName: 'The Yellow Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: yellow[800]
	},
	{
		id: 7,
		shortName: 'Red Kasina',
		longName: 'The Red Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: red[500]
	},
	{
		id: 8,
		shortName: 'White Kasina',
		longName: 'The White Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: grey[50]
	},
	{
		id: 9,
		shortName: 'Light Kasina',
		longName: 'The Light Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: amber[50]
	},
	{
		id: 10,
		shortName: 'Space Kasina',
		longName: 'The Limited-Space Kasina',
		classification: 'Kasina Meditations',
		chapter: {
			number: 5,
			title: 'The Remaining Kasinas'
		},
		color: blueGrey[900]
	},
	{
		id: 11,
		shortName: 'Bloated Corpse',
		longName: 'The Bloated Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: brown[900]
	},
	{
		id: 12,
		shortName: 'Livid Corpse',
		longName: 'The Livid Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: lightGreen[800]
	},
	{
		id: 13,
		shortName: 'Festering Corpse',
		longName: 'The Festering Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: lime[800]
	},
	{
		id: 14,
		shortName: 'Cut Up Corpse',
		longName: 'The Cut Up Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: grey[400]
	},
	{
		id: 15,
		shortName: 'Gnawed Corpse',
		longName: 'The Gnawed Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: blue[800] // TODO
	},
	{
		id: 16,
		shortName: 'Scattered Corpse',
		longName: 'The Scattered Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: amber[700]
	},
	{
		id: 17,
		shortName: 'Hacked & Scattered Corpse',
		longName: 'The Hacked & Scattered Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: deepOrange[500]
	},
	{
		id: 18,
		shortName: 'Bleeding Corpse',
		longName: 'The Bleeding Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: red[700]
	},
	{
		id: 19,
		shortName: 'Worm Infested Corpse',
		longName: 'The Worm Infested Corpse',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: brown[800]
	},
	{
		id: 20,
		shortName: 'A Skeleton',
		longName: 'A Skeleton',
		classification: 'Foulness Meditations',
		chapter: {
			number: 6,
			title: 'Foulness as a Meditation Subject'
		},
		color: grey[200]
	},
	{
		id: 21,
		shortName: 'The Buddha',
		longName: 'Recollection of the Buddha',
		classification: 'Recollections',
		chapter: {
			number: 7,
			title: 'Six Recollections'
		},
		color: orange[700]
	},
	{
		id: 22,
		shortName: 'The Dhamma',
		longName: 'Recollection of the Dhamma',
		classification: 'Recollections',
		chapter: {
			number: 7,
			title: 'Six Recollections'
		},
		color: amber[700]
	},
	{
		id: 23,
		shortName: 'The Sangha',
		longName: 'Recollection of the Sangha',
		classification: 'Recollections',
		chapter: {
			number: 7,
			title: 'Six Recollections'
		},
		color: yellow[700]
	},
	{
		id: 24,
		shortName: 'Virtue',
		longName: 'Recollection of Virtue',
		classification: 'Recollections',
		chapter: {
			number: 7,
			title: 'Six Recollections'
		},
		color: deepPurple[400]
	},
	{
		id: 25,
		shortName: 'Generosity',
		longName: 'Recollection of Generosity',
		classification: 'Recollections',
		chapter: {
			number: 7,
			title: 'Six Recollections'
		},
		color: purple[400]
	},
	{
		id: 26,
		shortName: 'Deities',
		longName: 'Recollection of Deities',
		classification: 'Recollections',
		chapter: {
			number: 7,
			title: 'Six Recollections'
		},
		color: pink[400]
	},
	{
		id: 27,
		shortName: 'Death',
		longName: 'Mindfulness of Death',
		classification: 'Recollections',
		chapter: {
			number: 8,
			title: 'Other Recollections as Meditation Subjects'
		},
		color: grey[900]
	},
	{
		id: 28,
		shortName: 'The Body',
		longName: 'Mindfulness Occupied with the Body',
		classification: 'Recollections',
		chapter: {
			number: 8,
			title: 'Other Recollections as Meditation Subjects'
		},
		color: green[900]
	},
	{
		id: 29,
		shortName: 'Breathing',
		longName: 'Mindfulness of Breathing',
		classification: 'Recollections',
		chapter: {
			number: 8,
			title: 'Other Recollections as Meditation Subjects'
		},
		color: blue.A100
	},
	{
		id: 30,
		shortName: 'Peace',
		longName: 'Recollection of Peace',
		classification: 'Recollections',
		chapter: {
			number: 8,
			title: 'Other Recollections as Meditation Subjects'
		},
		color: lightBlue.A400
	},
	{
		id: 31,
		shortName: 'Loving Kindness',
		longName: 'Loving Kindness Meditation',
		classification: 'Divine Abidings',
		chapter: {
			number: 9,
			title: 'The Divine Abidings'
		},
		color: purple[500]
	},
	{
		id: 32,
		shortName: 'Compassion',
		longName: 'Compassion Meditation',
		classification: 'Divine Abidings',
		chapter: {
			number: 9,
			title: 'The Divine Abidings'
		},
		color: deepPurple[500]
	},
	{
		id: 33,
		shortName: 'Gladness',
		longName: 'Gladness Meditation',
		classification: 'Divine Abidings',
		chapter: {
			number: 9,
			title: 'The Divine Abidings'
		},
		color: indigo[500]
	},
	{
		id: 34,
		shortName: 'Equanimity',
		longName: 'Equanimity Meditation',
		classification: 'Divine Abidings',
		chapter: {
			number: 9,
			title: 'The Divine Abidings'
		},
		color: blue[500]
	},
	{
		id: 35,
		shortName: 'Boundless Space',
		longName: 'The Base Consisting of Boundless Space',
		classification: 'Immaterial States',
		chapter: {
			number: 10,
			title: 'The Immaterial States'
		},
		color: blueGrey[300]
	},
	{
		id: 36,
		shortName: 'Boundless Consciousness',
		longName: 'The Base Consisting of Boundless Consciousness',
		classification: 'Immaterial States',
		chapter: {
			number: 10,
			title: 'The Immaterial States'
		},
		color: blueGrey[200]
	},
	{
		id: 37,
		shortName: 'Nothingness',
		longName: 'The Base Consisting of Nothingness',
		classification: 'Immaterial States',
		chapter: {
			number: 10,
			title: 'The Immaterial States'
		},
		color: blueGrey[100]
	},
	{
		id: 38,
		shortName: 'Neither Perception nor Non-Perception',
		longName: 'The Base Consisting of Neither Perception nor Non-Perception',
		classification: 'Immaterial States',
		chapter: {
			number: 10,
			title: 'The Immaterial States'
		},
		color: blueGrey[50]
	},
	{
		id: 39,
		shortName: 'Repulsiveness in Nutriment',
		longName: 'Perception of Repulsiveness in Nutriment',
		classification: 'Other Meditations',
		chapter: {
			number: 11,
			title: 'Concentration - Conclusion'
		},
		color: green[800]
	},
	{
		id: 40,
		shortName: 'The Four Elements',
		longName: 'Analysis of the Four Elements',
		classification: 'Other Meditations',
		chapter: {
			number: 11,
			title: 'Concentration - Conclusion'
		},
		color: orange[800]
	}
];
