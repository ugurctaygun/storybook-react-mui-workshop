import { makeStyles } from '@material-ui/core/styles';
import { red , blue} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        zIndex: 100,
        bottom: theme.spacing(3),
        right: theme.spacing(3),
        boxShadow: '0 0 10px #797777'
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    },
    stickyNavigation: {
        position: 'sticky',
        top: theme.constants.topBarHeight,
        zIndex: 100
    },
    stickyContainer: {
        position: 'sticky',
        top: theme.constants.topBarHeight + 56,
        alignSelf: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            position: 'static'
        }
    },
    header: {
        margin: `${theme.spacing(0)}px auto`,
        padding: theme.spacing(2, 1),
        display: 'flex',
        borderRadius: 0,
        // background: '#eee',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },

    footer: {
        margin: `${theme.spacing(0)}px auto`,
        padding: theme.spacing(2, 1),
        display: 'flex',
        borderRadius: 0
    },

    helper: {
        'reactour-accent': '#C9300F',
        'line-height': 1.3,
        color: '#2d2323',
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontStyle: 'bold'
    },

    deleteButton: {
        borderRadius: '10px',
        color: red[500],
        borderColor: theme.palette.type === 'light' ? '#eaeaed' : '#616161'
    },

    copyButton: {
        borderRadius: '10px',
        color: blue[500],
        borderColor: theme.palette.type === 'light' ? '#eaeaed' : '#616161'
    },

    paper: {
        margin: `${theme.spacing(0)}px auto`,
        padding: theme.spacing(2, 1),
        borderRadius: '0',
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            cursor: 'pointer'
        }
    },
    editPaper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2, 0),
        borderRadius: '0',
        '&:hover': { 
            backgroundColor: theme.palette.action.hover,
            cursor: 'pointer'
        }
    },
    inputContainer: {
        width: '100%',
        margin: '8px',
        '& input:-webkit-autofill': {
            borderRadius: '0',
            '-webkit-box-shadow': theme.palette.type === 'light' ? '0 0 0 50px white inset' : '0 0 0 40px #424242 inset',
            '-webkit-text-fill-color': theme.palette.type === 'light' ? '#333':'#fff'
        },

        '& input:-webkit-autofill:focus': {
            borderRadius: '0',
            '-webkit-box-shadow': theme.palette.type === 'light' ? '0 0 0 50px white inset' : '0 0 0 40px #424242 inset',
            '-webkit-text-fill-color': theme.palette.type === 'light' ? '#333':'#fff' 
        }
    },
    numberInput: {
        "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            display: "none"
        },
    },
    formattedNumberInput: {
        width: '100%',
        margin: '8px',
      '& input' : {
          textAlign: 'left'
      },
      '& .MuiInputAdornment-positionStart': {
          display: 'none'
      }
    },
    whiteSpace: {
        whiteSpace:'nowrap'
    },
    cropText: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    overflowContainer: {
        [theme.breakpoints.up('sm')]: {
            height:'auto',
            overflow: 'hidden'
        }
    }
}));