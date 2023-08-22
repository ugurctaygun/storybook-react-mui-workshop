import React, { useEffect, useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import moment from "moment";
import {
  Avatar,
  Box,
  Link,
  Typography,
  Grid,
  Paper,
  withStyles,
  TextField,
  InputAdornment,
} from "@mui/material";
import ChipComponent from "../Chip";
import { deepPurple } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";

// const GradientAvatar = withStyles((theme) => ({
//     root: {
//         color: '#fff',
//         backgroundColor: deepPurple[500],
//         borderRadius: 50
//     }
// }))(Avatar);

const comment = {
  CommentedBy: "User Name",
  Comment: "Comment Value",
  commentError: true,
  UseChipToDisplayComment: false,
  isEditAble: true,
  CommentDisable: true,
};

const Comment = ({}) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [userComment, setUserComment] = useState(comment.Comment);
  const commentRef = useRef();

  function handleClickOutside(event : any) {
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
          {comment.CommentedBy.charAt(0).toUpperCase()}
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
                      style={{fontWeight: 'bold'}}
                    >
                      {comment.CommentedBy}
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
                        disabled={comment.CommentDisable}
                        onChange={(e) => {
                          console.log(e);
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
                        error={comment.commentError}
                        style={{ width: "80%" }}
                        helperText={comment.commentError}
                      />
                    ) : (
                      <Typography
                        variant="body1"
                        onClick={(e) => {
                          comment.isEditAble && setCommentOpen(true);
                        }}
                        color="textPrimary"
                        style={{
                          width: "80%",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-all",
                          display: 'flex',
                          justifyContent: 'space-between'
                        }}
                      >
                        {comment.UseChipToDisplayComment === false &&
                          comment.Comment}{" "}
                        {comment.isEditAble && (
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
                      {comment.UseChipToDisplayComment === true && (
                        <ChipComponent
                          color="secondary"
                          variant={"default"}
                          label={comment.Comment}
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
