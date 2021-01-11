import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => {
    return {
        container: {
            width: "100%",
            height: "100%",
            position:"fixed",
            backgroundColor: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
});

const SplashScreen = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default SplashScreen