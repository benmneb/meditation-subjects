import { SwipeableDrawer } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux'

import { SubjectDrawerContents } from './index'
import {
	chooseSubject,
	resetSubjectDrawerState,
	showSubjectDrawer,
} from '../store'

export default function SubjectDrawer() {
	const dispatch = useDispatch()

	const isSubjectDrawOpen = useSelector((state) => state.showSubjectDrawer)
	const subject = useSelector((state) => state.subject)

	function handleOpen() {
		dispatch(showSubjectDrawer(true))
	}

	function handleClose() {
		dispatch(showSubjectDrawer(false))
	}

	function handleExited() {
		dispatch(chooseSubject(null))
		dispatch(resetSubjectDrawerState())
	}

	return (
		<SwipeableDrawer
			anchor="bottom"
			sx={{
				'.MuiDrawer-paper': {
					height: '97%',
					borderRadius: (theme) => theme.spacing(2, 2, 0, 0),
				},
			}}
			disableDiscovery
			disableSwipeToOpen
			open={isSubjectDrawOpen}
			onOpen={handleOpen}
			onClose={handleClose}
			SlideProps={{
				onExited: handleExited,
			}}
		>
			<SubjectDrawerContents color={subject?.color} handleClose={handleClose} />
		</SwipeableDrawer>
	)
}
