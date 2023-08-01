import React from "react";
import { withStyles, makeStyles } from "@material-ui/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  Box,
  Grid,
  Divider,
} from "@material-ui/core";
import { CardContent, CardHeader } from "@mui/material";

const StyledCard = withStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    "& .MuiCardHeader-root": {
      justifyContent: "space-between",
      padding: 15,
    },
    "& .MuiCardHeader-content": {
      flex: 1,
      
      "& .MuiTypography-root ": {
        flex: 0.99,
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        lineClamp: 1,
        boxOrient: "vertical",
        wordBreak: "break-all",
      },
    },
    "& .MuiCardHeader-action": {
      margin: 0,
      padding: 15,
      alignSelf: "center",
      "& .MuiTypography-root span": {
        fontSize: 18,
        fontWeight: "bold",
        background:
          "linear-gradient(68deg, #00a6b5 0%, #0088bd 42%, #0076c2 75%)",
        WebkitBackgroundClip: "text",
        textFillColor: "transparent",
      },
    },
    "& .MuiCardActions-root": {
      display: "flex",
      justifyContent: "space-evenly",
    },
  },
}))(Card);

const useStyles = makeStyles((theme) => ({
  bgAction: {
    background: "#f5f5f5",
  },
}));

const CardView = ({ actionArea , cardHeader }) => {
  const classes = useStyles();
  return (
    <Box>
      <Card>
        <CardHeader title={'testo'}></CardHeader>
        <CardContent>
          Content
        </CardContent>
        {actionArea && <CardActions className={classes.bgAction}></CardActions>}
      </Card>
    </Box>
  );
};

export default CardView;
