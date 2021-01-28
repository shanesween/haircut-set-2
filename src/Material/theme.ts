import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { PaletteType } from '@material-ui/core';

// Create a theme instance.
export const getAppTheme = (mode: PaletteType = 'light'): Theme => {

    const themeConfig = {
        palette: {
            primary: {
                main: '#A63446',
            },
            secondary: {
                main: '#A7B4A9',
            },
            error: {
                main: red.A400,
            },
            background: {
                default: '#FBFEF9',
                black: '1B1F22'
            },
        },
    };

    const MaterialTheme = createMuiTheme({ ...themeConfig });
    return responsiveFontSizes(MaterialTheme);
};

export const theme = getAppTheme();
