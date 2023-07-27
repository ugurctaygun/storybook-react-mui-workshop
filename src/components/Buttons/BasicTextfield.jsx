import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

const BasicTextfield = (
  primary = false,
  label = "Basic Text Field",
  handleChange = () => {},
  disabled = false,
  ...props
) => {
  return (
    <TextField
      id="outlined-basic"
      disabled={disabled}
      variant="outlined"
      onChange={handleChange}
      {...props}
    />
  );
};

BasicTextfield.propTypes = {
  label : PropTypes.string,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  primary: PropTypes.bool
}

export default BasicTextfield;
