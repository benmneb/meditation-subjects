import { useState } from 'react';

import {
	Box,
	Button,
	Collapse,
	ListItem,
	ListItemIcon,
	ListItemText,
	List,
	Divider,
	AppBar,
	Toolbar,
	Typography
} from '@material-ui/core';
import {
	CloseRounded,
	ExpandLessRounded,
	ExpandMoreRounded,
	InboxRounded
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { useGlobalState } from '../state';

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'relative',
		backgroundColor: (props) => props?.data?.color
	},
	toolbar: {
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
					</Typography>
					<Button
						autoFocus
						color="inherit"
						onClick={handleCloseModal}
						endIcon={<CloseRounded />}
					>
						Close
					</Button>
				</Toolbar>
			</AppBar>
			<List>
				<ListItem button onClick={() => toggleExpandSection(1)}>
					<ListItemIcon>
						<InboxRounded />
					</ListItemIcon>
					<ListItemText primary="Preliminary Work" secondary="secondary..." />
					{open.includes(1) ? <ExpandLessRounded /> : <ExpandMoreRounded />}
				</ListItem>
				<Collapse in={open.includes(1)} timeout="auto">
					<Box>collapse!!1</Box>
				</Collapse>
				<Divider />
				<ListItem button onClick={() => toggleExpandSection(2)}>
					<ListItemIcon>
						<InboxRounded />
					</ListItemIcon>
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
					<ListItemIcon>
						<InboxRounded />
					</ListItemIcon>
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
