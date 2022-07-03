import { ListItem, ListItemText, styled } from '@mui/material'
import { ExpandLessRounded, ExpandMoreRounded } from '@mui/icons-material'

import { useSelector, useDispatch } from 'react-redux'

import { toggleExpandSection } from '../store'

const ListItemInner = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	width: theme.mixins.subjectDrawerContents.maxWidth,
}))

export default function ListHeader({ number, primary, secondary }) {
	const dispatch = useDispatch()

	const openSections = useSelector((state) => state.openSections)

	return (
		<ListItem
			button
			onClick={() => dispatch(toggleExpandSection(number))}
			component="header"
			sx={{ justifyContent: 'center' }}
		>
			<ListItemInner>
				<ListItemText
					primary={primary}
					secondary={secondary}
					primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
					secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
				/>
				{openSections.includes(number) ? (
					<ExpandLessRounded />
				) : (
					<ExpandMoreRounded />
				)}
			</ListItemInner>
		</ListItem>
	)
}
