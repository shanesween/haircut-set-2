import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { PaletteType } from '@material-ui/core';

// Create a theme instance.
export const getAppTheme = (mode: PaletteType = 'light'): Theme => {

    const themeConfig = {
        palette: {
            primary: {
                main: '#351b54',
            },
            secondary: {
                main: '#ff4f87',
            },
            error: {
                main: red.A400,
            },
            background: {
                default: '#343536',
            },
        },
    };

    const MaterialTheme = createMuiTheme({ ...themeConfig });
    return responsiveFontSizes(MaterialTheme);
};

export const theme = getAppTheme();
