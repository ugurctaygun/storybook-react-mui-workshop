import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import "../styles.css";
import { Home, Star } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface AppCardTypes {
  /**
   * Title of the app
   */
  title: string;
  /**
   * Action buttons if the app card is being used to navigate certain parts of the app
   */
  actions?: boolean;
  /**
   * Switch between horizontal and vertical card styles.
   * Horizontal style can be used for when the button text is too long for vertical
   */
  horizontal?: boolean;
  /**
   * Custom color for the primary button
   */
  primaryButtonColor?: string;
  /**
   * Primary button text
   */
  primaryButtonText: string;
  /**
   * Secondary button text
   */
  secondaryButtonText: string;
}

const AppCard = ({
  title = "App Title",
  actions = true,
  icon = <Home color="primary" fontSize="large" />,
  horizontal = true,
  primaryButtonColor = "",
  primaryButtonText = "View List",
  secondaryButtonText = "Create New",
}: AppCardTypes) => {
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
              padding: "0 15px",
              maxWidth: horizontal ? 480 : 320,
              textAlign: "center",
              minWidth: horizontal ? 480 : 280,
            }}
          >
            <CardContent
              style={{
                display: "flex",
                flexDirection: horizontal ? "row" : "column",
                justifyContent: "space-between",
                alignItems: "center",
                gap:15,

              }}
            >
              {horizontal ? (
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 15,
                    maxWidth: 120
                  }}
                >
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginRight: 5,
                      wordBreak: 'break-word'
                    }}
                  >
                    {title}
                  </Typography>
                  {icon}
                </Box>
              ) : (
                <>
                  <Typography
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginRight: 5,
                
                    }}
                  >
                    {title}
                  </Typography>
                  {icon}
                </>
              )}

              <Box>
                <Button
                  variant={primaryButtonColor === "" ? "outlined" : "contained"}
                  style={{
                    minWidth: 160,
                    alignContent: "center",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: 15,
                    marginBottom: 15,
                    background: primaryButtonColor,
                    width: '100%'
                  }}
                  endIcon={<ArrowForwardIosIcon style={{ fontSize: 16 }} />}
                >
                  <Typography variant="h6">{primaryButtonText}</Typography>
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
                  <Typography variant="h6">{secondaryButtonText}</Typography>
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
