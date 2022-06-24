import clsx from 'clsx'

import makeStyles from '@mui/styles/makeStyles';
import { Box, Tooltip, Typography } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from '../utils'
import { resetFilters } from '../store'

const useStyles = makeStyles((theme) => ({
	footer: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'center',
	},
	noResults: {
		maxWidth: 700,
		margin: theme.spacing(2),
	},
	figure: {
		cursor: 'pointer',
		margin: theme.spacing(2),
		maxWidth: 700,
	},
	displayNone: {
		display: 'none',
	},
	emoji: {
		display: 'inline-block',
		animation: `$pulse 3s infinite`,
	},
	'@keyframes pulse': {
		'0%': {
			animationTimingFunction: theme.transitions.easing.easeIn,
		},
		'50%': {
			transform: 'scale(1.15)',
		},
		'100%': {
			animationTimingFunction: theme.transitions.easing.easeIn,
		},
	},
}))

export default function Footer() {
	const styles = useStyles()
	const dispatch = useDispatch()

	const totalVisibleSubjects = useSelector(
		(state) => state.totalVisibleSubjects
	)

	function handleSuttaClick() {
		return window.open(
			`https://suttacentral.net/an5.73/en/sujato?ref=${window.location.host}`,
			'_blank',
			'noopener'
		)
	}

	function handleResetFilters() {
		dispatch(resetFilters())
	}

	return (
		<Box component="footer" className={styles.footer}>
			<Box
				className={clsx(styles.noResults, {
					[styles.displayNone]: totalVisibleSubjects > 0,
				})}
			>
				<Typography variant="h6" paragraph>
					No meditation subjects match the current filters.
				</Typography>
				<Typography paragraph>
					You can <b>1)</b>{' '}
					<Link noHref onClick={handleResetFilters}>
						reset all filters
					</Link>
					, <b>2)</b> choose different filters, or <b>3)</b> sit down
					comfortably in a secluded place and apprehend the sign most suitable
					to your temperament.
				</Typography>
				<Typography variant="h1" paragraph>
					<Box component="span" className={styles.emoji}>
						🧘‍♂️
					</Box>
				</Typography>
			</Box>
			<Tooltip arrow title="Read this sutta on SuttaCentral.net">
				<Box
					component="figure"
					className={clsx(styles.figure, {
						[styles.displayNone]: totalVisibleSubjects === 0,
					})}
					onClick={handleSuttaClick}
				>
					<Typography component="blockquote" variant="subtitle2">
						"Out of compassion, I’ve done what a teacher should do who wants
						what’s best for their disciples. Here are these roots of trees, and
						here are these empty huts. Practice absorption! Don’t be negligent!
						Don’t regret it later! This is my instruction to you."
					</Typography>
					<Typography component="figcaption" variant="subtitle2">
						- Buddha
					</Typography>
				</Box>
			</Tooltip>
		</Box>
	)
}
