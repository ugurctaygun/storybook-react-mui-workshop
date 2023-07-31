
import{ TextField as TextFieldCustom , InputAdornment} from "@material-ui/core";
import {useState} from 'react'

interface TextfieldProps {
  /**
   * Label value of the input
   */
  label: string;
  /**
   * Value of theinput
   */
  value: string;
  /**
   * Disable input interactivity
   */
  disabled: boolean;
  /**
   * Changes the width of the input to match the container element
   */
  fullWidth?: boolean;
  /**
   * Adds text value as an end adornment depending on the input value from a service
   */
  textAdornment?: string;
  /**
   * Add props to the input field , used for max lenght limitation
   */
  inputProps? : object;
  /**
   * Triggers when user changes input
   */
  onChange : () => void;
}

/**
 * Primary UI component for user interaction
 */
const TextField = ({
  label = "Label",
  disabled = false,
  value = "",
  fullWidth = false,
  textAdornment,
  inputProps,
  onChange,
  ...props
}: TextfieldProps) => {
    const [inputValue,setInputValue] = useState(value)
  return (
    <TextFieldCustom
      label={label}
      disabled={disabled}
      variant="outlined"
      value={inputValue}
      onChange={(event) =>setInputValue(event?.target.value)}
      fullWidth={fullWidth}
      inputProps = {inputProps}
      InputProps={{
        autoComplete: 'on',
        endAdornment: (
            <InputAdornment position="end">
              <p>{textAdornment}</p>  
            </InputAdornment>
        )
    }}
    />
  );
};

export default TextField;
