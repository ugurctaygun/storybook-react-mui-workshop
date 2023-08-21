import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import { CardContent, CardHeader } from "@mui/material";



const CardView = ({ actionArea=false }) => {
  return (
    <Box>
      <Card>
        <CardHeader title={'testo'}></CardHeader>
        <CardContent>
          Content
        </CardContent>
        {actionArea && <CardActions style={{ background: "#f5f5f5"}}></CardActions>}
      </Card>
    </Box>
  );
};

export default CardView;
