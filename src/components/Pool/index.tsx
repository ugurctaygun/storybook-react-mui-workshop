import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";

const Pool = ({
  title = "Pool",
  options = [
    { name: "Manager Approver Pool", value: "Manager Name" },
    { name: "Accounting Approver Pool", value: "Accountant Name" },
  ],
}) => {
  return (
    <Grid container>
      <Card>
        <CardHeader title={title} />
        <CardContent>
            {options.map((item, index) => (
              <TextField
                label={item.name}
                key={index}
                value={item.value}
                disabled
                fullWidth
                style={{marginBottom: 15}}
              />
            ))}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Pool;
