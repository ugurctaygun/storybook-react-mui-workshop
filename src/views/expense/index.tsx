/* tslint:disable */
import { Grid, Card } from "@mui/material";
import FormSection from "../../components/FormSection";
import Page from "../../components/Layout/Page";
import Stepper from "../../components/Stepper";
import Comments from "../../components/Comments";
import InfoCard from "../../components/InfoCard";
import Items from "../../components/Items";

const pageConfig = [
  [
    {
      title: "Advance Form",
      type: "FormSection",
      formConfig: [
        {
          title: "Options2",
          type: "autocomplete",
          fullWidth: false,
          multiline: false,
          sequence: 2,
        },
        {
          title: "Date",
          type: "datepicker",
          fullWidth: false,
          multiline: false,
          sequence: 3,
        },
        {
          title: "Amount",
          type: "textfield",
          fullWidth: false,
          multiline: false,
          sequence: 1,
        },
      ],
    },
    {
      title: "Stepper",
      type: "Stepper",
    },
    { title: "Comments", type: "Comments" },
    { title: "Pool", type: "Pool" },
  ],
  [
    {
      title: "Advance Form",
      type: "FormSection",
      formConfig: [
        {
          title: "Options2",
          type: "autocomplete",
          fullWidth: false,
          multiline: false,
          sequence: 2,
        },
        {
          title: "Date",
          type: "datepicker",
          fullWidth: false,
          multiline: false,
          sequence: 3,
        },
        {
          title: "Amount",
          type: "textfield",
          fullWidth: false,
          multiline: false,
          sequence: 1,
        },
      ],
    },
  ],
];

const Expense = ({config = pageConfig}) => {
  const ComponentDict = {
    FormSection: <FormSection />,
    Stepper: <Stepper stepStyle="Button" />,
    InfoCard: <InfoCard />,
    Comments: <Comments submitByButton={false} characterLimit={false} />,
  };

  const renderPage = (data: any) => {
    console.log(data)
    return data.map((item: any, index: number) => (
      <Grid
        item
        md={index > 0 ? 8 : 4}
        style={{ display: "flex", flexDirection: "column", gap: 25 }}
        key={index}
      >
        {item.map((component: string, componentIndex: number) => (
          <div key={componentIndex}>
            {ComponentDict[component.type]}
          </div>
        ))}
      </Grid>
    ));
  };

  return (
    /* tslint:disable */
    <Page title="Intra City Expense Request">
      <Grid container spacing={4} justifyContent={"center"}>
        {renderPage(config)}
      </Grid>
    </Page>
  );
};

export default Expense;
