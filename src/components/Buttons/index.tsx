import { Button as MUIButton, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ButtonGroup from "./ButtonGroup";
import DeleteIcon from '@mui/icons-material/Delete';

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
  icon?: boolean;
  /**
   * Button type
   */
  type: "default" | "add" | "group";
  /**
   * Optional click handler
   */
  iconType?: "delete" | "copy";
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "medium",
  color,
  disabled,
  icon = false,
  label,
  variant,
  type,
  iconType = 'delete',
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
            startIcon={icon && <DeleteIcon />}
            disableElevation
          >
            {label}
          </MUIButton>
        );
        break;
      case "add":
        return (
          <Fab aria-label="Add" variant="extended" color={color}>
            <AddIcon /> {label}
          </Fab>
        );
      case "group":
        return <ButtonGroup />;
      default:
        break;
    }
  };

  return <>{renderButton(type)}</>;
};
