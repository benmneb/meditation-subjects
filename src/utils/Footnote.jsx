import { styled } from '@mui/material'

import { useDispatch } from 'react-redux'

import { showFootnote, activeFootnote } from '../store'

const StyledSup = styled('sup')(({ theme }) => ({
	cursor: 'pointer',
	textDecoration: 'none',
	color: 'inherit',
	boxShadow: `inset 0 0 0 ${theme.palette.primary.main}`,
	transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
	'&:hover': {
		boxShadow: `inset 0 -1.15rem 0 ${theme.palette.primary.main}`,
	},
}))

export default function Footnote({ children, data }) {
	const dispatch = useDispatch()

	function handleClick() {
		dispatch(showFootnote(true))
		dispatch(activeFootnote(data))
	}

	return <StyledSup onClick={handleClick}>{children}</StyledSup>
}
