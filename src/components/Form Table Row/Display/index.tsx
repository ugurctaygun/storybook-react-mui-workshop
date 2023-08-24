import useStyles from 'src/views/PurchaseOrder/styles';
import { Box, Grid, Typography, Paper, IconButton, Tooltip ,useMediaQuery , useTheme} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { FileCopyOutlined } from '@material-ui/icons';
import { getCurrencySymbol } from 'src/utils/helpers';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Display = ({
    item,
    handleEditItem,
    handleDeleteItem,
    handleCopyItem,
    index,
    currencySymbol,
    createrFieldDisable
}) => {
    const classes = useStyles();
    const [itemValue,setItemValue] = useState(0);
    const theme = useTheme();
    const { t } = useTranslation(['purchase-order']);
    const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(() => {
       setItemValue(item?.Cost * item?.Quantity) 
    }, [item?.Cost,item?.Quantity])
    
    return (
        <Paper className={classes.paper} style={{marginBottom: mobileDevice ? '10px' : '0'}}>
            <Grid container wrap={mobileDevice ? 'wrap' : 'nowrap'} spacing={0}>
                <Grid
                    container
                    item
                    onClick={() => {
                        handleEditItem(index);
                    }}
                >
                    <Grid container item xs={12} style={{padding: mobileDevice ? '0 30px' : '0'}}>
                        <Grid item xs={6} md={1} >
                            {mobileDevice && <Typography style={{margin: '5px 0'}} variant="h6">ID</Typography>}
                            <Typography data-cy='poItemsListID'>{item?.ID}</Typography>
                        </Grid>

                        <Grid item xs={6} md={2}>
                            <Box pl={mobileDevice ? 3 : 1} style={{width:'100%'}}>
                            {mobileDevice && <Typography style={{margin: '5px 0'}} variant="h6">{t('po-item-des')}</Typography>}
                                <Tooltip title={item?.Description?.length > 20 ? item?.Description : ''}>
                                    <Typography data-cy='poItemsListDescription' className={classes.cropText}>{item?.Description}</Typography>
                                </Tooltip>
                            </Box>
                        </Grid>

                        <Grid item xs={6} md={2}>
                            <Box pl={mobileDevice ? 0 : 4}>
                            {mobileDevice && <Typography style={{margin: '5px 0'}} variant="h6">Quantity</Typography>}
                                <Typography data-cy='poItemListQuantity'>{item?.Quantity}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <Box pl={mobileDevice ? 3 : 4}>
                            {mobileDevice && <Typography style={{margin: '5px 0'}} variant="h6">Unit</Typography>}
                                <Typography data-cy='poItemsListUnit'>{item?.Unit?.name}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={1}>
                            <Box pl={mobileDevice ? 0 : 4}>
                            {mobileDevice && <Typography style={{margin: '5px 0'}} variant="h6" >Cost</Typography>}
                                <Typography data-cy='poItemsListCost'>
                                    <NumberFormat
                                        value={
                                            item?.Cost
                                        }
                                        decimalScale={2}
                                        fixedDecimalScale={true}
                                        displayType={'text'}
                                        thousandSeparator={true} 
                                        suffix={' ' + getCurrencySymbol(String.fromCharCode(parseInt(currencySymbol, 16)))}
                                    />
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={2} style={{display:'flex',justifyContent: !mobileDevice && 'flex-end'}}>
                            <Box pl={mobileDevice ? 3 : 0}>
                            {mobileDevice && <Typography style={{margin: '5px 0'}} variant="h6">Group</Typography>}
                                <Typography data-cy='poItemsListGroup' className={classes.whiteSpace}>{item?.Group?.name}</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={2} style={{display:'flex',justifyContent:!mobileDevice && 'flex-end'}}>
                            <Box pl={mobileDevice ? 0 : 3} pr={!mobileDevice && '25px'}>
                            {mobileDevice && <Typography style={{margin: '5px 0'}} variant="h6">Amount</Typography>}
                            <Tooltip title={itemValue.length > 10 ? '' : itemValue.toString()}>
                                <Typography data-cy='poItemsListValue'>
                                    <NumberFormat
                                        value={
                                            itemValue
                                        }
                                        decimalScale={2}
                                        fixedDecimalScale={true}
                                        displayType={'text'}
                                        thousandSeparator={true} 
                                        renderText={(itemValue) => <>{itemValue.length > 12 ? itemValue.substring(0,12) + ' ...' : itemValue}</>}
                                        suffix={' ' + getCurrencySymbol(String.fromCharCode(parseInt(currencySymbol, 16)))}
                                    />
                                </Typography>
                                </Tooltip>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{display:'flex' , justifyContent: 'center' , margin: mobileDevice ?  '15px auto 0px auto' : '0'}}>
                    <Box height={'100%'} style={{ display: 'flex' , minWidth: mobileDevice ? '150px' : '0'}}>
                        <IconButton
                            disableRipple
                            disabled={createrFieldDisable}
                            color={'primary'}
                            className={classes.copyButton}
                            size="small"
                            aria-label=""
                            style={{ display: 'contents' }}
                            onClick={() => {
                                handleCopyItem(index);
                            }}
                            data-cy='poItemsListCopyButton'
                        >
                            <FileCopyOutlined fontSize={'small'} />
                        </IconButton>
                        <IconButton
                            disableRipple
                            disabled={createrFieldDisable}
                            color={'primary'}
                            size="small"
                            aria-label=""
                            style={{ display: 'contents' }}
                            onClick={() => {
                                handleEditItem(index);
                            }}
                            data-cy='poItemsListEditButton'
                        >
                            <EditIcon fontSize={'small'} />
                        </IconButton>
                        <IconButton
                            disableRipple
                            disabled={createrFieldDisable}
                            className={classes.deleteButton}
                            size="small"
                            aria-label=""
                            style={{ display: 'contents' }}
                            onClick={() => {
                                // handleDeleteItem(index);
                            }}
                        >
                            <DeleteIcon fontSize={'small'} />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Display;
