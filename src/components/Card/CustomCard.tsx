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

interface CustomCardProps {
  /**
   * Label value of the chip
   */
  header?: string;
  /**
   * Label value of the chip
   */
  actionArea?: boolean;
}

const CustomCard = ({
  actionArea = true,
  header = "test",
}: CustomCardProps) => {
  return (
    <Box>
      <Card>
        <CardHeader title={header}></CardHeader>
        <CardContent>Content</CardContent>
        {actionArea && (
          <CardActions style={{ background: "#f5f5f5" }}></CardActions>
        )}
      </Card>
    </Box>
  );
};

export default CustomCard;
