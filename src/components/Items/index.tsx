import { Grid, Paper, Typography, Box } from "@mui/material";
import Item from "../ItemRow";
import "../styles.css";

const Items = () => {
  return (
    <Grid>
      <Paper className="itemsHeader">
        <Grid container>
          <Grid item sm={1} md={1} lg={1} alignContent={"flex-start"} style={{maxWidth: '60px'}}>
          </Grid>
          <Grid item sm={1} md={1} lg={1} alignContent={"flex-start"}>
            <Box pr={0}>
              <Typography variant="h6">ID</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} md={2} lg={2} alignContent={"flex-start"}>
            <Box pr={-1}>
              <Typography variant="h6">Description</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} md={2} lg={2} alignContent={"flex-start"}>
            <Box pr={-1}>
              <Typography variant="h6">Quantity</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} md={2} lg={2} alignContent={"flex-start"}>
            <Box  style={{marginLeft: '-8px'}}>
              <Typography variant="h6">Cost</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} md={2} lg={2} alignContent={"flex-start"}>
            <Box style={{marginLeft: '-8px'}}>
              <Typography variant="h6">Unit</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} md={2} lg={2} alignContent={"flex-start"}>
            <Box pr={-1}>
              <Typography variant="h6">Total</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Box>
      <Item />
      <Item />
      <Item />
      </Box>
    
      <Paper className="itemsHeader">
        <Grid sx={{display: 'flex' , justifyContent: 'flex-end' , paddingRight : '20px'}}>
          <Box>
            <Typography variant="h6"> Total Amount : 4.598.234 TL</Typography>
          </Box>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Items;
