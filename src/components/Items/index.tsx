import { Grid, Paper, Typography, Box, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import Item from "../ItemRow";
import "../styles.css";
import { useState } from "react";
import TableHeader from "./TableHeader";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import Actions from "./Actions";

interface ItemsType {
  /**
   * Label value of the chip
   */
  actionType: "Icons" | "Menu";
  hasMultiSelect?: boolean;
}

const itemTemplate =   {
  Amount: 0,
  Cost: 0,
  Description: "New item",
  ID: 0,
  Quantity: 0,
  Unit: null,
}

const Items = ({
  actionType = "Icons",
  hasMultiSelect = false,
  viewTotal = false,
}) => {
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
  const [itemChecked,setItemChecked] = useState(false)
  const handleDeleteSelected = () => {
    const updatedItems = items.filter((item) => !selectedItems.includes(item));
    setItems(updatedItems);
    setSelectedItems([]);
  };

  const handleDeleteAll = () => {
    setItems([]);
  }
  

  const handleAddNewItem = () => {
    const newItem = {
      ...itemTemplate,
      ID: Math.floor(Math.random() * 100),
    };
    setItems(prevItems => [...prevItems, newItem]);
  }

  const handleMultiSelect = (passedItem: any, selected: boolean) => {
    if (selected) {
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        passedItem,
      ]);
      setItemChecked(true)
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((item) => item !== passedItem)
      );
    }
  };

  const handleClearMultiSelect = () => {
    setSelectedItems([]);
    setItemChecked(false)
  };

  return (
    <Grid style={{ minWidth: 900 }}>
      <Actions handleDeleteAll={handleDeleteAll} handleAddNewItem={handleAddNewItem} />
      <TableHeader />
      <Box>
        {items.length > 0 ? (
          items.map((item) => (
            <Item
              item={item}
              key={item.ID}
              handleMultiSelect={handleMultiSelect}
              actionType={actionType}
              hasMultiSelect={hasMultiSelect}
              itemIsDisabled={selectedItems.length > 0}
              selectedItems={selectedItems}
            />
          ))
        ) : (
          <Box style={{height: 55, display: 'flex' , justifyContent: 'center' , alignItems : 'center' }}>
            <ClearAllIcon />
          </Box>
        )}
      </Box>

      <Paper className="itemsHeader">
        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "20px",
            minHeight: "20px",
          }}
        >
          {viewTotal && (
            <Box>
              <Typography variant="h6"> Total Amount : 4.598.234 TL</Typography>
            </Box>
          )}
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
          <IconButton
            style={{ padding: 0, margin: 0 }}
            onClick={handleClearMultiSelect}
          >
            <ClearIcon />
          </IconButton>

          <Typography>{selectedItems.length} items selected</Typography>

          <IconButton
            style={{ padding: 0, margin: 0 }}
            color={"error"}
            onClick={handleDeleteSelected}
          >
            <DeleteSweepIcon />
          </IconButton>
        </Paper>
      )}
    </Grid>
  );
};

export default Items;
