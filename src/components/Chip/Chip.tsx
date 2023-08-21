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
     * Decidec whether the chip is bordered or contained
     */
    variant: any;
  }

const test = () => {
 
    const red = '#c1090b';
    const redBg = '#fde9e7';
    const blue = '#5495e0';
    const blueBg ='#e9f4fe';
    const green = '#2c6e55';
    const greenBg =  '#c8f6d9' ;
    const yellow = '#e8ae00';
    const yellowBg = '#faecc3';
    const orange = '#ffa300';
    const orangeBg = '#ffeac4' ;
    const gray = '#807c7c';
    const grayBg = '#e3e3e3' ;
    const purple = '#9c79ab';
    const purpleBg =  '#e4d5ea';

    return {
        'root': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 0,
            flexShrink: 0,
            borderRadius: 15,
            minWidth: 20,
            flexWrap: 'wrap',
            whiteSpace: 'nowrap',
            '& .MuiChip-label': {
                overflow: 'inherit'
            }
        },
        'error': {
            color: `${red} !important`
        },
        'error-default': {
            background: `${redBg} !important`
        },
        'error-outlined': {
            borderColor: `${red} !important`,
            background: 'none !important'
        },
        'primary': {
            color: `${blue} !important`
        },
        'primary-default': {
            background: `${blueBg} !important`
        },
        'primary-outlined': {
            borderColor: `${blue} !important`,
            background: 'none !important'
        },
        'success': {
            color: `${green} !important`
        },
        'success-default': {
            background: `${greenBg} !important`
        },
        'success-outlined': {
            borderColor: `${green} !important`,
            background: 'none !important'
        },
        'yellow': {
            color: `${yellow} !important`
        },
        'yellow-default': {
            background: `${yellowBg} !important`
        },
        'yellow-outlined': {
            borderColor: `${yellow} !important`,
            background: 'none !important'
        },
        'warning': {
            color: `${orange} !important`
        },
        'warning-default': {
            background: `${orangeBg} !important`
        },
        'warning-outlined': {
            borderColor: `${orange} !important`,
            background: 'none !important'
        },
        'gray': {
            color: `${gray} !important`
        },
        'gray-default': {
            background: `${grayBg}e3!important`
        },
        'gray-outlined': {
            borderColor: `${gray} !important`,
            background: 'none !important'
        },
        'purple': {
            color: `${purple} !important`
        },
        'purple-default': {
            background: `${purpleBg} !important`
        },
        'purple-outlined': {
            borderColor: `${purple} !important`,
            background: 'none !important'
        }
    };
};

function ChipComponent({ variant = 'default', color = 'primary', label, ...rest } : ChipProps)  {

    return (
        <Chip
            color={color}
            variant={variant}
            label={label}
        ></Chip>
    );
}


export default ChipComponent;