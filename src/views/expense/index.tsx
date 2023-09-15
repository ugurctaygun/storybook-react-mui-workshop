/* tslint:disable */
import { Grid, Card } from "@mui/material";
import FormSection from "../../components/FormSection";
import Page from "../../components/Layout/Page";
import Stepper from "../../components/Stepper";
import Comments from "../../components/Comments";
import InfoCard from "../../components/InfoCard";
import Items from "../../components/Items";


const Expense = ({ config = [] }) => {
  const ComponentDict = {
    FormSection: <FormSection formTitle={"Dynamic Title Here"} />,
    Stepper: <Stepper stepStyle="Button" />,
    InfoCard: <InfoCard />,
    Comments: <Comments submitByButton={false} characterLimit={false} />,
  };

  const renderComponents = (component) => {
    switch (component.type) {
      case "FormSection":
        return <FormSection formTitle={component.title} formData={component.formConfig} />;
      case "Stepper":
        return <Stepper stepStyle="Button" />;
      case "InfoCard":
        return <InfoCard />;
      case "Comments":
        return <Comments submitByButton={false} characterLimit={false} />;

      default:
        break;
    }
  };

  const renderPage = (data: any) => {
    return data.map((item: any, index: number) => (
      <Grid
        item
        md={index > 0 ? 8 : 4}
        style={{ display: "flex", flexDirection: "column", gap: 25 }}
        key={index}
      >
        {item.map((component: string, componentIndex: number) => (
          <div key={componentIndex}>{renderComponents(component)}</div>
        ))}
      </Grid>
    ));
  };

  return (
    /* tslint:disable */
    <Page title="Expense Request">
      <Grid container spacing={4} justifyContent={"center"}>
        {renderPage(config)}
      </Grid>
    </Page>
  );
};

export default Expense;
