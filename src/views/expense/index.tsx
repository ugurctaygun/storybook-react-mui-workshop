/* tslint:disable */
import { Grid, Card } from "@mui/material";
import FormSection from "../../components/FormSection";
import Page from "../../components/Layout/Page";
import Stepper from "../../components/Stepper";
import Comments from "../../components/Comments";

const Expense = () => {
  return (
    <Page title="Intra City Expense Request">
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid item md={4}>
          <FormSection />
        </Grid>
        <Grid
          item
          md={8}
          style={{ display: "flex", flexDirection: "column", gap: 25 }}
        >
          <FormSection />
          <Stepper />
          <Comments />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Expense;
