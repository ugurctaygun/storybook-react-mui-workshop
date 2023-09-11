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
      sequence: 4,
    },
    {
      title: "Options",
      type: "autocomplete",
      fullWidth: false,
      multiline: false,
      sequence: 2,
    },
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
              rows={field.multiline ? 3 : 1}
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
        <CardHeader title={formTitle} />
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
