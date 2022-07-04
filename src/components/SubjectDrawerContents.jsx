import { Fragment } from 'react'

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
	styled,
} from '@mui/material'
import {
	CloseRounded,
	ExpandLessRounded,
	ExpandMoreRounded,
} from '@mui/icons-material'

import { useSelector, useDispatch } from 'react-redux'

import ListContent from './ListContent'
import ListHeader from './ListHeader'

import { FormattedText } from '../utils'
import { preparatory, supplementary } from '../data/'
import { toggleExpandPrepDetails, toggleExpandSuppDetails } from '../store'

const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== 'bgColor',
})(({ theme, bgColor }) => ({
	height: 120,
	top: 'auto',
	borderRadius: theme.spacing(2, 2, 0, 0),
	backgroundColor: bgColor,
}))

const StyledToolbar = styled(Toolbar, {
	shouldForwardProp: (prop) => prop !== 'color',
})(({ theme, color }) => ({
	height: '100%',
	textAlign: 'center',
	color: theme.palette.getContrastText(color),
	[theme.breakpoints.only('xs')]: {
		textAlign: 'left',
	},
}))

export default function SubjectDrawerContents({ color, handleClose }) {
	const dispatch = useDispatch()

	const subject = useSelector((state) => state.subject)
	const openPrepDetails = useSelector((state) => state.openPrepDetails)
	const openSuppDetails = useSelector((state) => state.openSuppDetails)

	return (
		<>
			<StyledAppBar position="fixed" bgColor={color}>
				<StyledToolbar disableGutters color={color}>
					<Typography
						variant="h4"
						component="h1"
						sx={{ flex: 1, marginLeft: 2 }}
					>
						{subject?.longName}
						<Box component="span" fontStyle="italic">
							<Typography variant="body1">
								in {subject?.classification}
							</Typography>
						</Box>
					</Typography>
					<Tooltip title="Close" placement="left">
						<IconButton
							color="inherit"
							autoFocus
							onClick={handleClose}
							size="large"
						>
							<CloseRounded />
						</IconButton>
					</Tooltip>
				</StyledToolbar>
			</StyledAppBar>
			<Box minHeight={120} />
			<List component="section">
				<ListHeader
					number={1}
					primary="Preparatory Instructions"
					secondary="Applicable to all meditation subjects"
				/>
				<ListContent number={1}>
					<FormattedText data={preparatory.inBrief} />
					<List>
						{preparatory.inDetail.map((subChap) => (
							<Fragment key={subChap.text}>
								<ListItem
									button
									onClick={() =>
										dispatch(toggleExpandPrepDetails(subChap.text))
									}
									sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
								>
									<ListItemText
										primary={subChap.text}
										primaryTypographyProps={{
											component: 'h3',
											variant: 'body1',
										}}
									/>
									{openPrepDetails.includes(subChap.text) ? (
										<ExpandLessRounded />
									) : (
										<ExpandMoreRounded />
									)}
								</ListItem>
								<Collapse in={openPrepDetails.includes(subChap.text)}>
									<Box padding={2}>
										<FormattedText data={subChap.data} color="textSecondary" />
									</Box>
								</Collapse>
							</Fragment>
						))}
					</List>
				</ListContent>
				<Divider />
				<ListHeader
					number={2}
					primary={`Instructions for ${subject?.longName}`}
					secondary="Specific to this meditation subject only"
				/>
				<ListContent number={2}>
					{subject && <FormattedText data={subject.instructions} />}
				</ListContent>
				<Divider />
				<ListHeader
					number={3}
					primary="Supplementary Instructions"
					secondary="Applicable to all meditation subjects"
				/>
				<ListContent number={3}>
					<List>
						{supplementary.organisedData.map((chapter) => (
							<Fragment key={chapter.text}>
								<ListItem
									button
									onClick={() =>
										dispatch(toggleExpandSuppDetails(chapter.text))
									}
									sx={{ borderRadius: (theme) => theme.shape.borderRadius }}
								>
									<ListItemText
										primary={chapter.text}
										primaryTypographyProps={{
											component: 'h3',
											variant: 'body1',
										}}
									/>
									{openSuppDetails.includes(chapter.text) ? (
										<ExpandLessRounded />
									) : (
										<ExpandMoreRounded />
									)}
								</ListItem>
								<Collapse in={openSuppDetails.includes(chapter.text)}>
									<Box padding={2}>
										<FormattedText data={chapter.data} color="textSecondary" />
									</Box>
								</Collapse>
							</Fragment>
						))}
					</List>
				</ListContent>
			</List>
		</>
	)
}
