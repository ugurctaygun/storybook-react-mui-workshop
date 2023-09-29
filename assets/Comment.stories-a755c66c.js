import{j as e}from"./jsx-runtime-f6d73c06.js";import{C as m}from"./index-8a658aca.js";import{G as i}from"./Grid-017ed63d.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-798a5f06.js";import"./Chip-b6c17e7b.js";import"./useThemeProps-94f52e98.js";import"./extends-c60d6d51.js";import"./styled-9a968d51.js";import"./createSvgIcon-6a267752.js";import"./TransitionGroupContext-03ffa606.js";import"./ButtonBase-4efedc8f.js";import"./emotion-react.browser.esm-efcf029b.js";import"./assertThisInitialized-081f9914.js";import"./inheritsLoose-c82a83d4.js";import"./Edit-87a978a9.js";import"./createSvgIcon-2399051f.js";import"./useId-add3311b.js";import"./debounce-517eeb3c.js";import"./isMuiElement-783834c2.js";import"./ownerWindow-48013543.js";import"./useControlled-b748c5f1.js";import"./Paper-f1635e6a.js";import"./Box-fe6fd115.js";import"./extendSxProp-9de56447.js";import"./Typography-fdbae6ba.js";import"./TextField-a15606ad.js";import"./Menu-325419c5.js";import"./react-is.production.min-a192e302.js";import"./useTheme-f9895377.js";import"./Modal-9fb8aeaa.js";import"./Portal-e2d38721.js";import"./index-8bf7f4ad.js";import"./useSlotProps-eab205dd.js";import"./MenuList-65bf41aa.js";import"./GlobalStyles-88feff6a.js";import"./InputAdornment-3db427cd.js";const f=`import { useEffect, useState, useRef } from "react";
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
`,te={component:m,title:"Components/Data Display/Comment",parameters:{layout:"centered",docs:{source:{code:f}}},tags:["autodocs"]},o={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!1,Comment:"Comment Text",CommentedBy:"User Name"},render:t=>e.jsx(i,{style:{minWidth:550},children:e.jsx(m,{...t})})},r={args:{isEditAble:!0,CommentDisable:!1,UseChipToDisplayComment:!1,Comment:"Click to edit",CommentedBy:"User Name"},render:t=>e.jsx(i,{style:{minWidth:550},children:e.jsx(m,{...t})})},n={args:{isEditAble:!1,CommentDisable:!0,UseChipToDisplayComment:!0,Comment:"Status",CommentedBy:"User Name"},render:t=>e.jsx(i,{style:{minWidth:550},children:e.jsx(m,{...t})})};var s,a,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    isEditAble: false,
    CommentDisable: true,
    UseChipToDisplayComment: false,
    Comment: "Comment Text",
    CommentedBy: "User Name"
  },
  render: args => <Grid style={{
    minWidth: 550
  }}>\r
     <Comment {...args} />\r
    </Grid>
}`,...(p=(a=o.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var d,l,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    isEditAble: true,
    CommentDisable: false,
    UseChipToDisplayComment: false,
    Comment: "Click to edit",
    CommentedBy: "User Name"
  },
  render: args => <Grid style={{
    minWidth: 550
  }}>\r
     <Comment {...args} />\r
    </Grid>
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var C,u,y;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isEditAble: false,
    CommentDisable: true,
    UseChipToDisplayComment: true,
    Comment: "Status",
    CommentedBy: "User Name"
  },
  render: args => <Grid style={{
    minWidth: 550
  }}>\r
     <Comment {...args} />\r
    </Grid>
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const oe=["Default","Editable","Status"];export{o as Default,r as Editable,n as Status,oe as __namedExportsOrder,te as default};
//# sourceMappingURL=Comment.stories-a755c66c.js.map
