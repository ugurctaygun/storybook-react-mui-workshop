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
import { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/send";
import Comment from "../Comment";

interface CommentsProps {
  /**
   * Comment submission by form actions or button action , button submit adds comment object before form is submitted , form submit adds comment as a server response
   */
  submitByButton: boolean;
  /**
   * Charater limit counter for comment text field
   */
  characterLimit: boolean;
}

const commentTemplate = {
  isEditAble: true,
  CommentDisable: false,
  UseChipToDisplayComment: false,
  commentError: "Error Text",
  Comment: "Comment Text",
  CommentedBy: "User Name",
};

const Comments = ({
  submitByButton = false,
  characterLimit = true,
}: CommentsProps) => {
  const [newComment, setNewComment] = useState(submitByButton ? 'Click button to add comment' : '');
  const [allComments, setAllComments] = useState([
    {
      isEditAble: false,
      CommentDisable: false,
      UseChipToDisplayComment: true,
      commentError: "Error Text",
      Comment: "Status Message",
      CommentedBy: "User Name",
    },
  ]);
  const handleAddNewComment = () => {
    let commentToAdd = { ...commentTemplate };
    commentToAdd.Comment = newComment;
    setNewComment("");
    setAllComments((previous) => [...previous, commentToAdd]);
  };
  return (
    <Grid xs={12} style={{ paddingBottom: 25 }}>
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
                inputProps={{ maxLength: 250 }}
                onChange={(event) => setNewComment(event.target.value)}
                InputProps={{
                  endAdornment: characterLimit && (
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
                        {newComment.length} / 250
                      </Typography>
                    </InputAdornment>
                  ),
                }}
                placeholder="Enter your comment here"
                fullWidth
                multiline
                rows={2}
                variant="outlined"
                value={newComment}
              />
              {submitByButton && newComment.length > 0 && (
                <Button
                  style={{
                    marginTop: "15px",
                    minWidth: "150px",
                    marginLeft: "auto",
                  }}
                  color="primary"
                  endIcon={<SendIcon />}
                  onClick={handleAddNewComment}
                >
                  Add Comment
                </Button>
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {allComments.map((item) => (
                <Comment
                  CommentedBy={item.CommentedBy}
                  UseChipToDisplayComment={item.UseChipToDisplayComment}
                  Comment={item.Comment}
                  isEditAble={item.isEditAble}
                />
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
};

export default Comments;
