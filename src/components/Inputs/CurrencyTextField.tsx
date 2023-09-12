import * as React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import TextField from '@mui/material/TextField';

const NumericFormatCustom = React.forwardRef<NumericFormatProps>(
    function NumericFormatCustom(props, ref) {
      const { onChange, ...other } = props;
  
      return (
        <NumericFormat
          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          valueIsNumericString
          prefix="$"
        />
      );
    },
  );

  interface State {
    textmask: string;
    numberformat: string;
  }
  
 const CurrencyTextField = () => {
    const [values, setValues] = React.useState<State>({
      textmask: '(100) 000-0000',
      numberformat: '1320',
    });
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
  
    return (
        <TextField
          label="Currency Text Field"
          variant='outlined'
          value={values.numberformat}
          onChange={handleChange}
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            inputComponent: NumericFormatCustom as any,
          }}
        />
    );
  }

  export default CurrencyTextField