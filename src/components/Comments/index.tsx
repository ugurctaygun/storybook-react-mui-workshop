import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/send";
import Comment from "../Comment";

const Comments = ({ children }) => {
  return (
    <Grid xs={12} style={{ minWidth: 500, paddingBottom: 25 }}>
      <Box mb={2}>
        <Card>
          <CardHeader title={"Comments"} />
          <CardContent>
            <Box
              mb={2}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                disabled={false}
                onChange={(event) => console.log(event)}
                inputProps={{ maxLength: 250 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Typography
                        style={{
                          position: "absolute",
                          bottom: "5px",
                          right: 0,
                          minWidth: "75px",
                          fontSize: "12px",
                        }}
                      >
                        10 / 250
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                multiline
                rows={2}
                variant="outlined"
                value={"Test"}
              />
              <Button
                style={{
                  marginTop: "15px",
                  minWidth: "150px",
                  marginLeft: "auto",
                }}
                color="primary"
                endIcon={<SendIcon />}
              >
                Add Comment
              </Button>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {children}
              <Comment />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default Comments;
