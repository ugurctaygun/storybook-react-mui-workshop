import { Button as MUIButton, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ButtonGroup from "./ButtonGroup";

interface ButtonProps {
  /**
   * What background color to use
   */
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  /**
   * Button variant
   */
  variant?: "contained" | "outlined" | "text";
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Disable button
   */
  disabled?: boolean;
  /**
   * Button icon
   */
  icon?: string;
  /**
   * Button type
   */
  type: "default" | "add" | "group";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "medium",
  color,
  disabled,
  icon,
  label,
  variant,
  type,
  ...props
}: ButtonProps) => {
  const renderButton = (type: string) => {
    switch (type) {
      case "default":
        return (
          <MUIButton
            variant={variant}
            disabled={disabled}
            color={color}
            size={size}
            startIcon={icon}
            disableElevation
          >
            {label}
          </MUIButton>
        );
        break;
      case "add":
        return (
          <Fab aria-label="Add" variant="extended" color="primary">
            <AddIcon /> ADD NEW
          </Fab>
        );
        break;
      case "group":
        return <ButtonGroup />;
        break;
      default:
        break;
    }
  };

  return <>{renderButton(type)}</>;
};
