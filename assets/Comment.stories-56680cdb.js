import{C as c}from"./index-b082c05e.js";import"./useThemeProps-65620fae.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-7906c527.js";import"./Chip-c3a2e26c.js";import"./styled-0aaaf00b.js";import"./TransitionGroupContext-69894be1.js";import"./ButtonBase-21d898c0.js";import"./emotion-react.browser.esm-c4bfb050.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./Edit-86537250.js";import"./createSvgIcon-b645c0df.js";import"./useControlled-68bd0334.js";import"./ownerWindow-74a9cc60.js";import"./isMuiElement-402c1219.js";import"./Grid-71bcb943.js";import"./useTheme-6ed6b6db.js";import"./extendSxProp-7611aa3b.js";import"./Paper-e33b4945.js";import"./Box-af6b9817.js";import"./Typography-a9cd13a0.js";import"./TextField-ce85c982.js";import"./Menu-9564914c.js";import"./useSlotProps-61ce3021.js";import"./MenuList-1d5c71e4.js";import"./index-d3ea75b5.js";import"./GlobalStyles-45e15d30.js";import"./InputAdornment-883de13e.js";const C=`import { useEffect, useState, useRef } from "react";
import {Avatar,Box,Typography,Grid,Paper,TextField,InputAdornment,} from "@mui/material";
import ChipComponent from "../Chip";
import EditIcon from "@mui/icons-material/Edit";

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
  }, [commentRef, commentOpen]);

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
`,J={component:c,title:"Components/Data Display/Comment",parameters:{layout:"centered",docs:{source:{code:C}}},tags:["autodocs"]},e={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!1,Comment:"Comment Text",CommentedBy:"User Name"}},t={args:{isEditAble:!0,CommentDisable:!1,UseChipToDisplayComment:!1,Comment:"Click to edit",CommentedBy:"User Name"}},o={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!0,Comment:"Status",CommentedBy:"User Name"}};var m,n,r;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    isEditAble: false,
    CommentDisable: true,
    UseChipToDisplayComment: false,
    Comment: "Comment Text",
    CommentedBy: "User Name"
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var i,s,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    isEditAble: true,
    CommentDisable: false,
    UseChipToDisplayComment: false,
    Comment: "Click to edit",
    CommentedBy: "User Name"
  }
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var p,l,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isEditAble: false,
    CommentDisable: true,
    UseChipToDisplayComment: true,
    Comment: "Status",
    CommentedBy: "User Name"
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const K=["Default","Editable","Status"];export{e as Default,t as Editable,o as Status,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Comment.stories-56680cdb.js.map
