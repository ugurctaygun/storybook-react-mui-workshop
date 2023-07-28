<Box>
{actions.Save !== '' ? (
    <Button
        style={{ height: '100%', minWidth: '250px' }}
        variant="contained"
        fullWidth={mobileDevice ? true : false}
        onClick={() => saveAction()}
        disabled={actions.Save !== '' ? false : true}
    >
        {t('Save.button')}
    </Button>
) : null}
</Box>