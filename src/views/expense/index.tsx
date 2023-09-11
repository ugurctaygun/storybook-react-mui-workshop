/* tslint:disable */
import { Grid, Card } from "@mui/material";
import FormSection from "../../components/FormSection";
import Page from "../../components/Layout/Page";
import Stepper from "../../components/Stepper";
import Comments from "../../components/Comments";
import InfoCard from "../../components/InfoCard";
import Items from "../../components/Items";

const Expense = () => {
  return (
    <Page title="Intra City Expense Request">
      <Grid container spacing={4} justifyContent={"center"}>
        <Grid
          item
          md={4}
          style={{ display: "flex", flexDirection: "column", gap: 25 }}
        >
          <InfoCard />
          <Stepper />
          <Comments />
        </Grid>
        <Grid
          item
          md={8}
          style={{ display: "flex", flexDirection: "column", gap: 25 }}
        >
          <FormSection />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Expense;
