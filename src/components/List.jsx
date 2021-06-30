import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

import { MeditationCard } from './index';

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
			{new Array(40).fill(<MeditationCard />).map((card, index) => (
				<MeditationCard number={index + 1} key={index} />
			))}
		</Box>
	);
}

// new Array(40).fill(<MeditationCard number={1} />)
