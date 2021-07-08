import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	link: {
		cursor: 'pointer',
		textDecoration: 'none',
		color: theme.palette.text.primary,
		boxShadow: `inset 0 -3px 0 ${theme.palette.primary.main}`,
		transition: `all ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeInOut}`,
		'&:hover': {
			color:
				theme.palette.type === 'dark'
					? theme.palette.primary.contrastText
					: theme.palette.text.primary,
			boxShadow: `inset 0 -1.15rem 0 ${theme.palette.primary.main}`,
		},
	},
}));

export default function Link({ children, noHref, ...props }) {
	const styles = useStyles();

	function handleClick(e) {
		if (noHref) e.preventDefault();
	}

	return (
		<a className={styles.link} onClick={(e) => handleClick(e)} {...props}>
			{children}
		</a>
	);
}
