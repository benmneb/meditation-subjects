import { forwardRef } from 'react';

import { Dialog, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ModalContents } from './index';
import { useGlobalState } from '../state';

const useStyles = makeStyles((theme) => ({
	paper: {
		position: 'absolute',
		height: '95%',
		width: '100%',
		margin: 0,
		bottom: 0,
		borderRadius: theme.spacing(2, 2, 0, 0)
	}
}));

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal() {
	const styles = useStyles();
	const [state, dispatch] = useGlobalState();

	function handleCloseModal() {
		dispatch({ type: 'CHOOSE_SUBJECT', subject: null });
	}

	return (
		<Dialog
			maxWidth="xl"
			open={Boolean(state.subject)}
			TransitionComponent={Transition}
			onBackdropClick={handleCloseModal}
			classes={{ paper: styles.paper }}
		>
			<ModalContents data={state?.subject} />
		</Dialog>
	);
}
