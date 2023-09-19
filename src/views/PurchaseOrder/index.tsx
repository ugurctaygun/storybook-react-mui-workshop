/* tslint:disable */
import { Grid, Card } from "@mui/material";
import FormSection from "../../components/FormSection";
import Page from "../../components/Layout/Page";
import Stepper from "../../components/Stepper";
import Comments from "../../components/Comments";
import InfoCard from "../../components/InfoCard";
import Pool from "../../components/Pool";
import TagCard from "../../components/TagCard";


const PurchaseOrder = ({ config = [] }) => {

  const renderComponents = (component : any) => {
    switch (component.type) {
      case "FormSection":
        return <FormSection formTitle={component.title} formData={component.formConfig} />;
      case "Stepper":
        return <Stepper stepStyle="Button" />;
      case "InfoCard":
        return <InfoCard />;
      case "Comments":
        return <Comments submitByButton={false} characterLimit={false} />;
      case "Pool":
        return <Pool title='Approver Pool' options={[
          { name: "Manager Approver Pool", value: "Manager Name" },
          { name: "Accounting Approver Pool", value: "Accountant Name" },
        ]} />
      case "TagCard":
          return <TagCard />
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
    <Page title="Purchase Order Request">
      <Grid container spacing={4} justifyContent={"center"}>
        {renderPage(config)}
      </Grid>
    </Page>
  );
};

export default PurchaseOrder;
