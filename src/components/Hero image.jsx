import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Hidden, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	header: {
		width: '100%',
		height: '70vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		overflow: 'hidden'
	},
	image: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundImage: (props) => `url(${props.imageSrc})`,
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		filter: 'blur(2px) scale(1.03)',
		zIndex: -1,
		transitionProperty: 'opacity',
		transitionDuration: theme.transitions.duration.complex,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	opacityZero: {
		opacity: 0
	},
	titleBox: {
		margin: theme.spacing(10),
		textAlign: 'center',
		zIndex: 1,
		color: '#fff',
		textShadow:
			'0px 2px 4px rgb(0 0 0 / 20%), 0px 3px 2px rgb(0 0 0 / 14%), 0px 1px 10px rgb(0 0 0 / 12%)'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'flex',
		justifyContent: (props) => (props.isCentered ? 'center' : 'flex-start'),
		alignItems: (props) => (props.isCentered ? 'center' : 'stretch'),
		backgroundColor: theme.palette.secondary.main,
		opacity: 0.3,
		zIndex: 0
	}
}));

export default function Hero(props) {
	const styles = useStyles(props);

	const [imageLoaded, setImageLoaded] = useState(false);
	const [offset, setOffset] = useState(0);

	// load image on pageload
	useEffect(() => {
		const { imageSrc } = props;

		const image = new Image();
		image.src = imageSrc;

		image.onload = () => {
			setImageLoaded(true);
		};
	}, [props]);

	// create parallax effect
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
		<Box component="section" className={styles.header}>
			<Box className={clsx(styles.image, { [styles.opacityZero]: !imageLoaded })} />
			<Box
				component="hgroup"
				className={styles.titleBox}
				style={{ transform: `translate3d(0, ${offset * 0.51}px, 0)` }}
			>
				<Typography component="h1" variant="h2" gutterBottom>
					The Buddha's 40 Meditation Subjects
				</Typography>
				<Hidden xsDown>
					<Typography component="h2" variant="h4">
						as taught in the Visuddhimagga
					</Typography>
				</Hidden>
			</Box>
			<Box className={styles.overlay} />
		</Box>
	);
}
