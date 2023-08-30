import { Grid, Paper, Typography, Box } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Item from "../ItemRow";
import "../styles.css";
import { useState } from "react";
import TableHeader from "./TableHeader";

interface ItemsType {
  /**
   * Label value of the chip
   */
  actionType: "Icons" | "Menu";
  hasMultiSelect?: boolean;
}

const Items = ({ actionType = "Icons", hasMultiSelect = false }) => {
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
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        passedItem,
      ]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== passedItem)
      );
    }
  };

  return (
    <Grid>
      <TableHeader />
      <Box>
        {items.map((item) => (
          <Item
            item={item}
            key={item.ID}
            handleMultiSelect={handleMultiSelect}
            actionType={actionType}
            hasMultiSelect={hasMultiSelect}
            itemIsDisabled={selectedItems.length > 0}
          />
        ))}
      </Box>

      <Paper className="itemsHeader" elevation={0}>
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
        <Paper
          elevation={5}
          style={{
            padding: "15px 25px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "25px auto",
            width: 250,
          }}
        >
          <ClearIcon />
          <Typography>{selectedItems.length} items selected</Typography>
          <DeleteSweepIcon />
        </Paper>
      )}
    </Grid>
  );
};

export default Items;
