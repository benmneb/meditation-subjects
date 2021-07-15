import { Box, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLessRounded, ExpandMoreRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { toggleExpandSection } from '../store';

const useStyles = makeStyles((theme) => ({
	listItemRoot: {
		justifyContent: 'center',
	},
	listItemInner: {
		display: 'flex',
		alignItems: 'center',
		width: theme.mixins.subjectDrawerContents.maxWidth,
	},
}));

export default function ListHeader(props) {
	const { number, primary, secondary } = props;

	const styles = useStyles();
	const dispatch = useDispatch();

	const openSections = useSelector((state) => state.openSections);

	return (
		<ListItem
			button
			onClick={() => dispatch(toggleExpandSection(number))}
			component="header"
			classes={{ root: styles.listItemRoot }}
		>
			<Box className={styles.listItemInner}>
				<ListItemText
					primary={primary}
					secondary={secondary}
					primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
					secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
				/>
				{openSections.includes(number) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
			</Box>
		</ListItem>
	);
}
