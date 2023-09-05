import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Autocomplete,
} from "@mui/material";
import "../styles.css";

const FormSection = () => {
  const formData = [
    { title: "Description", type: "textfield" },
    { title: "Options", type: "autoComplete" },
  ];

  const renderFormFields = (field) => {
    switch (field.type) {
      case "textfield":
        return <TextField label={field.title} />;
      case "autoComplete":
        return (
          <Autocomplete
            disablePortal
            options={[1, 2, 3]}
            renderInput={(params) => (
              <TextField {...params} label={field.title} />
            )}
          />
        );
      default:
        break;
    }
  };

  return (
    <Card style={{ width: "900px" }}>
      <CardHeader title={"Form Section"} />
      <CardContent>
        <Box className="formSection">
          {formData.map((item) => renderFormFields(item))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default FormSection;
