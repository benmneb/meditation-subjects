import { useState } from 'react';

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

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
		height: 100,
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
	}
}));

export default function ModalContents(props) {
	const styles = useStyles(props);

	const [state, dispatch] = useGlobalState();

	const [open, setOpen] = useState([2]);

	function toggleExpandSection(section) {
		if (open.includes(section)) {
			setOpen((prev) => prev.filter((sects) => sects !== section));
		} else {
			setOpen((prev) => [...prev, section]);
		}
	}

	function handleCloseModal() {
		dispatch({ type: 'CHOOSE_SUBJECT', subject: null });
	}

	return (
		<>
			<AppBar className={styles.appBar}>
				<Toolbar disableGutters className={styles.toolbar}>
					<Typography variant="h6" className={styles.title}>
						{state?.subject?.longName}
						<Box component="span" fontStyle="italic">
							<Typography variant="body1">in {state?.subject?.chapter}</Typography>
						</Box>
					</Typography>
					<IconButton edge="end" color="inherit" autoFocus onClick={handleCloseModal}>
						<CloseRounded />
					</IconButton>
				</Toolbar>
			</AppBar>
			<List>
				<ListItem button onClick={() => toggleExpandSection(1)}>
					<ListItemText primary="Preliminary Work" secondary="secondary..." />
					{open.includes(1) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
				</ListItem>
				<Collapse in={open.includes(1)} timeout="auto">
					<Box>collapse!!1</Box>
				</Collapse>
				<Divider />
				<ListItem button onClick={() => toggleExpandSection(2)}>
					<ListItemText
						primary="Specific instructions for this one"
						secondary="subtitle"
					/>
					{open.includes(2) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
				</ListItem>
				<Collapse in={open.includes(2)} timeout="auto">
					<Box>collapse!!2</Box>
				</Collapse>
				<Divider />
				<ListItem button onClick={() => toggleExpandSection(3)}>
					<ListItemText primary="General Jhana Info" secondary="secondary..." />
					{open.includes(3) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
				</ListItem>
				<Collapse in={open.includes(3)} timeout="auto">
					<Box>collapse!!3</Box>
				</Collapse>
			</List>
		</>
	);
}
