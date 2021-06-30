import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 275,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center'
	},
	title: {
		fontSize: 14
	},
	category: {
		marginBottom: 12
	}
});

export default function MeditationCard(props) {
	const styles = useStyles();

	return (
		<Card className={styles.root} variant="outlined">
			<CardContent>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					{props.number}
				</Typography>
				<Typography variant="h5" component="h2">
					Meditation Type
				</Typography>
				<Typography className={styles.category} color="textSecondary">
					category
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
