import { Grid, Paper, Typography, Box } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import Item from "../ItemRow";
import "../styles.css";
import { useState } from "react";

interface ItemsType {
  /**
   * Label value of the chip
   */
  actionType: "Icon" | "Menu";
}


const Items = ({actionType : ItemsType}) => {
  const [items, setItems] = useState([
    {
      Amount: 3232,
      Cost: 2341,
      Description: "New item order",
      ID: "1",
      Quantity: 3,
      Unit: "CM",
    },
    {
      Amount: 424,
      Cost: 123,
      Description: "Software",
      ID: "2",
      Quantity: 3,
      Unit: "CM",
    },
    {
      Amount: 3232,
      Cost: 645,
      Description: "Office Supplies testing description length",
      ID: "3",
      Quantity: 3,
      Unit: "CM",
    },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleMultiSelect = (passedItem: any, selected: boolean) => {
    if (selected) {
      setSelectedItems(prevSelectedItems => [...prevSelectedItems, passedItem]);
    } else {
      setSelectedItems(prevSelectedItems =>
        prevSelectedItems.filter(item => item !== passedItem)
      );
    }
  };

  return (
    <Grid>
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
      <Box>
        {items.map(item => (
          <Item item={item} key={item.ID} handleMultiSelect={handleMultiSelect} itemIsDisabled={selectedItems.length > 0} />
        ))}
      </Box>

      <Paper className="itemsHeader">
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
          }}
        >
          <Box>
            <Typography variant="h6"> Total Amount : 4.598.234 TL</Typography>
          </Box>
        </Grid>
      </Paper>
      {selectedItems.length > 0 && (
        <Paper elevation={5} style={{padding: '15px 25px' , display: 'flex', justifyContent:'space-between', alignItems:'center', margin: '25px auto' , width : 250}}>
          <ClearIcon />
          <Typography>{selectedItems.length} items selected</Typography>
          <DeleteSweepIcon />
        </Paper>
      )}
    </Grid>
  );
};

export default Items;
