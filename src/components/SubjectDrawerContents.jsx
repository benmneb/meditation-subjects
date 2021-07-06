import { useState, Fragment } from 'react';

import reactStringReplace from 'react-string-replace';

import {
	Box,
	Collapse,
	ListItem,
	ListItemText,
	List,
	Divider,
	AppBar,
	Toolbar,
	Typography,
	IconButton
} from '@material-ui/core';
import { CloseRounded, ExpandLessRounded, ExpandMoreRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../state';
import { Footnote } from '../utils';

const useStyles = makeStyles((theme) => ({
	appBar: {
		height: 120,
		top: 'auto',
		borderRadius: theme.spacing(2, 2, 0, 0),
		backgroundColor: (props) => props?.data?.color
	},
	toolbar: {
		height: '100%',
		color: (props) =>
			props?.data?.color && theme.palette.getContrastText(props?.data?.color)
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1
	},
	collapse: {
		margin: theme.spacing(2)
	}
}));

// eslint-disable-next-line
String.prototype.replaceMany = function (obj) {
	let retStr = this;
	for (let x in obj) {
		retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
	}
	return retStr;
};

export default function SubjectDrawerContents(props) {
	const styles = useStyles(props);

	const [state, dispatch] = useGlobalState();

	const [open, setOpen] = useState([2]);

	function toggleExpandSection(section) {
		setOpen((prev) =>
			prev.includes(section)
				? prev.filter((alreadyOpen) => alreadyOpen !== section)
				: [...prev, section]
		);
	}

	function handleCloseDrawer() {
		dispatch({ type: 'CHOOSE_SUBJECT', subject: null });
	}

	return (
		<>
			<AppBar position="fixed" className={styles.appBar}>
				<Toolbar disableGutters className={styles.toolbar}>
					<Typography variant="h4" component="h1" className={styles.title}>
						{state?.subject?.longName}
						<Box component="span" fontStyle="italic">
							<Typography variant="body1">in {state?.subject?.classification}</Typography>
						</Box>
					</Typography>
					<IconButton color="inherit" autoFocus onClick={handleCloseDrawer}>
						<CloseRounded />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Box minHeight={120} />
			<List component="section">
				<ListItem button onClick={() => toggleExpandSection(1)} component="header">
					<ListItemText
						primary="Preparatory Instructions"
						secondary="Applicable to all meditation subjects"
						primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
						secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
					/>
					{open.includes(1) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
				</ListItem>
				<Collapse in={open.includes(1)} timeout="auto">
					<Box component="article" marginX={2}>
						collapse!!1
					</Box>
				</Collapse>
				<Divider />
				<ListItem button onClick={() => toggleExpandSection(2)}>
					<ListItemText
						primary={`Instructions for ${state?.subject?.longName}`}
						secondary="Specific to this meditation subject only"
						primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
						secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
					/>
					{open.includes(2) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
				</ListItem>
				<Collapse
					in={open.includes(2)}
					timeout="auto"
					classes={{ wrapperInner: styles.collapse }}
				>
					{state?.subject?.instructions?.map((paragraph) =>
						Object.values(paragraph)[0].map((text, index) =>
							Object.keys(paragraph).includes('footNotes') ? (
								<Typography key={Object.keys(text)[index]} paragraph>
									{reactStringReplace(
										text,
										new RegExp(
											`([${Object.keys(paragraph.footNotes).join('|')}]\\s)`,
											'g'
										),
										(match, i) => (
											<Fragment key={i}>
												<Footnote
													data={{
														number: match.trim(),
														content: paragraph.footNotes[match.trim()]
													}}
												>
													[{match.trim()}]
												</Footnote>
												{'\u00A0'}
											</Fragment>
										)
									)}
								</Typography>
							) : (
								<Typography key={Object.keys(text)[index]} paragraph>
									{text.toString()}
								</Typography>
							)
						)
					)}
				</Collapse>
				<Divider />
				<ListItem button onClick={() => toggleExpandSection(3)}>
					<ListItemText
						primary="Supplementary Instructions"
						secondary="Applicable to all meditation subjects"
						primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
						secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
					/>
					{open.includes(3) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
				</ListItem>
				<Collapse in={open.includes(3)} timeout="auto">
					<Box>collapse!!3</Box>
				</Collapse>
			</List>
		</>
	);
}
