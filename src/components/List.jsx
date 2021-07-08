import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import { subjects } from '../data';
import { useGlobalState } from '../state';
import { MeditationCard } from './index';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(1),
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gridGap: theme.spacing(1),
		[theme.breakpoints.only('xs')]: {
			gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
			justifyItems: 'stretch',
		},
	},
}));

export default function List() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

	const [visibleSubjects, setVisibleSubjects] = useState(subjects);

	// display relevent subjects based on applied filters
	useEffect(() => {
		const flatFilters = Object.values(state.activeFilters).flat();
		const cleanFlatFilters = flatFilters.filter((e) => String(e).trim());

		if (cleanFlatFilters.length > 0) {
			setVisibleSubjects(
				subjects.filter((subject) =>
					cleanFlatFilters.every(
						(filter) => Object.values(subject.filtersData).flat().indexOf(filter) > -1
					)
				)
			);
			dispatch({ type: 'SET_TOTAL_VISIBLE_SUBJECTS', number: visibleSubjects.length });
		} else {
			setVisibleSubjects(subjects);
			dispatch({ type: 'SET_TOTAL_VISIBLE_SUBJECTS', number: 40 });
		}
	}, [state.activeFilters, dispatch, visibleSubjects.length]);

	return (
		<Box className={styles.root}>
			{visibleSubjects.map((subject, index) => (
				<MeditationCard
					number={index + 1}
					key={subject.id}
					data={subject}
					bgColor={subject.color}
				/>
			))}
		</Box>
	);
}
