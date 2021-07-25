import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Typography,
} from '@material-ui/core';

import { useDispatch } from 'react-redux';

import { chooseSubject, showSubjectDrawer } from '../store';

const useStyles = makeStyles((theme) => ({
	wrapper: {
		padding: 0,
	},
	card: {
		width: '100%',
		height: 305,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		textAlign: 'center',
		color: (props) => theme.palette.getContrastText(props.bgColor),
		backgroundColor: (props) => props.bgColor,
		[theme.breakpoints.only('xs')]: {
			height: 250,
		},
	},
	header: {
		color: (props) => theme.palette.getContrastText(props.bgColor),
		fontSize: 14,
		opacity: '0.2',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		height: '100%',
		maxHeight: 190,
	},
	chapter: {
		color: (props) => theme.palette.getContrastText(props.bgColor),
		marginBottom: 12,
		opacity: '0.7',
		[theme.breakpoints.only('xs')]: {
			display: 'none',
		},
	},
	actions: {
		color: (props) => theme.palette.getContrastText(props.bgColor),
		padding: theme.spacing(1, 1.5),
	},
}));

export default function MeditationCard({ data, ...props }) {
	const styles = useStyles(props);

	const dispatch = useDispatch();

	function handleClick() {
		dispatch(showSubjectDrawer(true));
		dispatch(chooseSubject(data));
	}

	return (
		<Button className={styles.wrapper} onClick={handleClick}>
			<Card className={styles.card} variant="outlined">
				<CardHeader
					title={props.number}
					disableTypography
					className={styles.header}
				/>
				<CardContent className={styles.content}>
					<Typography variant="h5" component="h2">
						{data.shortName}
					</Typography>
					<Typography className={styles.chapter} color="textSecondary">
						in {data?.classification}
					</Typography>
				</CardContent>
				<CardActions>
					<Typography variant="button" className={styles.actions}>
						Learn More
					</Typography>
				</CardActions>
			</Card>
		</Button>
	);
}
