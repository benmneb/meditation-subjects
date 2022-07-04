import { Box, styled, Tooltip, Typography } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import { Link } from '../utils'
import { resetFilters } from '../store'

const StyledFooter = styled('footer')({
	display: 'flex',
	justifyContent: 'center',
	textAlign: 'center',
})

const NoResults = styled('div')(({ theme }) => ({
	maxWidth: 700,
	margin: theme.spacing(2),
}))

const Emoji = styled('span')(({ theme }) => ({
	'@keyframes pulse': {
		'0%': {
			animationTimingFunction: theme.transitions.easing.easeIn,
		},
		'50%': {
			transform: 'scale(1.10)',
		},
		'100%': {
			animationTimingFunction: theme.transitions.easing.easeIn,
		},
	},
	display: 'inline-block',
	animation: 'pulse 5s infinite',
}))

export default function Footer() {
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
		<StyledFooter>
			{!totalVisibleSubjects ? (
				<NoResults>
					<Typography variant="h6" paragraph>
						No subjects match the current filters.
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
						<Emoji>🧘‍♂️</Emoji>
					</Typography>
				</NoResults>
			) : (
				<Tooltip arrow title="Read this sutta on SuttaCentral.net">
					<Box
						component="figure"
						sx={{ cursor: 'pointer', margin: 2, maxWidth: 700 }}
						onClick={handleSuttaClick}
					>
						<Typography component="blockquote" variant="subtitle2">
							"Out of compassion, I’ve done what a teacher should do who wants
							what’s best for their disciples. Here are these roots of trees,
							and here are these empty huts. Practice absorption! Don’t be
							negligent! Don’t regret it later! This is my instruction to you."
						</Typography>
						<Typography component="figcaption" variant="subtitle2">
							- Buddha
						</Typography>
					</Box>
				</Tooltip>
			)}
		</StyledFooter>
	)
}
