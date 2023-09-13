import { TextField } from "@mui/material";
import { useState } from "react";

const EmailInput = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (data) => {
    setValue(data);
    setIsValid(regex.test(data));
  };

  return (
    <TextField
      label="E-mail Input"
      value={value}
      type="email"
      error={!isValid}
      helperText={!isValid && "Please enter email format"}
      onChange={(event) => handleChange(event?.target.value)}
    />
  );
};

export default EmailInput;
