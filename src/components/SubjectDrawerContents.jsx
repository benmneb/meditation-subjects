import { useState, Fragment } from 'react';

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
	IconButton,
	Tooltip,
} from '@material-ui/core';
import { CloseRounded, ExpandLessRounded, ExpandMoreRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useSelector, useDispatch } from 'react-redux';

import { FormattedText } from '../utils';
import { preparatory } from '../data/';
import { showSubjectDrawer } from '../store';

const useStyles = makeStyles((theme) => ({
	appBar: {
		height: 120,
		top: 'auto',
		borderRadius: theme.spacing(2, 2, 0, 0),
		backgroundColor: (props) => props?.color,
	},
	toolbar: {
		height: '100%',
		textAlign: 'center',
		color: (props) => props?.color && theme.palette.getContrastText(props?.color),
	},
	title: {
		marginLeft: theme.spacing(2),
		flex: 1,
	},
	collapse: {
		margin: theme.spacing(2),
	},
	listItemRoot: {
		justifyContent: 'center',
	},
	listItemInner: {
		display: 'flex',
		alignItems: 'center',
		width: theme.mixins.subjectDrawerContents.maxWidth,
	},
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
	},
	wrapperInner: {
		maxWidth: theme.mixins.subjectDrawerContents.maxWidth,
		padding: theme.spacing(1, 2),
	},
	buttonBaseRoot: {
		borderRadius: theme.shape.borderRadius,
	},
	noBefore: {
		'&::before': {
			backgroundColor: 'transparent',
		},
	},
	borderRadius: {
		borderRadius: theme.spacing(2, 2, 0, 0),
	},
}));

export default function SubjectDrawerContents(props) {
	const styles = useStyles(props);
	const dispatch = useDispatch();

	const subject = useSelector((state) => state.subject);

	const [open, setOpen] = useState([2]);
	const [openSubChap, setOpenSubChap] = useState([]);

	function toggleExpandSection(section) {
		setOpen((prev) =>
			prev.includes(section)
				? prev.filter((alreadyOpen) => alreadyOpen !== section)
				: [...prev, section]
		);
	}

	function toggleExpandSubChap(section) {
		setOpenSubChap((prev) =>
			prev.includes(section)
				? prev.filter((alreadyOpen) => alreadyOpen !== section)
				: [...prev, section]
		);
	}

	function handleCloseDrawer() {
		dispatch(showSubjectDrawer(false));
	}

	return (
		<>
			<AppBar position="fixed" className={styles.appBar}>
				<Toolbar disableGutters className={styles.toolbar}>
					<Typography variant="h4" component="h1" className={styles.title}>
						{subject?.longName}
						<Box component="span" fontStyle="italic">
							<Typography variant="body1">in {subject?.classification}</Typography>
						</Box>
					</Typography>
					<Tooltip title="Close" placement="left">
						<IconButton color="inherit" autoFocus onClick={handleCloseDrawer}>
							<CloseRounded />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
			<Box minHeight={120} />
			<List component="section">
				{/* <ListHeader number={i} primary={text.primary} secondary={text.secondary} />
			<ListContent number={i}>
				
			</ListContent> */}
				<ListItem
					button
					onClick={() => toggleExpandSection(1)}
					component="header"
					classes={{ root: styles.listItemRoot }}
				>
					<Box className={styles.listItemInner}>
						<ListItemText
							primary="Preparatory Instructions"
							secondary="Applicable to all meditation subjects"
							primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
							secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
						/>
						{open.includes(1) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
					</Box>
				</ListItem>
				<Collapse
					in={open.includes(1)}
					timeout="auto"
					classes={{ wrapper: styles.wrapper, wrapperInner: styles.wrapperInner }}
				>
					<Box component="article">
						<FormattedText data={preparatory.inBrief} />
						<List>
							{preparatory.inDetail.map((subChap, i) => (
								<Fragment key={subChap.text}>
									<ListItem
										button
										onClick={() => toggleExpandSubChap(subChap.text)}
										classes={{ root: styles.buttonBaseRoot }}
									>
										<ListItemText
											primary={subChap.text}
											primaryTypographyProps={{
												component: 'h3',
												variant: 'body1',
											}}
										/>
										{openSubChap.includes(subChap.text) ? (
											<ExpandLessRounded />
										) : (
											<ExpandMoreRounded />
										)}
									</ListItem>
									<Collapse in={openSubChap.includes(subChap.text)}>
										<Box padding={2}>
											<FormattedText data={subChap.data} color="textSecondary" />
										</Box>
									</Collapse>
								</Fragment>
							))}
						</List>
					</Box>
				</Collapse>
				<Divider />
				<ListItem
					button
					onClick={() => toggleExpandSection(2)}
					component="header"
					classes={{ root: styles.listItemRoot }}
				>
					<Box className={styles.listItemInner}>
						<ListItemText
							primary={`Instructions for ${subject?.longName}`}
							secondary="Specific to this meditation subject only"
							primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
							secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
						/>
						{open.includes(2) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
					</Box>
				</ListItem>
				<Collapse
					in={open.includes(2)}
					timeout="auto"
					classes={{ wrapper: styles.wrapper, wrapperInner: styles.wrapperInner }}
				>
					{subject && <FormattedText data={subject.instructions} />}
				</Collapse>
				<Divider />
				<ListItem
					button
					onClick={() => toggleExpandSection(3)}
					component="header"
					classes={{ root: styles.listItemRoot }}
				>
					<Box className={styles.listItemInner}>
						<ListItemText
							primary="Supplementary Instructions"
							secondary="Applicable to all meditation subjects"
							primaryTypographyProps={{ component: 'h2', variant: 'h6' }}
							secondaryTypographyProps={{ style: { fontStyle: 'italic' } }}
						/>
						{open.includes(3) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
					</Box>
				</ListItem>
				<Collapse
					in={open.includes(3)}
					timeout="auto"
					classes={{ wrapper: styles.wrapper, wrapperInner: styles.wrapperInner }}
				>
					<Box>collapse!!3</Box>
				</Collapse>
			</List>
		</>
	);
}
