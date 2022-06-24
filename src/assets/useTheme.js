import { useMemo } from 'react'

import { useMediaQuery } from '@material-ui/core'
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

export function useTheme() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

	const theme = useMemo(
		() =>
			responsiveFontSizes(
				createTheme({
					palette: {
						type: prefersDarkMode ? 'dark' : 'light',
						primary: { main: '#FF9933' },
						secondary: { main: '#3399FF' },
					},
					typography: {
						fontFamily: ['Inter', 'sans-serif'].join(','),
						button: {
							textTransform: 'none',
						},
					},
					shape: {
						borderRadius: 16,
					},
					mixins: {
						appbar: {
							height: 56,
							'@media (min-width:0px) and (orientation: landscape)': {
								height: 48,
							},
							'@media (min-width:600px)': {
								height: 64,
							},
						},
						subjectDrawerContents: {
							maxWidth: 600,
						},
					},
				})
			),
		[prefersDarkMode]
	)

	return theme
}
