import {
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
  Autocomplete,
  Grid,
} from "@mui/material";
import "../styles.css";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

const FormSection = ({
  formTitle = 'Form Section',
  formData = [
    {
      title: "Description",
      type: "textfield",
      fullWidth: true,
      multiline: true,
      line: 4,
    },
    {
      title: "Options",
      type: "autocomplete",
      fullWidth: false,
      multiline: false,
      line: 2,
    },
    {
      title: "Date",
      type: "datepicker",
      fullWidth: false,
      multiline: false,
      line: 3,
    },
    {
      title: "Amount",
      type: "currency",
      fullWidth: false,
      multiline: false,
      line: 1,
    },
  ],
}) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17"));

  const renderFormFields = (field) => {
    switch (field.type) {
      case "textfield":
        return (
          <Grid item sm={12} md={field.fullWidth ? 12 : 6}>
            <TextField
              label={field.title}
              multiline={field.multiline}
              style={{ width: "100%" }}
            />
          </Grid>
        );
      case "autocomplete":
        return (
          <Grid item sm={12} md={field.fullWidth ? 12 : 6}>
            <Autocomplete
              disablePortal
              style={{ width: "100%" }}
              options={[1, 2, 3]}
              renderInput={(params) => (
                <TextField {...params} label={field.title} />
              )}
            />
          </Grid>
        );
      case "datepicker":
        return (
          <Grid item sm={12} md={field.fullWidth ? 12 : 6}>
            <Box style={{ width: "100%" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateField
                  label="Controlled field"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  fullWidth
                />
              </LocalizationProvider>
            </Box>
          </Grid>
        );
      default:
        break;
    }
  };

  return (
    <Grid>
      <Card>
        <CardHeader title={'<' + formTitle} />
        <CardContent>
          <Grid container spacing={2}>
            {formData.map((item) => renderFormFields(item))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FormSection;
