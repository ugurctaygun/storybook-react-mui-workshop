
import type { Meta, StoryObj } from '@storybook/react';

import TextField from '../components/Inputs/TextField';
import CurrencyTextField from '../components/Inputs/CurrencyTextField';

const meta = {
  component: TextField,
  title: "Components/Inputs/Text Field",
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: { maxLength: 50 },
  },
};

export const Currency : Story = {
  args: {
    label: "Default",
    disabled: false,
    value: '',
    fullWidth: false,
    inputProps: { maxLength: 50 },
  },
  parameters: {
    docs: {
      source: {
        code: `import * as React from 'react';
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

  export default CurrencyTextField`,
      },
    },
  },
  
  render: (args) => <CurrencyTextField {...args}/>
};

export const MultiValue : Story = {
  args: {
    label: "First Value",
    disabled: false,
    value: '',
    textAdornment: 'Second Value',
  },
};
