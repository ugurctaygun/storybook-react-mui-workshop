import { Grid, Paper, Typography, Box } from "@mui/material";

const TableHeader = () => {
    return (
        <Paper className="itemsHeader">
        <Grid container>
          <Grid
            item
            sm={1}
            md={1}
            lg={1}
            alignContent={"flex-start"}
            style={{ maxWidth: "60px" }}
          ></Grid>
          <Grid item sm={1} md={1} lg={1} alignContent={"flex-start"}>
            <Box pr={0}>
              <Typography variant="h6">ID</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} md={3} lg={3} alignContent={"flex-start"}>
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
            <Box style={{ marginLeft: "-20px" }}>
              <Typography variant="h6">Cost</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} md={1} lg={1} alignContent={"flex-start"}>
            <Box style={{ marginLeft: "-50px" }}>
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
    )
}

export default TableHeader;