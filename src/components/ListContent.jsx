import { Collapse } from '@mui/material'

import { useSelector } from 'react-redux'

export default function ListContent({ number, children }) {
	const openSections = useSelector((state) => state.openSections)

	return (
		<Collapse
			in={openSections.includes(number)}
			timeout="auto"
			component="article"
			sx={{
				'.MuiCollapse-wrapper': {
					display: 'flex',
					justifyContent: 'center',
				},
				'.MuiCollapse-wrapperInner': {
					maxWidth: (theme) => theme.mixins.subjectDrawerContents.maxWidth,
					padding: (theme) => theme.spacing(1, 2),
				},
			}}
		>
			{children}
		</Collapse>
	)
}
