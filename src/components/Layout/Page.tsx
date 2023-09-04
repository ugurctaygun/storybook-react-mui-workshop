import React, { FC, ReactComponentElement, useEffect } from "react";
import { Typography, Container, Box } from "@mui/material";
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
  disableBreadcrumbs?: Boolean;
  /**
   * Disable input interactivity
   */
  disableHeader?: Boolean;
  loading?: Boolean;
  children:any;
}

const Page = ({
  title = "Page Title",
  loading = false,
  disableHeader = false,
  disableBreadcrumbs = false,
  children = null,
  ...rest
}): PageProps => {

  console.log(rest)

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
            <Box mt={2} mb={5} pb={3} style={{borderBottom: '1px solid #e7e7e7'}}>
              <Typography gutterBottom variant="h4">
                {title}
              </Typography>
            </Box>
          )}
          <Box mb={5}>{children || "Page Content"}</Box>
        </Container>
      )}
    </>
  );
};

export default Page;
