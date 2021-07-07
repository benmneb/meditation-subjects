import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import { MeditationCard } from './index';
import { subjects } from '../data';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: theme.spacing(1),
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
		gridGap: theme.spacing(1),
		[theme.breakpoints.only('xs')]: {
			gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
			justifyItems: 'stretch'
		}
	}
}));

export default function List() {
	const styles = useStyles();

	return (
		<Box className={styles.root}>
			{subjects.map((subject, index) => (
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
