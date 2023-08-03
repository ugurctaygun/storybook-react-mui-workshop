import {Button as MUIButton} from '@mui/material';

interface ButtonProps {
  /**
   * What background color to use
   */
  color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
   /**
   * Button variant
   */
   variant?: "contained" | "outlined" | "text" ;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
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
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'medium',
  color,
  disabled,
  icon,
  label,
  variant,
  ...props
}: ButtonProps) => {
  return (<>
    <MUIButton variant={variant} disabled={disabled} color={color} size={size} startIcon={icon} disableElevation>
        {label}
    </MUIButton>
    {/* <Fab aria-label="Add" variant="extended" className={classes.fab} color="primary" onClick={handleFabClick}>
<Add /> {t('purchase-entry')}
</Fab> */}
  </>
  );
};
