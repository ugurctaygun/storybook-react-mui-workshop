import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Breadcrumbs, Link, Typography, Container, Box } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { makeStyles } from '@material-ui/styles';
import BigBang from '../Animations/BigBang';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'inline-block'
    },
    active: {
        fontWeight: '500',
        //color: theme.palette.type === 'light' ? theme.palette.background.dark : theme.palette.text.secondary
    }
}));

const Page = ({ title, loading, disableHeader = false, disableBreadcrumbs = false, children }) => {

    const classes = useStyles();

    const getBreadCrumbs = () => {
        const pathnames = ['Home' , 'Page' , 'Detail']

        return (
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link underline="hover" component={RouterLink} color="inherit">
                    <HomeOutlinedIcon />
                </Link>
                {pathnames.map((pathname, i) => {
                    const first = i === 0;
                    const last = i === pathnames.length - 1;

                    if (first) {
                        return (
                            <Typography className={classes.active} key={i}>
                                {pathname}
                            </Typography>
                        );
                    }

                    if (last) {
                        return (
                            <Typography className={classes.active} key={i}>
                                {pathname}
                            </Typography>
                        );
                    }


                    return (
                        <Link underline="hover" key={i} component={RouterLink} color="inherit">
                            {pathname}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        );
    };

    return (
        <>
            <title>{title}</title>
            {loading ? (
                <BigBang />
            ) : (
                <Container maxWidth={false} className={classes.container}>
                    <Box mt={2} mb={4} height={!disableBreadcrumbs ? 21 : 'auto'}>
                        {!disableBreadcrumbs && getBreadCrumbs()}
                    </Box>
                    {!disableHeader && (
                        <Box mb={2}>
                            <Typography gutterBottom variant="h4">
                              title
                            </Typography>
                        </Box>
                    )}
                    <Box mb={5}>Page Content</Box>
                </Container>
            )}
        </>
    );
};

Page.propTypes = {
    title: PropTypes.string.isRequired,
    header: PropTypes.string,
    loading: PropTypes.bool,
    breadcrumbs: PropTypes.bool,
    children: PropTypes.node.isRequired
};

export default Page;
