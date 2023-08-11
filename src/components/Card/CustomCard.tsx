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

interface CustomCardProps {
    /**
     * Label value of the chip
     */
    header?: string;
  }


const useStyles = makeStyles((theme) => ({
  bgAction: {
    background: "#f5f5f5",
  },
}));

const CustomCard
 = ({ actionArea , cardHeader , header = 'test' } : CustomCardProps) => {
  const classes = useStyles();
  return (
    <Box>
      <Card>
        <CardHeader title={header}></CardHeader>
        <CardContent>
          Content
        </CardContent>
        {actionArea && <CardActions className={classes.bgAction}></CardActions>}
      </Card>
    </Box>
  );
};

export default CustomCard
;
