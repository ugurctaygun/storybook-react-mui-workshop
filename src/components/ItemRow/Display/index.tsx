import {
  Box,
  Grid,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "../../styles.css";
import { NumericFormat } from "react-number-format";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { CheckBox, FileCopyOutlined } from "@mui/icons-material/";
import { useEffect, useState } from "react";

interface itemType {
  ID: string;
  Cost: number;
  Quantity: number;
  Description: string;
  Unit: string;
  Amount: number;
}

const Display = ({
  item = {
    ID: "1",
    Cost: 2341,
    Quantity: 3,
    Description: "New item order",
    Unit: "CM",
    Amount: 3232,
  },
  handleEditItem = () => {},
  handleDeleteItem = () => {},
  handleCopyItem = () => {},
  itemIndex = 0,
  itemIsDısabled = false,
}) => {
  const [itemValue, setItemValue] = useState(0);
  const theme = useTheme();
  const mobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    setItemValue(item?.Cost * item?.Quantity);
  }, [item?.Cost, item?.Quantity]);

  return (
    <Paper
      className="paperStyle"
      style={{
        marginBottom: mobileDevice ? "10px" : "0",
        minWidth: 900,
        display: "flex",
      }}
    >
      <Box sx={{ mr: "15px" }}>
        <CheckBox />
      </Box>

      <Grid container wrap={mobileDevice ? "wrap" : "nowrap"} spacing={0}>
        <Grid
          container
          item
          onClick={() => {
            handleEditItem();
          }}
        >
          <Grid
            container
            item
            xs={12}
            style={{ padding: mobileDevice ? "0 30px" : "0" }}
          >
            <Grid item xs={6} md={1}>
              {mobileDevice && (
                <Typography style={{ margin: "5px 0" }} variant="h6">
                  ID
                </Typography>
              )}
              <Typography data-cy="poItemsListID">{item?.ID}</Typography>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box pl={mobileDevice ? 3 : 1} style={{ width: "100%" }}>
                {mobileDevice && (
                  <Typography style={{ margin: "5px 0" }} variant="h6">
                    {t("po-item-des")}
                  </Typography>
                )}
                <Tooltip
                  title={
                    item?.Description?.length > 20 ? item?.Description : ""
                  }
                >
                  <Typography data-cy="poItemsListDescription">
                    {item?.Description}
                  </Typography>
                </Tooltip>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Box pl={mobileDevice ? 0 : 4}>
                {mobileDevice && (
                  <Typography style={{ margin: "5px 0" }} variant="h6">
                    Quantity
                  </Typography>
                )}
                <Typography data-cy="poItemListQuantity">
                  {item?.Quantity}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={2}>
              <Box pl={mobileDevice ? 3 : 4}>
                {mobileDevice && (
                  <Typography style={{ margin: "5px 0" }} variant="h6">
                    Unit
                  </Typography>
                )}
                <Typography data-cy="poItemsListUnit">{item?.Unit}</Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={2} style={{ whiteSpace: "pre" }}>
              <Box pl={mobileDevice ? 0 : 4}>
                {mobileDevice && (
                  <Typography
                    style={{ margin: "5px 0", whiteSpace: "pre" }}
                    variant="h6"
                  >
                    Cost
                  </Typography>
                )}
                <Typography
                  data-cy="poItemsListCost"
                  style={{ whiteSpace: "pre" }}
                >
                  <NumericFormat
                    value={item?.Cost}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    displayType={"text"}
                    thousandSeparator={true}
                    suffix={" " + "TL"}
                  />
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={6}
              md={2}
              style={{
                display: "flex",
                justifyContent: !mobileDevice && "flex-end",
              }}
            >
              <Box pl={mobileDevice ? 0 : 3} pr={!mobileDevice && "25px"}>
                {mobileDevice && (
                  <Typography style={{ margin: "5px 0" }} variant="h6">
                    Amount
                  </Typography>
                )}
                <Typography data-cy="poItemsListValue">
                  <NumericFormat
                    value={itemValue}
                    decimalScale={2}
                    fixedDecimalScale={true}
                    displayType={"text"}
                    thousandSeparator={true}
                    renderText={(itemValue) => (
                      <>
                        {itemValue.length > 12
                          ? itemValue.substring(0, 12) + " ..."
                          : itemValue}
                      </>
                    )}
                    suffix={"tl"}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            margin: mobileDevice ? "15px auto 0px auto" : "0",
          }}
        >
          <Box
            height={"100%"}
            style={{ display: "flex", minWidth: mobileDevice ? "150px" : "0" }}
          >
            <IconButton
              disableRipple
              disabled={itemIsDısabled}
              color={"primary"}
              size="small"
              aria-label=""
              style={{ display: "contents" }}
              onClick={() => {
                handleCopyItem();
              }}
              data-cy="poItemsListCopyButton"
            >
              <FileCopyOutlined fontSize={"small"} />
            </IconButton>
            <IconButton
              disableRipple
              disabled={itemIsDısabled}
              color={"primary"}
              size="small"
              aria-label=""
              style={{ display: "contents" }}
              onClick={() => {
                handleEditItem();
              }}
              data-cy="poItemsListEditButton"
            >
              <EditIcon fontSize={"small"} />
            </IconButton>
            <IconButton
              disableRipple
              disabled={itemIsDısabled}
              size="small"
              aria-label=""
              style={{ display: "contents" }}
              onClick={() => {
                // handleDeleteItem(index);
              }}
            >
              <DeleteIcon fontSize={"small"} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Display;
