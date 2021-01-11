import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import Navigations from './config/routes/index'

function WithTheme(props) {

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#000",
            },
            secondary: {
                main: "#fff",
            },
        },

    });

    return (
        <ThemeProvider theme={theme}>
            <Navigations />
        </ThemeProvider>
    );
}

export default WithTheme;
