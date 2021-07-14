import { makeStyles } from '@material-ui/core/styles';
import { useGlobalDispatch } from '../state';

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
	const dispatch = useGlobalDispatch();

	function handleClick() {
		dispatch({ type: 'SHOW_FOOTNOTE', show: true });
		dispatch({ type: 'ACTIVE_FOOTNOTE', data });
	}

	return (
		<sup className={styles.footnote} onClick={handleClick}>
			{children}
		</sup>
	);
}
