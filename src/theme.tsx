import {
  createTheme as muiCreateTheme,
  responsiveFontSizes,
} from "@mui/material";

import { colors } from "@mui/material";

const typography = {
  h1: {
    fontWeight: 500,
    fontSize: "35px",
    letterSpacing: "-0.24px",
  },
  h2: {
    fontWeight: 500,
    fontSize: "29px",
    letterSpacing: "-0.24px",
  },
  h3: {
    fontWeight: 500,
    fontSize: "24px",
    letterSpacing: "-0.06px",
  },
  h4: {
    fontWeight: 500,
    fontSize: "20px",
    letterSpacing: "-0.06px",
  },
  h5: {
    fontWeight: 500,
    fontSize: "16px",
    letterSpacing: "-0.05px",
  },
  h6: {
    fontWeight: 600,
    fontSize: "14px",
    letterSpacing: "-0.05px",
  },
  subtitle1: {
    fontSize: "16px",
    letterSpacing: "-0.05px",
  },
  subtitle2: {
    // color: palette.text.secondary,
    fontWeight: 400,
    fontSize: "14px",
    letterSpacing: "-0.05px",
  },
  button: {
    fontSize: "14px",
  },
};

const palette = {
  mode: "light",
  primary: {
    contrastText: "#FFFFFF",
    dark: colors.indigo[900],
    main: "#0091EA",
    light: colors.indigo[100],
    gradient: "linear-gradient(31deg, #00a6b5 -13%, #0088bd 43%, #0076c2 87%)",
  },
  secondary: {
    contrastText: "#FFFFFF",
    dark: colors.grey[900],
    main: colors.grey[500],
    light: colors.grey.A400,
  },
  success: {
    contrastText: "#FFFFFF",
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  error: {
    contrastText: "#FFFFFF",
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  warning: {
    contrastText: "#FFFFFF",
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  text: {},
  background: {
    dark: "#303030",
    light: "#FAFAFA",
  },
  common: {},
  action: {},
};

export const createTheme = ({ darkMode }: { darkMode: boolean }) =>
  responsiveFontSizes(
    muiCreateTheme({
      typography: typography,
      palette: palette,
      components: {
        MuiButton: {
          defaultProps: { variant: "contained" },
        },
        MuiTextField: {
          defaultProps: { variant: "outlined" },
        },
      },
    })
  );
