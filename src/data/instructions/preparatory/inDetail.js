import { apprehendFromAmong } from './apprehendFromAmong'
import { avoidAMonastery } from './avoidAMonastery'
import { fiveFactorsOfRestingPlace } from './fiveFactorsOfRestingPlace'
import { goodFriend } from './goodFriend'
import { lesserImpediments } from './lesserImpediments'
import { suitsTemperament } from './suitsTemperament'
import { tenImpediments } from './tenImpediments'

export const inDetail = [
	{
		text: 'Sever any of the Ten Impediments',
		data: tenImpediments,
	},
	{ text: 'Approach the Good Friend', data: goodFriend },
	{
		text: 'Apprehend from among the 40 meditation subjects',
		data: apprehendFromAmong,
	},
	{
		text: 'One that suits his own temperament',
		data: suitsTemperament,
	},
	{
		text: 'Avoid a monastery unfavourable to the development of concentration',
		data: avoidAMonastery,
	},
	{
		text: 'Go to live in one that is favourable',
		data: fiveFactorsOfRestingPlace,
	},
	{
		text: 'Sever the Lesser Impediments',
		data: lesserImpediments,
	},
]
