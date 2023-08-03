import React, { FC, ReactComponentElement, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink, useParams } from "react-router-dom";
import { Breadcrumbs, Link, Typography, Container, Box } from "@mui/material";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { makeStyles } from "@material-ui/styles";
import BigBang from "../Animations/BigBang";
import BreadCrumbs from "../BreadCrumbs";

interface PageProps {
  /**
   * Label value of the input
   */
  title: string;
  /**
   * Value of theinput
   */
  disableBreadcrumbs: Boolean;
  /**
   * Disable input interactivity
   */
  disableHeader: Boolean;
  loading: Boolean;
  children: FC | null;
}

const Page = ({
  title = "Page Title",
  loading = false,
  disableHeader = false,
  disableBreadcrumbs = false,
  children = null,
}): PageProps => {

  return (
    <>
      <title>{title}</title>
      {loading ? (
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BigBang />
        </Box>
      ) : (
        <Container maxWidth={false}>
          <Box mt={2} mb={4} height={!disableBreadcrumbs ? 21 : "auto"}>
            {!disableBreadcrumbs && <BreadCrumbs />}
          </Box>
          {!disableHeader && (
            <Box mt={2} mb={2}>
              <Typography gutterBottom variant="h4">
                Title
              </Typography>
            </Box>
          )}
          <Box mb={5}>
            <hr />
          </Box>
          <Box mb={5}>{children || "Page Content"}</Box>
        </Container>
      )}
    </>
  );
};

export default Page;
