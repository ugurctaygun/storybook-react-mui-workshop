import Chip from "@mui/material/Chip";

interface ChipProps {
    /**
     * Label value of the chip
     */
    label: string;
    /**
     * Background or border color of the chip
     */
    color: "primary" | "secondary" | "error" | "info" | "success" | "warning";
    /**
     * Decides whether the chip is bordered or contained
     */
    variant: any;
     /**
     * Text display style
     */
    textTransform? : "uppercase" | "initial" | "capitalize";
    onClick?: () => any;
    style?: Object;
  }


function ChipComponent({ variant = 'default', color = 'primary', label, textTransform = 'initial' ,...props } : ChipProps)  {

    const {onClick , style} = props;

    return (
        <Chip
            color={color}
            variant={variant}
            label={label}
            style={{textTransform: textTransform , ...style}}
            onClick={onClick}
        ></Chip>
    );
}


export default ChipComponent;