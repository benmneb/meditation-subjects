import { styled } from '@mui/material'

const StyledAnchor = styled('a')(({ theme }) => ({
	cursor: 'pointer',
	textDecoration: 'none',
	color: theme.palette.text.primary,
	boxShadow: `inset 0 -3px 0 ${theme.palette.primary.main}`,
	transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
	'&:hover': {
		color:
			theme.palette.mode === 'dark'
				? theme.palette.primary.contrastText
				: theme.palette.text.primary,
		boxShadow: `inset 0 -1.15rem 0 ${theme.palette.primary.main}`,
	},
}))

export default function Link({ children, noHref, ...props }) {
	function handleClick(e) {
		if (noHref) e.preventDefault()
	}

	return (
		<StyledAnchor onClick={(e) => handleClick(e)} {...props}>
			{children}
		</StyledAnchor>
	)
}
