'use client';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		section: React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		section?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		section: true;
		h4: false;
		h5: false;
		h6: false;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		generic: true;
	}

	interface ButtonPropsSizeOverrides {
		none: true;
	}
}

const theme = createTheme({
	typography: {
		section: {},
		// Disable some variants
		h4: undefined,
		h5: undefined,
		h6: undefined
	},
	components: {
		MuiButtonBase: {
			defaultProps: {
				// disableRipple: true
			}
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				size: 'medium',
				// disableRipple: true,
				disableFocusRipple: true,
				// disableTouchRipple: true,
				disableElevation: true
			},
			variants: [
				{
					props: { variant: 'generic' },
					style: {}
				}
			]
		},
		MuiIconButton: {
			defaultProps: {
				// disableRipple: true,
				disableFocusRipple: true
				// disableTouchRipple: true
			}
		},
		MuiToggleButton: {
			defaultProps: {
				disableFocusRipple: true
			}
		},
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					h1: 'h1',
					h2: 'h2',
					h3: 'div',
					subtitle1: 'div',
					subtitle2: 'div',
					section: 'section',
					body1: 'div',
					body2: 'div',
					button: 'div',
					caption: 'div',
					overline: 'div'
				}
			}
		}
	}
});

export default theme;