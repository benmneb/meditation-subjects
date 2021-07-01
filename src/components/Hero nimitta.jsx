import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Hidden, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	header: {
		width: '100%',
		height: '70vh',
		[theme.breakpoints.only('xs')]: {
			height: '100vh'
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		overflow: 'hidden'
	},
	kasina: {
		position: 'absolute',
		background: theme.palette.primary.main,
		left: '50%',
		top: '50%',
		borderRadius: '50%',
		transform: 'translate(-50%,-50%)',
		minWidth: 500,
		minHeight: 500
	},
	titleBox: {
		margin: theme.spacing(10),
		textAlign: 'center',
		zIndex: 1
	}
}));

export default function Hero() {
	const styles = useStyles();

	const [offset, setOffset] = useState(0);

	// enlarge nimitta on scroll
	useEffect(() => {
		function handleScroll() {
			setOffset(window.pageYOffset);
		}

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [offset]);

	return (
		<Box component="header" className={styles.header}>
			<Box
				className={styles.kasina}
				style={{ width: offset + 500, height: offset + 500 }}
			/>
			<Box component="hgroup" className={styles.titleBox}>
				<Typography component="h1" variant="h2">
					The Buddha's 40 Meditation Subjects
				</Typography>
				<Hidden xsDown>
					<Typography component="h2" variant="h4">
						as taught in the Visuddhimagga
					</Typography>
				</Hidden>
			</Box>
		</Box>
	);
}
