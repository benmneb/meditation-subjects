import { SwipeableDrawer } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

import { useSelector, useDispatch } from 'react-redux'

import { SubjectDrawerContents } from './index'
import {
	chooseSubject,
	resetSubjectDrawerState,
	showSubjectDrawer,
} from '../store'

const useStyles = makeStyles((theme) => ({
	paper: {
		height: '97%',
		borderRadius: theme.spacing(2, 2, 0, 0),
	},
}))

export default function SubjectDrawer() {
	const styles = useStyles()
	const dispatch = useDispatch()

	const isSubjectDrawOpen = useSelector((state) => state.showSubjectDrawer)
	const subject = useSelector((state) => state.subject)

	function handleOpen() {
		dispatch(showSubjectDrawer(true))
	}

	function handleClose() {
		dispatch(showSubjectDrawer(false))
		dispatch(chooseSubject(null))
		dispatch(resetSubjectDrawerState())
	}

	return (
		<SwipeableDrawer
			anchor="bottom"
			classes={{ paper: styles.paper }}
			disableDiscovery
			disableSwipeToOpen
			open={isSubjectDrawOpen}
			onOpen={handleOpen}
			onClose={handleClose}
		>
			<SubjectDrawerContents color={subject?.color} />
		</SwipeableDrawer>
	)
}
