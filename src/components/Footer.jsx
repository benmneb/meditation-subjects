import { makeStyles } from '@material-ui/core/styles';
import { Box, Tooltip, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	footer: {
		display: 'flex',
		justifyContent: 'center'
	},
	figure: {
		cursor: 'pointer',
		margin: theme.spacing(2),
		textAlign: 'center',
		maxWidth: 700
	}
}));

export default function Footer() {
	const styles = useStyles();

	function handleClick() {
		return window.open(
			`https://suttacentral.net/an5.73/en/sujato?ref=${window.location.href}`,
			'_blank',
			'noopener'
		);
	}

	return (
		<Box component="footer" className={styles.footer}>
			<Tooltip arrow title="Read this sutta on SuttaCentral.net">
				<Box component="figure" className={styles.figure} onClick={handleClick}>
					<Typography component="blockquote" variant="subtitle2">
						"Out of compassion, I’ve done what a teacher should do who wants what’s best
						for their disciples. Here are these roots of trees, and here are these empty
						huts. Practice absorption! Don’t be negligent! Don’t regret it later! This is
						my instruction to you."
					</Typography>
					<Typography component="figcaption" variant="subtitle2">
						- Buddha
					</Typography>
				</Box>
			</Tooltip>
		</Box>
	);
}
