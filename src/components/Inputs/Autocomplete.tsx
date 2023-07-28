import { Autocomplete as CustomAutoComplete, TextField } from "@mui/material";
import { useState } from "react";

interface AutocompleteProps {
  /**
   * Label value of the input
   */
  label: string;
  /**
   * Disable input interactivity
   */
  disabled: boolean;
  /**
   * Changes the width of the input to match the container element
   */
  fullWidth?: boolean;
  /**
   * Triggers when user changes input
   */
  onChange: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Autocomplete = ({
  label = "Label",
  disabled = false,
  fullWidth = false,
  onChange,
}: AutocompleteProps) => {
  
  const customOpt = [
    { name: "001-Company Name", value: 1994 },
    { name: "002-Company Name", value: 1972 },
    { name: "003-Company Name", value: 1974 },
    { name: "004-Company Name", value: 2008 },
    { name: "005-Company Name", value: 1957 },
    { name: "006-Company Name", value: 1993 },
    { name: "007-Company Name", value: 1994 },
  ];

  const [inputValue, setInputValue] = useState(customOpt[0]);
  return (
    <CustomAutoComplete
      disabled={disabled}
      onChange={(event, newValue: any) => {
        setInputValue(newValue);
      }}
      
      value={inputValue}
      options={customOpt}
      getOptionLabel={(options) => options?.name || ""}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          style={{minWidth : '350px'}}
          id="recordCurrency"
          variant="outlined"
          fullWidth={fullWidth}
          error={false}
        />
      )}
    />
  );
};

export default Autocomplete;
