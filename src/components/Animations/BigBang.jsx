import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: 'rgba(0,0,0,0)',
        display: 'flex',
        height: '100%',
        width: '100%',
        filter: 'blur(5px)',
        cursor: 'wait',
        alignSelf: 'center'
    },
    container: {
        position: 'relative',
        width: 100,
        height: 100,
        margin: 'auto'
    },
    wave: {
        background: '#0091EA',
        backfaceVisibility: 'hidden',
        zoom: 1,
        position: 'absolute',
        opacity: 1,
        borderRadius: '50%',
        overflow: 'hidden',
        // animation: 'lds-ripple 1s cubic-bezier(0,.2,.8,1) infinite'
        animation: '$wave 1s infinite'
    },
    '@keyframes wave': {
        '0%': {
            top: 60,
            left: 60,
            width: 0,
            height: 0,
            opacity: 1
        },

        '100%': {
            top: 0,
            left: 0,
            width: 100,
            height: 100,
            opacity: 0.001
        }
    }
}));
export default () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.wave} />
            </div>
        </div>
    );
};
