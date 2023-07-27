<TextField
                                                        value={purchaseOrder.WBS}
                                                        label={labelMaker('WBS', t('WBS.label'))}
                                                        variant="outlined"
                                                        id="WBS"
                                                        className={classes.autoFillBG}
                                                        disabled={poFieldsDisabled.WBS}
                                                        inputProps={{ maxLength: 50 }}
                                                        fullWidth
                                                        onChange={(event, _value) =>
                                                            onChangeHandler({ WBS: event.target.value })
                                                        }
                                                        error={poValidity.WBS}
                                                        helperText={poValidity.WBS && t('PO-WBS-can-not-be-empty')}
                                                        InputProps={{
                                                            autoComplete: 'on',
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    {!WBSLoading && (
                                                                        <p>
                                                                            {(pypValues.description !== null ||
                                                                                pypValues.description !== '') === true
                                                                                ? pypValues.description
                                                                                : ''}
                                                                        </p>
                                                                    )}
                                                                    {WBSLoading === true && (
                                                                        <CircularProgress color="primary" size={20} />
                                                                    )}
                                                                </InputAdornment>
                                                            )
                                                        }}
                                                        data-cy="purchaseOrderWBS"
                                                    />