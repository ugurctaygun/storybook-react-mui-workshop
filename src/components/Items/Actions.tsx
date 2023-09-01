import { DeleteSweep, PlaylistAddOutlined } from "@mui/icons-material"
import { Grid, IconButton } from "@mui/material"

const Actions = ({handleDeleteAll , handleAddNewItem}) => {
    return (
        <Grid container justifyContent={'flex-end'}>
            <IconButton component='span' color='primary' onClick={handleAddNewItem}>
                <PlaylistAddOutlined />
            </IconButton>
            <IconButton component='span'  color={"error"} onClick={handleDeleteAll}>
                <DeleteSweep  />
            </IconButton>
        </Grid>
    )
}

export default Actions;