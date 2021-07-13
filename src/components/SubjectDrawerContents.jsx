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
	IconButton,
} from '@material-ui/core';
import { CloseRounded, ExpandLessRounded, ExpandMoreRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../state';
import { Footnote } from '../utils';

import { inBrief } from '../data/instructions/preparatory/inBrief';

const useStyles = makeStyles((theme) => ({
	appBar: {
		height: 120,
		top: 'auto',
		borderRadius: theme.spacing(2, 2, 0, 0),
		backgroundColor: (props) => props?.data?.color,
	},
	toolbar: {
		height: '100%',
		textAlign: 'center',
		color: (props) =>
			props?.data?.color && theme.palette.getContrastText(props?.data?.color),
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
		width: theme.breakpoints.values.sm,
	},
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
	},
	wrapperInner: {
		maxWidth: theme.breakpoints.values.sm,
		padding: theme.spacing(1, 2),
	},
	buttonBaseRoot: {
		borderRadius: theme.spacing(2),
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

	const [state, dispatch] = useGlobalState();

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
						{inBrief.map((paragraph) =>
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
															content: paragraph.footNotes[match.trim()],
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
						<List>
							{[
								'Sever any of the Ten Impediments',
								'Approach the Good Friend',
								'Apprehend from among the 40 meditation subjects',
								'One that suits his own temperament',
								'Avoid a monastery unfavourable to the development of concentration',
								'Go to live in one that is favourable',
								'Sever the Lesser Impediments',
							].map((subChap, i) => (
								<Fragment key={subChap}>
									<ListItem
										button
										onClick={() => toggleExpandSubChap(subChap)}
										classes={{ root: styles.buttonBaseRoot }}
									>
										<ListItemText
											primary={subChap}
											primaryTypographyProps={{
												component: 'h3',
												variant: 'body1',
											}}
										/>
										{openSubChap.includes(subChap) ? (
											<ExpandLessRounded />
										) : (
											<ExpandMoreRounded />
										)}
									</ListItem>
									<Collapse in={openSubChap.includes(subChap)}>
										<Box padding={2}>
											<Typography color="textSecondary">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
												eget.
											</Typography>
										</Box>
									</Collapse>
								</Fragment>
							))}
						</List>
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
														content: paragraph.footNotes[match.trim()],
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
								// put this above also, in and out of footnotes
								<Typography key={Object.keys(text)[index]} paragraph>
									{reactStringReplace(text, /<i>(.*)<\/i>/g, (match, i) => (
										<Box key={i} component="span" fontStyle="italic">
											{match}
										</Box>
									))}
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
