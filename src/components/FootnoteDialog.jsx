import React from 'react';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Paper
} from '@material-ui/core';
import Draggable from 'react-draggable';

import { useGlobalState } from '../state';

function PaperComponent(props) {
	return (
		<Draggable
			handle="#footnote-dialog-title"
			cancel={'[class*="MuiDialogContent-root"]'}
		>
			<Paper {...props} />
		</Draggable>
	);
}

export default function FootnoteDialog() {
	const [state, dispatch] = useGlobalState();

	function handleClose() {
		dispatch({ type: 'SHOW_FOOTNOTE', show: false });
	}

	function handleExited() {
		dispatch({ type: 'ACTIVE_FOOTNOTE', footnote: null });
	}

	return (
		<Dialog
			open={Boolean(state.showFootnote)}
			aria-labelledby="footnote-dialog-title"
			PaperComponent={PaperComponent}
			onBackdropClick={handleClose}
			onExited={handleExited}
		>
			<DialogTitle style={{ cursor: 'move' }} id="footnote-dialog-title">
				Footnote #{state?.footnote?.number}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>{state?.footnote?.content}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="default">
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}
