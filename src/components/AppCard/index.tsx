import {
  Badge,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import "../styles.css";
import { Home, Send, Star } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

const AppCard = ({ title = "App Description", actions = true , icon = <Home color="primary" fontSize="large" />}) => {
  return (
    <>
      {!actions ? (
        <div>
          <Card className="appCardContainer">
            <IconButton style={{ position: "absolute", right: 0 }}>
              <Star />
            </IconButton>
            <CardActionArea disableRipple>
              <CardContent className="appCardContent">
                <Home color="primary" />
                <Typography style={{ fontWeight: "bold", fontSize: "13px" }}>
                  {title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ) : (
        <div>
          <Card
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              padding: "0 15px",
              maxWidth: 210,
              textAlign: "center",
            }}
          >
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 240,
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "16px" }}>
               {title}
              </Typography>
              {icon}
              <Box>
                <Button
                  color="warning"
                  variant="outlined"
                  style={{
                    minWidth: 160,
                    alignContent: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                    marginBottom: 15,
                  }}
                  endIcon={<Send />}
                >
                  <Typography variant="h6">View List</Typography>
                </Button>
                <Button
                  style={{
                    minWidth: 160,
                    alignContent: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                  }}
                  endIcon={<AddIcon />}
                >
                  <Typography variant="h6">Create New</Typography>
                </Button>
              </Box>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default AppCard;
