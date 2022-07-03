import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	styled,
	Typography,
} from '@mui/material'

import { useDispatch } from 'react-redux'

import { chooseSubject, showSubjectDrawer } from '../store'

const StyledCard = styled(Card, {
	shouldForwardProp: (prop) => prop !== 'bgColor',
})(({ theme, bgColor }) => ({
	width: '100%',
	height: 305,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'space-between',
	textAlign: 'center',
	color: theme.palette.getContrastText(bgColor),
	backgroundColor: bgColor,
	[theme.breakpoints.only('xs')]: {
		height: 250,
	},
}))

const StyledCardHeader = styled(CardHeader, {
	shouldForwardProp: (prop) => prop !== 'bgColor',
})(({ theme, bgColor }) => ({
	color: theme.palette.getContrastText(bgColor),
	fontSize: 14,
	opacity: '0.2',
}))

const StyledCardContent = styled(CardContent)({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
	height: '100%',
	maxHeight: 190,
})

const SubTitle = styled(Typography, {
	shouldForwardProp: (prop) => prop !== 'bgColor',
})(({ theme, bgColor }) => ({
	color: theme.palette.getContrastText(bgColor),
	marginBottom: 12,
	opacity: '0.7',
	[theme.breakpoints.only('xs')]: {
		display: 'none',
	},
}))

const ActionText = styled(Typography, {
	shouldForwardProp: (prop) => prop !== 'bgColor',
})(({ theme, bgColor }) => ({
	color: theme.palette.getContrastText(bgColor),
	padding: theme.spacing(1, 1.5),
}))

export default function MeditationCard({ data, bgColor, number }) {
	const dispatch = useDispatch()

	function handleClick() {
		dispatch(showSubjectDrawer(true))
		dispatch(chooseSubject(data))
	}

	return (
		<Button sx={{ p: 0 }} onClick={handleClick}>
			<StyledCard variant="outlined" bgColor={bgColor}>
				<StyledCardHeader title={number} disableTypography bgColor={bgColor} />
				<StyledCardContent>
					<Typography variant="h5" component="h2">
						{data.shortName}
					</Typography>
					<SubTitle color="textSecondary" bgColor={bgColor}>
						in {data?.classification}
					</SubTitle>
				</StyledCardContent>
				<CardActions>
					<ActionText variant="button" bgColor={bgColor}>
						Learn More
					</ActionText>
				</CardActions>
			</StyledCard>
		</Button>
	)
}
