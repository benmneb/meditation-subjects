import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
} from '@material-ui/core';

import Draggable from 'react-draggable';

import { useSelector, useDispatch } from 'react-redux';

import { showFootnote, activeFootnote } from '../store';

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
  const dispatch = useDispatch();

  const isFootnoteShown = useSelector((state) => state.showFootnote);
  const footnote = useSelector((state) => state.footnote);

  function handleClose() {
    dispatch(showFootnote(false));
  }

  function handleExited() {
    dispatch(activeFootnote(null));
  }

  return (
    <Dialog
      open={isFootnoteShown}
      aria-labelledby="footnote-dialog-title"
      PaperComponent={PaperComponent}
      onBackdropClick={handleClose}
      onExited={handleExited}
    >
      <DialogTitle style={{ cursor: 'move' }} id="footnote-dialog-title">
        Footnote #{footnote?.number}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>{footnote?.content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="default">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
