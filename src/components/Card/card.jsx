import React from 'react';
import { withStyles, makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import { Card, CardActionArea, CardActions, Box, Grid, Divider } from '@material-ui/core';

const StyledCard = withStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        '& .MuiCardHeader-root': {
            justifyContent: 'space-between'
        },
        '& .MuiCardHeader-content': {
            flex: 1,
            '& .MuiTypography-root ': {
                flex: 0.99,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                lineClamp: 1,
                boxOrient: 'vertical',
                wordBreak: 'break-all'
            }
        },
        '& .MuiCardHeader-action': {
            margin: 0,
            padding: 0,
            alignSelf: 'center',
            '& .MuiTypography-root span': {
                fontSize: 18,
                fontWeight: 'bold',
                background: 'linear-gradient(68deg, #00a6b5 0%, #0088bd 42%, #0076c2 75%)',
                WebkitBackgroundClip: 'text',
                textFillColor: 'transparent'
            }
        },
        '& .MuiCardActions-root': {
            display: 'flex',
            justifyContent: 'space-evenly'
        }
    }
}))(Card);

const useStyles = makeStyles((theme) => ({
    bgAction: {
        background: theme.palette.type === 'light' ? '#f5f5f5' : '#616161'
    }
}));

const CardView = React.memo(({ items = [], onClick = () => {} }) => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            {items.map((item, i) => (
                <Grid item key={i} lg={3} sm={6} xs={12}>
                    <StyledCard variant="outlined">
                        <Box bgcolor="background.default">{item?.cardHeader || null}</Box>
                        <Divider />
                        <CardActionArea
                            disabled={item.disabled}
                            onClick={() => {
                                onClick(item?.data?.Id);
                                item?.to && history.push(item?.to);
                            }}
                        >
                            {item?.cardContent || null}
                        </CardActionArea>
                        <CardActions className={classes.bgAction}>
                            {item?.actions?.map((action, i) => (
                                <React.Fragment key={i}>{action?.component || null}</React.Fragment>
                            ))}
                        </CardActions>
                    </StyledCard>
                </Grid>
            ))}
        </Grid>
    );
});

export default CardView;