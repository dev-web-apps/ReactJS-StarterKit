import React, { useEffect, useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import Navigations from './config/routes/index'
import * as JwtService from './services/auth-services/jwtServices'
import * as UserActions from './config/store/Actions/user.actions'
import { useDispatch } from 'react-redux'
import SplashScreen from '../src/screens/splash/index'


function WithTheme(props) {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false)
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#000",
            },
            secondary: {
                main: "#fff",
            },
            default: {
                marin: "#f1f3f4"
            },
            tertiary: {
                main: "#f0f0f0",
                placeholder: "#3f3f3f",
                text: "#434343",
                heading: "#040404"
            },
            text: {
                primary: "#191919",
                secondary: "#969696"
            }
        },
        typography: {
            fontFamily: [
                'PoppinsRegular',
                'PoppinsMedium',
            ].join(','),
        },

    });

    useEffect(() => {
        const token = JwtService.getAccessToken()
        if (token!==null) {
            JwtService.loginWithToken(token).then((res) => {
                setIsLoaded(true)
                console.log(res)
                dispatch(UserActions.add_user(res))
            }).catch((err) => {
                JwtService.logout()
            })
        }
        else{
            setIsLoaded(true)

        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            {isLoaded ? <Navigations /> :
                <SplashScreen />}
        </ThemeProvider>
    );
}

export default WithTheme;
