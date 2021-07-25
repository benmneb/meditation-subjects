import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';

import { showFootnote, activeFootnote } from '../store';

const useStyles = makeStyles((theme) => ({
  footnote: {
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: `inset 0 0 0 ${theme.palette.primary.main}`,
    transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
    '&:hover': {
      boxShadow: `inset 0 -1.15rem 0 ${theme.palette.primary.main}`,
    },
  },
}));

export default function Footnote({ children, data }) {
  const styles = useStyles();
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(showFootnote(true));
    dispatch(activeFootnote(data));
  }

  return (
    <sup className={styles.footnote} onClick={handleClick}>
      {children}
    </sup>
  );
}
