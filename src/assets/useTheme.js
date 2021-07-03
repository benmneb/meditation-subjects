import { useMemo } from 'react';

import { useMediaQuery } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export function useTheme() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(
		() =>
			responsiveFontSizes(
				createMuiTheme({
					palette: {
						type: prefersDarkMode ? 'dark' : 'light',
						primary: { main: '#FF9933' },
						secondary: { main: '#3399FF' }
					},
					typography: {
						fontFamily: ['Inter', 'sans-serif'].join(','),
						button: {
							textTransform: 'none'
						}
					},
					shape: {
						borderRadius: 16
					}
				})
			),
		[prefersDarkMode]
	);

	return theme;
}
