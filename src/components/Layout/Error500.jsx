import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import Page from 'src/components/Page';
import { useTranslation } from 'react-i18next';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        paddingTop: '10vh',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
    },
    imageContainer: {
        marginTop: theme.spacing(6),
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        maxWidth: '100%',
        width: 560,
        maxHeight: 300,
        height: 'auto'
    },
    buttonContainer: {
        marginTop: theme.spacing(6),
        display: 'flex',
        justifyContent: 'center'
    }
}));

function Error500(props) {
    const classes = useStyles();
    const theme = useTheme();
    const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation(['shared']);
    const { i18n } = useTranslation();
    return (
        <Page className={classes.root} title="Error 500" disableBreadcrumbs disableHeader loading={false}>
            <Typography align="center" variant={mobileDevice ? 'h4' : 'h1'}>
                {t('shared:errorMessage500')}
                &nbsp;&nbsp;
                <HelpIcon
                    color="primary"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        alert('HTTP 500: ' + JSON.parse(localStorage.getItem('error500Text')));
                    }}
                />
            </Typography>
            <div className={classes.imageContainer}>
                <img alt="" className={classes.image} src="/images/undraw_server_down_s4lk.svg" />
            </div>
            <div className={classes.buttonContainer}>
                <Button color="primary" component={RouterLink} to="/" variant="outlined">
                    {t('shared:goBack500')}
                </Button>
            </div>
        </Page>
    );
}

export default Error500;