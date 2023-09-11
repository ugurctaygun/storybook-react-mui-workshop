import{C as c}from"./index-d5bed554.js";import"./useThemeProps-3da43970.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-7980430c.js";import"./Chip-485a8703.js";import"./styled-a4d559dd.js";import"./createSvgIcon-f3b6fc62.js";import"./TransitionGroupContext-5ba66160.js";import"./ButtonBase-df20e9df.js";import"./emotion-react.browser.esm-3e506388.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./Edit-80b74669.js";import"./createSvgIcon-4184d37c.js";import"./useId-a4495471.js";import"./debounce-517eeb3c.js";import"./isMuiElement-402c1219.js";import"./ownerWindow-48013543.js";import"./useControlled-3e5b2082.js";import"./Grid-1e5e4966.js";import"./useTheme-81e70d49.js";import"./extendSxProp-52ff1403.js";import"./Paper-a4bd20c8.js";import"./Box-c864e0b4.js";import"./Typography-f6b7e65d.js";import"./TextField-a28e90ac.js";import"./Menu-62d38616.js";import"./react-is.production.min-a192e302.js";import"./Modal-f1e94586.js";import"./Portal-713d3f99.js";import"./index-d3ea75b5.js";import"./useSlotProps-42155a80.js";import"./MenuList-b91f49cd.js";import"./GlobalStyles-88f8b3d8.js";import"./InputAdornment-4f35fed6.js";const C=`import { useEffect, useState, useRef } from "react";
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
`,Y={component:c,title:"Components/Data Display/Comment",parameters:{layout:"centered",docs:{source:{code:C}}},tags:["autodocs"]},e={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!1,Comment:"Comment Text",CommentedBy:"User Name"}},t={args:{isEditAble:!0,CommentDisable:!1,UseChipToDisplayComment:!1,Comment:"Click to edit",CommentedBy:"User Name"}},o={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!0,Comment:"Status",CommentedBy:"User Name"}};var m,n,r;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const Z=["Default","Editable","Status"];export{e as Default,t as Editable,o as Status,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=Comment.stories-3b689a70.js.map
