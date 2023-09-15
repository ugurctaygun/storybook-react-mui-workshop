import * as React from "react";
import { NumericFormat } from "react-number-format";
import TextField from "@mui/material/TextField";

const CurrencyTextField = () => {
  const [value, setValue] = React.useState("");

  return (
    <NumericFormat
      value={value}
      customInput={TextField}
      label="Amount"
      prefix={"$"}
      thousandsGroupStyle="thousand"
      thousandSeparator=","
      decimalScale={3}
    />
  );
};

export default CurrencyTextField;
