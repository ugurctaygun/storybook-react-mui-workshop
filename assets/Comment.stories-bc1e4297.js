import{C as c}from"./index-9e060e24.js";import"./jsx-runtime-f6d73c06.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-cfc6c778.js";import"./Chip-6aff1848.js";import"./useThemeProps-08dea6dc.js";import"./extends-c60d6d51.js";import"./styled-4d22d7a6.js";import"./createSvgIcon-dc53fbb0.js";import"./TransitionGroupContext-03ffa606.js";import"./ButtonBase-df602491.js";import"./emotion-react.browser.esm-137a7574.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./Edit-7b42dc59.js";import"./createSvgIcon-16139344.js";import"./useId-add3311b.js";import"./debounce-517eeb3c.js";import"./isMuiElement-783834c2.js";import"./ownerWindow-48013543.js";import"./useControlled-b748c5f1.js";import"./Grid-c465b22d.js";import"./useTheme-7aaf0f9b.js";import"./extendSxProp-6a5b26b1.js";import"./Paper-1303deca.js";import"./Box-b36ccd36.js";import"./Typography-b5179712.js";import"./TextField-7dc1ffe8.js";import"./Menu-29a0c345.js";import"./react-is.production.min-a192e302.js";import"./Modal-14bd54e8.js";import"./Portal-beb556f1.js";import"./index-8bf7f4ad.js";import"./useSlotProps-8ce23cf8.js";import"./MenuList-893237d2.js";import"./GlobalStyles-1c9c0a3f.js";import"./InputAdornment-7483ed21.js";const C=`import { useEffect, useState, useRef } from "react";
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
`,Z={component:c,title:"Components/Data Display/Comment",parameters:{layout:"centered",docs:{source:{code:C}}},tags:["autodocs"]},e={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!1,Comment:"Comment Text",CommentedBy:"User Name"}},t={args:{isEditAble:!0,CommentDisable:!1,UseChipToDisplayComment:!1,Comment:"Click to edit",CommentedBy:"User Name"}},o={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!0,Comment:"Status",CommentedBy:"User Name"}};var m,n,r;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const $=["Default","Editable","Status"];export{e as Default,t as Editable,o as Status,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Comment.stories-bc1e4297.js.map
