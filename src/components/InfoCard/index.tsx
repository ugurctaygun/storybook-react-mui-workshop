import { Card, CardContent,  Grid} from "@mui/material";
import DisplayField from "../DisplayField";

const InfoCard = () => {
  return (
    <Grid>
      <Card>
        <CardContent
          style={{ display: "grid", gridTemplateColumns: "50% 50%" }}
        >
          <DisplayField label="Requestor" value="User Name" />
          <DisplayField label="Date" value="12.12.2022" />
          <DisplayField label="Total Amount" value="TL 300" />
          <DisplayField label="Status" value="Waiting For Approval" />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default InfoCard;
