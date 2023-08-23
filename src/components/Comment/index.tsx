import { useEffect, useState, useRef } from "react";
import {
  Avatar,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import ChipComponent from "../Chip";
import EditIcon from "@mui/icons-material/Edit";

const comment = {
  CommentedBy: "User Name",
  Comment: "Comment Value",
  commentError: true,
  UseChipToDisplayComment: false,
  isEditAble: true,
  CommentDisable: true,
};

interface CommentProps {
  /**
   * Commenter name
   */
  CommentedBy: string;
  /**
   * Text value of the comment or chip status text
   */
  Comment: string;
  /**
   * Input error check
   */
  commentError?: string;
  /**
   * Displays commment value as a status chip
   */
  UseChipToDisplayComment: boolean;
  /**
   * Disabled comment
   */
  CommentDisable: boolean;
  /**
   * Editable status of comment component
   */
  isEditAble: boolean;
}

const Comment = ({
  isEditAble = true,
  CommentDisable = false,
  UseChipToDisplayComment = false,
  commentError = 'Error Text',
  Comment = "Comment Text",
  CommentedBy = "User Name",
} : CommentProps) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [userComment, setUserComment] = useState(Comment);
  const commentRef = useRef();

  function handleClickOutside(event: any) {
    if (commentRef.current && !commentRef.current.contains(event.target)) {
      setCommentOpen(false);
    }
  }

  useEffect(() => {
    if (commentOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [commentRef, commentOpen, comment]);

  return (
    <Grid
      container
      alignItems="center"
      direction="row"
      spacing={3}
      wrap="nowrap"
    >
      <Grid item>
        <Avatar variant="rounded" style={{ borderRadius: "50%" }}>
          {CommentedBy.charAt(0).toUpperCase()}
        </Avatar>
      </Grid>

      <Grid item xs={12} style={{ minWidth: 350 }}>
        <Paper variant="outlined">
          <Box p={2}>
            <Grid container direction="column" spacing={2}>
              <Grid container item justifyContent="space-between">
                <Grid item>
                  <Box>
                    <Typography
                      color="textPrimary"
                      style={{ fontWeight: "bold" }}
                    >
                      {CommentedBy}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography color="textSecondary" variant="caption">
                      12.12.2023
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Grid container item justifyContent="space-between" spacing={1}>
                <Grid item md={12} xs={12}>
                  <Box>
                    {commentOpen === true ? (
                      <TextField
                        id="outlined-basic"
                        multiline
                        disabled={CommentDisable}
                        onChange={(e) => {
                          setUserComment(e.target.value);
                        }}
                        inputProps={{ maxLength: 250 }}
                        ref={commentRef}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <EditIcon
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  setCommentOpen(false);
                                }}
                                fontSize="small"
                              />
                            </InputAdornment>
                          ),
                        }}
                        fullWidth
                        value={userComment}
                        style={{ width: "80%" }}
                      />
                    ) : (
                      <Typography
                        variant="body1"
                        onClick={(e) => {
                          isEditAble && setCommentOpen(true);
                        }}
                        color="textPrimary"
                        style={{
                          width: "80%",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-all",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {UseChipToDisplayComment === false &&
                          userComment}{" "}
                        {isEditAble && (
                          <EditIcon
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setCommentOpen(false);
                            }}
                            fontSize="small"
                          />
                        )}
                      </Typography>
                    )}
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Grid item>
                    <Box>
                      {UseChipToDisplayComment === true && (
                        <ChipComponent
                          color="warning"
                          variant={"default"}
                          label={Comment}
                        />
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Comment;
