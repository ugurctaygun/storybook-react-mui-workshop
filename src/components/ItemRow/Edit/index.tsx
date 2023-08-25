import { useEffect, useState } from 'react';
import useStyles from 'src/views/PurchaseOrder/styles';
import { Box, Paper, TextField, Grid, IconButton, InputAdornment, CircularProgress } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import moment from 'moment';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useTranslation } from 'react-i18next';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { getCurrencySymbol } from 'src/utils/helpers';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { FileCopyOutlined } from '@material-ui/icons';
import {
    exitEditModePOItem,
    getTaxCodeData,
    getPODropDownByNameFunctionArea,
    getFunctionAreaData,
    getPODropDownByNameProfitabilityArea,
    getProfitabilityAreaData
} from 'src/store/actions/purchaseOrderActions';
import { getInternalOrderDetail, getWBSDetail } from 'src/api/purchaseOrderApi';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';

const Edit = ({
    item,
    updateItem,
    validateItem,
    itemsValidity,
    isEditValid,
    handleDeleteItem,
    handleCopyItem,
    purchaseOrderItems,
    index,
    handleClose,
    DropDownUnit,
    DropDownGL,
    DropDownCostCenter,
    DropDownZB1Cat,
    DropDownZB2Cat,
    currencySymbol,
    createrFieldDisable,
    DropDownItemGroup,
    DropDownTaxRate,
    DropDownTaxCode,
    getAutoSelectFieldDropdown,
    callDropDownVisibility,
    autoSelectedFields,
    getTaxCodeDataFromGLCode,
    getFunctionArea,
    getProfitabilityArea,
    poItemVisibleFields,
    poItemMandatoryFields,
    poItemDisabledFields,
    CompanyCodeID,
    DropDownFunctionArea,
    DropDownProfitabilityArea,
    POFunctionArea,
    POProfitabilityArea,
    getDropDownFunctionArea,
    getDropDownProfitabilityArea
}) => {
    const classes = useStyles();
    const { t, i18n } = useTranslation(['purchase-order']);
    const [lang, setLang] = useState(i18n.language);
    i18n.on('languageChanged', setLang);
    let passed = true;
    const [ZB2CatList, setZB2CatList] = useState(DropDownZB2Cat);
    const [, setTaxCode] = useState({ name: '', value: '' });
    const [WBSPyP, setWBSPyP] = useState('');
    const [WBSLoading, setWBSLoading] = useState(false);
    const [InternalOrderPYP, setInternalOrderPYP] = useState('');
    const [IOLoading, setIOLoading] = useState(false);
    const [dateOpen, setDateOpen] = useState(false);
    const [displayFunctionArea, setDisplayFunctionArea] = useState(false);
    const [displayProfitabilityArea, setDisplayProfitabilityArea] = useState(false);

    useEffect(() => {
        if (item.GLCode?.value && item.CostCenter?.value && CompanyCodeID?.value) {
            getFunctionArea({
                query: {
                    GLCodeValue: item.GLCode.value,
                    CostCenterValue: item.CostCenter.value,
                    CompanyCodeValue: CompanyCodeID.value
                },
                index: index
            });
            getProfitabilityArea({
                query: {
                    GLCodeValue: item.GLCode.value,
                    CostCenterValue: item.CostCenter.value,
                    CompanyCodeValue: CompanyCodeID.value
                },
                index: index
            });
        }
        if (item.GLCode === null || item.CostCenter === null) {
            setDisplayFunctionArea(false);
            updateItemOnChange({ FunctionArea: { name: '', value: '' } }, 'FunctionArea', index);
            setDisplayProfitabilityArea(false);
            updateItemOnChange({ ProfitabilityArea: { name: '', value: '' } }, 'ProfitabilityArea', index);
        }
    }, [item.GLCode, item.CostCenter, CompanyCodeID]);

    useEffect(() => {
        if (POFunctionArea[index]) {
            setDisplayFunctionArea(POFunctionArea[index].IsVisible);
        }
        if (POFunctionArea[index]?.IsMandatory && DropDownFunctionArea.length === 0) {
            getDropDownFunctionArea({ DropDownName: 'FunctionArea', Language: lang });
        }
        if (POFunctionArea[index]?.IsVisible !== undefined && POFunctionArea[index]?.IsVisible === false) {
            updateItemOnChange({ FunctionArea: { name: '', value: '' } }, 'FunctionArea', index);
        }
    }, [POFunctionArea]);

    useEffect(() => {
        if (POProfitabilityArea[index]) {
            setDisplayProfitabilityArea(POProfitabilityArea[index].IsVisible);
        }
        if (POProfitabilityArea[index]?.IsMandatory && DropDownProfitabilityArea.length === 0) {
            getDropDownProfitabilityArea({ DropDownName: 'ProfitabilityArea', Language: lang });
        }
        if (POProfitabilityArea[index]?.IsVisible !== undefined && POProfitabilityArea[index]?.IsVisible === false) {
            updateItemOnChange({ ProfitabilityArea: { name: '', value: '' } }, 'ProfitabilityArea', index);
        }
    }, [POProfitabilityArea]);

    useEffect(() => {
        if (item?.InternalOrder?.length > 0) {
            setIOLoading(true);
            getInternalOrderDetail({ InternalOrder: item.InternalOrder })
                .then((res) => {
                    if (res.data?.orderName !== '') {
                        setInternalOrderPYP(res.data?.orderName);
                        setIOLoading(false);
                    } else {
                        setInternalOrderPYP('');
                        setIOLoading(false);
                    }
                })
                .catch((error) => {
                    setIOLoading(false);
                    setInternalOrderPYP('');
                });
        } else {
            setInternalOrderPYP('');
        }
    }, [item.InternalOrder]);

    useEffect(() => {
        if (item?.WBS?.length > 0) {
            getWBSDetail({ WBSInput: item.WBS })
                .then((res) => {
                    if (res.data?.description !== '') {
                        setWBSPyP(res.data?.description);
                        setWBSLoading(false);
                    } else {
                        setWBSPyP('');
                        setWBSLoading(false);
                    }
                })
                .catch((error) => {
                    setWBSLoading(false);
                    setWBSPyP('');
                });
        } else {
            setWBSPyP('');
        }
    }, [item.WBS]);

    useEffect(() => {
        if (DropDownTaxRate?.length > 0 && item.TaxRate?.name === '') {
            updateItemOnChange({ TaxRate: DropDownTaxRate[0] }, 'TaxRate', index);
        }
    }, [DropDownTaxRate]);

    useEffect(() => {
        if (DropDownTaxCode?.length > 0 && item.TaxCode?.name === '') {
            updateItemOnChange({ TaxCode: DropDownTaxCode[0] }, 'TaxCode', index);
        }
    }, [DropDownTaxCode]);

    useEffect(() => {
        if (autoSelectedFields !== null) {
            updateItemOnChange({ ZBBCategoryL1: autoSelectedFields.ZBBCategoryL1 }, 'ZBBCategoryL1', index);
            updateItemOnChange({ ZBBCategoryL2: { name: '', value: '' } }, 'ZBBCategoryL2', index);
        }
    }, [autoSelectedFields]);

    useEffect(() => {
        if (item.ZBBCategoryL1 !== null) {
            let zb1Cat = item.ZBBCategoryL1?.value;
            if (zb1Cat !== undefined) {
                let list = DropDownZB2Cat.filter((x) => x.value.indexOf(zb1Cat) > -1);
                setZB2CatList(list);
            }
        } else {
            setZB2CatList(DropDownZB2Cat);
        }
    }, [item.ZBBCategoryL1, DropDownZB1Cat]);

    const updateItemOnChange = (data, _name, key) => {
        let arr = purchaseOrderItems;
        arr[key] = { ...arr[key], ...data };
        updateItem(arr);
        validateItem({ key: Object.keys(data)[0], flag: false, index: key });
    };

    const labelCheck = (label) => {
        if (poItemMandatoryFields[label]) {
            return '*';
        } else {
            return '';
        }
    };

    const errorCheck = (label, message = '') => {
        if (poItemMandatoryFields[label] && itemsValidity[index][label]) {
            if (message !== '') {
                return message;
            } else {
                return true;
            }
        }
        return false;
    };

    const validateClose = (_key) => {
        passed = true;

        Object.keys(item).forEach((key) => {
            if (key !== 'ItemID' && key !== 'Requestor' && key !== 'Code') {
                if (item[key] === '' || item[key] === null || item[key]?.name == '' || item[key]?.name === null) {
                    validateItem({ key: key, flag: true, index: index });
                    passed = false;
                    isEditValid(true);
                    handleClose();
                }
            }
        });

        if (passed) {
            isEditValid(true);
            handleClose();
        }
    };

    const checkVisibility = (input) => {
        switch (typeof input) {
            case 'string':
                return poItemVisibleFields[input];
            case 'object':
                return input.every((field) => poItemVisibleFields[field] === true);
            default:
                return false;
        }
    };

    return (
        <Paper className={classes.editPaper}>
            <Box spacing={0}>
                <Grid container item xs={12} mb={1}>
                    <Grid container item sm={12} md={1} lg={1} xl={1} alignContent={'flex-start'}>
                        <TextField
                            label={'ID'}
                            defaultValue={item.ID}
                            onChange={(event) =>
                                updateItemOnChange({ ID: event.target.value.replace(/D/g, '') }, 'ID', index)
                            }
                            variant="outlined"
                            className={classes.inputContainer}
                            InputProps={{ classes: { input: classes.numberInput } }}
                            type="number"
                            disabled={true}
                            data-cy="poItemsEditID"
                        />
                    </Grid>
                    <Grid container item sm={12} md={2} lg={2} xl={2}>
                        <TextField
                            label={`${t('po-item-des')} ${labelCheck('Description')}`}
                            defaultValue={item.Description}
                            onChange={(event) =>
                                updateItemOnChange({ Description: event.target.value }, 'Description', index)
                            }
                            inputProps={{ maxLength: 250 }}
                            className={classes.inputContainer}
                            sx={{ m: 1, width: '100%' }}
                            variant="outlined"
                            error={errorCheck('Description')}
                            helperText={errorCheck('Description', t('required'))}
                            disabled={poItemDisabledFields.Description || createrFieldDisable}
                            data-cy="poItemsEditDescription"
                        />
                    </Grid>
                    <Grid container item sm={12} md={2} lg={2} xl={2} justifyContent="center">
                        <TextField
                            label={`${t('po-quantity')} ${labelCheck('Quantity')}`}
                            value={item.Quantity}
                            onChange={(event) => {
                                if (event.target.value.length < 21) {
                                    if (event.target.value >= 0) {
                                        updateItemOnChange(
                                            { Quantity: event.target.value.replace(/D/g, '') },
                                            'Quantity',
                                            index
                                        );
                                    }
                                }
                            }}
                            className={classes.inputContainer}
                            variant="outlined"
                            InputProps={{ classes: { input: classes.numberInput } }}
                            type="tel"
                            error={errorCheck('Quantity')}
                            helperText={errorCheck('Quantity', t('required'))}
                            disabled={poItemDisabledFields.Quantit || createrFieldDisable}
                            data-cy="poItemsEditQuantity"
                        />
                    </Grid>
                    <Grid container item sm={12} md={2} lg={2} xl={2} justifyContent="center">
                        <Autocomplete
                            onChange={(_event, value) => updateItemOnChange({ Unit: value }, 'Unit', index)}
                            value={item.Unit}
                            options={DropDownUnit}
                            getOptionSelected={(_option, _value) => true}
                            getOptionLabel={(option) => option?.name || ''}
                            className={classes.inputContainer}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={`${t('po-unit')} ${labelCheck('Unit')}`}
                                    variant="outlined"
                                    error={errorCheck('Unit')}
                                    helperText={errorCheck('Unit', t('required'))}
                                />
                            )}
                            disabled={poItemDisabledFields.Unit || createrFieldDisable}
                            data-cy="poItemsEditUnit"
                        />
                    </Grid>
                    <Grid container item sm={12} md={2} lg={2} xl={2} justifyContent="center">
                        <CurrencyTextField
                            label={`${t('po-item-cost')} ${labelCheck('Cost')}`}
                            variant="outlined"
                            value={item?.Cost}
                            error={errorCheck('Cost')}
                            helperText={errorCheck('Cost', t('required'))}
                            disabled={poItemDisabledFields.Cost || createrFieldDisable}
                            data-cy="poItemsEditCost"
                            minimumValue="0"
                            outputFormat="number"
                            decimalCharacter="."
                            digitGroupSeparator=","
                            className={classes.formattedNumberInput}
                            maximumValue={10000000000}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {getCurrencySymbol(String.fromCharCode(parseInt(currencySymbol, 16)))}
                                    </InputAdornment>
                                )
                            }}
                            onChange={(event, value) => {
                                if (value >= 0) {
                                    updateItemOnChange({ Cost: value }, 'Cost', index);
                                }
                            }}
                        />
                    </Grid>
                    <Grid container item sm={12} md={3} lg={3} xl={3} justifyContent="center">
                        <Autocomplete
                            onChange={(_event, value) => updateItemOnChange({ Group: value }, 'Group', index)}
                            value={item.Group}
                            loading
                            options={DropDownItemGroup}
                            getOptionSelected={(_option, _value) => true}
                            getOptionLabel={(option) => option?.name || ''}
                            className={classes.inputContainer}
                            data-cy="poItemsEditGroup"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={`${t('po-item-group')} ${labelCheck('Group')}`}
                                    variant="outlined"
                                    error={errorCheck('Group')}
                                    helperText={errorCheck('Group', t('required'))}
                                />
                            )}
                            disabled={poItemDisabledFields.Group || createrFieldDisable}
                        />
                    </Grid>
                </Grid>
                {checkVisibility(['Origin', 'StorageCode', 'DeliveryAddressCode']) && (
                    <Grid container item xs={12} mb={1}>
                        <Grid container item sm={12} md={4} lg={4} xl={4} justifyContent="flex-start">
                            <TextField
                                label={`${t('po-origin')} ${labelCheck('Origin')}`}
                                defaultValue={item.Origin}
                                onChange={(event) =>
                                    updateItemOnChange({ Origin: event.target.value }, 'Origin', index)
                                }
                                inputProps={{ maxLength: 20 }}
                                variant="outlined"
                                className={classes.inputContainer}
                                error={errorCheck('Origin')}
                                helperText={errorCheck('Origin', t('required'))}
                                disabled={createrFieldDisable}
                                data-cy="poItemsEditOrigin"
                            />
                        </Grid>
                        <Grid container item sm={12} md={4} lg={4} xl={4} justifyContent="center">
                            <TextField
                                label={`${t('po-storage-code')} ${labelCheck('StorageCode')}`}
                                defaultValue={item.StorageCode}
                                onChange={(event) =>
                                    updateItemOnChange({ StorageCode: event.target.value }, 'StorageCode', index)
                                }
                                inputProps={{ maxLength: 20 }}
                                variant="outlined"
                                className={classes.inputContainer}
                                error={errorCheck('StorageCode')}
                                helperText={errorCheck('StorageCode', t('required'))}
                                disabled={poItemDisabledFields.Origin || createrFieldDisable}
                                data-cy="poItemsEditStorageCode"
                            />
                        </Grid>
                        <Grid container item sm={12} md={4} lg={4} xl={4} justifyContent="center">
                            <TextField
                                label={`${t('po-item-delivery-adress-code')} ${labelCheck('DeliveryAddressCode')}`}
                                defaultValue={item.DeliveryAddressCode}
                                onChange={(event) =>
                                    updateItemOnChange(
                                        { DeliveryAddressCode: event.target.value },
                                        'DeliveryAddressCode',
                                        index
                                    )
                                }
                                inputProps={{ maxLength: 20 }}
                                variant="outlined"
                                className={classes.inputContainer}
                                error={errorCheck('DeliveryAdressCode')}
                                helperText={errorCheck('DeliveryAdressCode', t('required'))}
                                disabled={poItemDisabledFields.DeliveryAddressCode || createrFieldDisable}
                                data-cy="poItemsEditDeliveryAdressCode"
                            />
                        </Grid>
                    </Grid>
                )}

                <Grid container item xs={12} mb={1}>
                    <Grid container item sm={12} md={checkVisibility('WBS') ? 2 : 4} justifyContent="center">
                        <Autocomplete
                            onChange={(_event, value) => {
                                updateItemOnChange({ TaxRate: value }, 'TaxRate', index);
                            }}
                            value={item.TaxRate}
                            options={DropDownTaxRate}
                            getOptionSelected={(_option, _value) => true}
                            getOptionLabel={(option) => option?.name || ''}
                            className={classes.inputContainer}
                            data-cy="poItemsEditTaxRate"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={`${t('po-item-taxrate')} ${labelCheck('TaxRate')}`}
                                    variant="outlined"
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: <InputAdornment position="start">%</InputAdornment>
                                    }}
                                    error={errorCheck('TaxRate')}
                                    helperText={errorCheck('TaxRate', t('required'))}
                                />
                            )}
                            disabled={poItemDisabledFields.TaxRate || createrFieldDisable}
                        />
                    </Grid>
                    <Grid container item sm={12} md={checkVisibility('WBS') ? 2 : 4} justifyContent="center">
                        <Autocomplete
                            onChange={(_event, value) => {
                                setTaxCode(null);
                                updateItemOnChange({ TaxCode: value }, 'TaxCode', index);
                            }}
                            value={item.TaxCode}
                            options={DropDownTaxCode}
                            getOptionSelected={(_option, _value) => true}
                            getOptionLabel={(option) => option?.name || ''}
                            className={classes.inputContainer}
                            data-cy="poItemsEditTaxCode"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={`${t('po-taxcode')} ${labelCheck('TaxCode')}`}
                                    variant="outlined"
                                    error={errorCheck('TaxCode')}
                                    helperText={errorCheck('TaxCode', t('required'))}
                                />
                            )}
                            disabled={poItemDisabledFields.TaxCode || createrFieldDisable}
                        />
                    </Grid>
                    <Grid container item sm={12} md={checkVisibility('WBS') ? 2 : 4} justifyContent="center">
                        <KeyboardDatePicker
                            inputVariant="outlined"
                            fullWidth
                            disabled={poItemDisabledFields.DeliveryDate || createrFieldDisable}
                            format="DD.MM.YYYY"
                            variant="inline"
                            className={classes.inputContainer}
                            label={`${t('po-delivery-date')} ${labelCheck('DeliveryDate')}`}
                            data-cy="poItemsEditDeliveryDate"
                            value={moment(item.DeliveryDate)}
                            onChange={(date) => {
                                updateItemOnChange(
                                    { DeliveryDate: moment(date).format('MM.DD.YYYY') },
                                    'DeliveryDate',
                                    index
                                );
                                setDateOpen(false);
                            }}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                                onFocus: (e) => {
                                    setDateOpen(true);
                                }
                            }}
                            PopoverProps={{
                                disableRestoreFocus: true,
                                onClose: () => {
                                    setDateOpen(false);
                                }
                            }}
                            InputProps={{
                                onFocus: () => {
                                    setDateOpen(true);
                                }
                            }}
                            open={dateOpen}
                            autoOk={true}
                            error={errorCheck('DeliveryDate')}
                            helperText={errorCheck('DeliveryDate', t('required'))}
                        />
                    </Grid>
                    {checkVisibility('WBS') && (
                        <Grid container item sm={12} md={3} lg={3} xl={3} justifyContent="center">
                            <TextField
                                label={`${t('WBS.label')} ${labelCheck('WBS')}`}
                                defaultValue={item.WBS}
                                id="WBS"
                                name="WBS"
                                onChange={(event) => updateItemOnChange({ WBS: event.target.value }, 'WBS', index)}
                                variant="outlined"
                                data-cy="poItemsEditWBS"
                                className={classes.inputContainer}
                                error={errorCheck('WBS')}
                                helperText={errorCheck('WBS', t('required'))}
                                inputProps={{ maxLength: 50 }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end" data-cy="poItemsEditWBSPyP">
                                            {!WBSLoading && <p style={{ fontSize: '12px' }}>{WBSPyP}</p>}
                                            {WBSLoading === true && <CircularProgress color="primary" size={20} />}
                                        </InputAdornment>
                                    )
                                }}
                                disabled={poItemDisabledFields.WBS || createrFieldDisable}
                            />
                        </Grid>
                    )}
                    {checkVisibility('InternalOrder') && (
                        <Grid container item sm={12} md={3} lg={3} xl={3} justifyContent="center">
                            <TextField
                                label={`${t('InternalOrder.label')} ${labelCheck('InternalOrder')}`}
                                defaultValue={item.InternalOrder}
                                id="InternalOrder"
                                name="InternalOrder"
                                onChange={(event) =>
                                    updateItemOnChange({ InternalOrder: event.target.value }, 'InternalOrder', index)
                                }
                                variant="outlined"
                                className={classes.inputContainer}
                                error={errorCheck('InternalOrder')}
                                helperText={errorCheck('InternalOrder', t('required'))}
                                inputProps={{ maxLength: 50 }}
                                data-cy="poItemsEditInternalOrder"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment data-cy="poItemsEditInternalOrderPyP" position="end">
                                            {!IOLoading && <p style={{ fontSize: '12px' }}>{InternalOrderPYP}</p>}
                                            {IOLoading === true && <CircularProgress color="primary" size={20} />}
                                        </InputAdornment>
                                    )
                                }}
                                disabled={poItemDisabledFields.InternalOrder || createrFieldDisable}
                            />
                        </Grid>
                    )}
                </Grid>
                <Grid container item xs={12} className={classes.overflowContainer}>
                    <Grid container item sm={12} md={displayFunctionArea ? 2 : 3} justifyContent="center">
                        <Autocomplete
                            onChange={(_event, value) => {
                                updateItemOnChange({ ZBBCategoryL1: value }, 'ZBBCategoryL1', index);
                                let list = DropDownZB2Cat.filter((x) => x.value.indexOf(value?.value) > -1);
                                if (list.length > 0) {
                                    updateItemOnChange({ ZBBCategoryL2: list[0] }, 'ZBBCategoryL2', index);
                                } else {
                                    updateItemOnChange(
                                        { ZBBCategoryL2: { name: '', value: '' } },
                                        'ZBBCategoryL2',
                                        index
                                    );
                                }
                            }}
                            data-cy="poItemsEditZBB1"
                            value={item.ZBBCategoryL1}
                            options={DropDownZB1Cat}
                            getOptionSelected={(_option, _value) => true}
                            getOptionLabel={(option) => option?.name || ''}
                            className={classes.inputContainer}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={`${t('ZBBCatL1.label')} ${labelCheck('ZBBCategoryL1')}`}
                                    variant="outlined"
                                    error={errorCheck('ZBBCategoryL1')}
                                    helperText={errorCheck('ZBBCategoryL1', t('required'))}
                                />
                            )}
                            disabled={poItemDisabledFields.ZBBCategoryL1 || createrFieldDisable}
                        />
                    </Grid>
                    <Grid container item sm={12} md={displayFunctionArea ? 2 : 3} justifyContent="flex-start">
                        <Autocomplete
                            onChange={(_event, value) =>
                                updateItemOnChange({ ZBBCategoryL2: value }, 'ZBBCategoryL2', index)
                            }
                            value={item.ZBBCategoryL2}
                            options={ZB2CatList}
                            getOptionSelected={(_option, _value) => true}
                            getOptionLabel={(option) => option?.name || ''}
                            className={classes.inputContainer}
                            data-cy="poItemsEditZBB2"
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label={`${t('ZBBCatL2.label')} ${labelCheck('ZBBCategoryL2')}`}
                                    variant="outlined"
                                    error={errorCheck('ZBBCategoryL2')}
                                    helperText={errorCheck('ZBBCategoryL2', t('required'))}
                                />
                            )}
                            disabled={poItemDisabledFields.ZBBCategoryL2 || createrFieldDisable}
                        />
                    </Grid>
                    {checkVisibility('CostCenter') && (
                        <Grid container item sm={12} md={displayFunctionArea ? 2 : 3} justifyContent="flex-start">
                            <Autocomplete
                                onChange={(_event, value) => {
                                    updateItemOnChange({ CostCenter: value }, 'CostCenter', index);
                                }}
                                value={item.CostCenter}
                                options={DropDownCostCenter}
                                getOptionSelected={(_option, _value) => true}
                                getOptionLabel={(option) => option?.name || ''}
                                className={classes.inputContainer}
                                data-cy="poItemsEditCostCenter"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label={`${t('CostCenter.label')} ${labelCheck('CostCenter')}`}
                                        variant="outlined"
                                        error={errorCheck('CostCenter')}
                                        helperText={errorCheck('CostCenter', t('required'))}
                                    />
                                )}
                                disabled={poItemDisabledFields.CostCenter || createrFieldDisable}
                            />
                        </Grid>
                    )}
                    {checkVisibility('GLCode') && (
                        <Grid container item sm={12} md={3} justifyContent="center">
                            <Autocomplete
                                onChange={(_event, value) => {
                                    updateItemOnChange({ GLCode: value }, 'GLCode', index);
                                    getAutoSelectFieldDropdown('GLCode', value);
                                    callDropDownVisibility('GLCode', value);
                                }}
                                data-cy="poItemsEditGLCode"
                                value={item.GLCode}
                                options={DropDownGL}
                                getOptionSelected={(_option, _value) => true}
                                getOptionLabel={(option) => option?.name || ''}
                                className={classes.inputContainer}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label={`${t('GLCode.label')} ${labelCheck('GLCode')}`}
                                        variant="outlined"
                                        error={errorCheck('GLCode')}
                                        helperText={errorCheck('GLCode', t('required'))}
                                    />
                                )}
                                disabled={poItemDisabledFields.GLCode || createrFieldDisable}
                            />
                        </Grid>
                    )}
                    {displayFunctionArea && (
                        <Grid container item sm={12} md={3}>
                            <Autocomplete
                                onChange={(event, value) => {
                                    updateItemOnChange({ FunctionArea: value }, 'FunctionArea', index);
                                }}
                                data-cy="poItemsEditFunctionArea"
                                value={item.FunctionArea || ''}
                                options={DropDownFunctionArea}
                                getOptionSelected={(_option, _value) => true}
                                getOptionLabel={(option) => option?.name || ''}
                                className={classes.inputContainer}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label={`${t('FunctionArea.label')} ${labelCheck('FunctionArea')}`}
                                        variant="outlined"
                                        error={errorCheck('FunctionArea')}
                                        helperText={errorCheck('FunctionArea', t('required'))}
                                    />
                                )}
                                disabled={poItemDisabledFields.FunctionArea || createrFieldDisable}
                            />
                        </Grid>
                    )}
                    {displayProfitabilityArea && (
                        <Grid container item sm={12} md={3}>
                            <Autocomplete
                                onChange={(event, value) => {
                                    updateItemOnChange({ ProfitabilityArea: value }, 'ProfitabilityArea', index);
                                }}
                                data-cy="poItemsEditProfitabilityArea"
                                value={item.ProfitabilityArea || ''}
                                options={DropDownProfitabilityArea}
                                getOptionSelected={(_option, _value) => true}
                                getOptionLabel={(option) => option?.name || ''}
                                className={classes.inputContainer}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label={`${t('ProfitabilityArea.label')} ${labelCheck('ProfitabilityArea')}`}
                                        variant="outlined"
                                        error={errorCheck('ProfitabilityArea')}
                                        helperText={errorCheck('ProfitabilityArea', t('required'))}
                                    />
                                )}
                                disabled={poItemDisabledFields.ProfitabilityArea || createrFieldDisable}
                            />
                        </Grid>
                    )}
                </Grid>

                <Grid container item xs={12} justifyContent="flex-end">
                    <Box style={{ display: 'flex' }}>
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
                            data-cy="poItemsEditCopyButton"
                        >
                            <FileCopyOutlined fontSize={'small'} />
                        </IconButton>
                        <IconButton
                            disableRipple
                            disabled={createrFieldDisable}
                            className={classes.deleteButton}
                            size="small"
                            aria-label=""
                            style={{ display: 'contents' }}
                            onClick={() => {
                                handleDeleteItem(index);
                                handleClose();
                            }}
                            data-cy="poItemsEditDeleteButton"
                        >
                            <DeleteIcon fontSize={'small'} />
                        </IconButton>
                        <IconButton
                            variant="filled"
                            aria-label="expand row"
                            size="small"
                            onClick={() => validateClose(index)}
                            data-cy="poItemsEditClose"
                        >
                            <ExpandLessIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Box>
        </Paper>
    );
};

const mapStateToProps = (state) => {
    return {
        DropDownUnit: state.purchaseOrder.PODropDown12,
        DropDownGL: state.purchaseOrder.PODropDown,
        DropDownCostCenter: state.purchaseOrder.PODropDown11,
        DropDownZB1Cat: state.purchaseOrder.PODropDown6,
        DropDownZB2Cat: state.purchaseOrder.PODropDown7,
        DropDownItemGroup: state.purchaseOrder.PODropDownItemGroup,
        DropDownTaxRate: state.purchaseOrder.PODropDownTaxRate,
        DropDownTaxCode: state.purchaseOrder.PODropDownTaxCode,
        DropDownFunctionArea: state.purchaseOrder.PODropDownFunctionArea,
        DropDownProfitabilityArea: state.purchaseOrder.PODropDownProfitabilityArea,
        autoSelectedFields: state.purchaseOrder.autoSelectedFields,
        poItemVisibleFields: state.purchaseOrder.poItemVisibleFields,
        poItemMandatoryFields: state.purchaseOrder.poItemMandatoryFields,
        poItemDisabledFields: state.purchaseOrder.poItemDisabledFields,
        POFunctionArea: state.purchaseOrder.POFunctionArea,
        POProfitabilityArea: state.purchaseOrder.POProfitabilityArea,
        CompanyCodeID: state.purchaseOrder.purchaseOrder.CompanyCode
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        exitEditMode: (param) => dispatch(exitEditModePOItem(param)),
        getTaxCodeDataFromGLCode: (data) => dispatch(getTaxCodeData(data)),
        getFunctionArea: (data) => dispatch(getFunctionAreaData(data)),
        getDropDownFunctionArea: (data) => dispatch(getPODropDownByNameFunctionArea(data)),
        getProfitabilityArea: (data) => dispatch(getProfitabilityAreaData(data)),
        getDropDownProfitabilityArea: (data) => dispatch(getPODropDownByNameProfitabilityArea(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
