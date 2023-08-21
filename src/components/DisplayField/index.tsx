import { Typography , Box } from "@mui/material";

interface DisplayFieldProps {
    /**
     * Label value of the field
     */
    label: string;
    /**
     * Text value of the field
     */
    value: string;
    /**
     * Default padding value between label and value
     */
    gutterBottom?: boolean;
     /**
     * Default padding value of the field
     */
     fieldPadding?: number;
  }


const DisplayField = ({label , value , gutterBottom = false , fieldPadding = 2} : DisplayFieldProps) => {
    return (
        <Box sx={{display: 'flex' , flexDirection: 'column' , alignContent: 'center' , p : fieldPadding}} >
            <Typography variant="caption" gutterBottom={gutterBottom}>
                {label}
            </Typography>
            <Typography variant="h6">
                {value}
            </Typography>
        </Box>
    )
}

export default DisplayField;