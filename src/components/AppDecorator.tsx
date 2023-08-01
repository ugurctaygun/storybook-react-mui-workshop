import { ReactNode, useMemo } from "react";
import { useLocation } from 'react-router';
import {
  CssBaseline,
  ThemeProvider,
  ThemeOptions,
  createTheme as muiCreateTheme,
  Theme,
} from "@mui/material";

import { BrowserRouter } from "react-router-dom";

export interface AppDecoratorProps {
  children: ReactNode;
  createTheme: ({ darkMode }: { darkMode: boolean }) => Theme;
  selectedTheme : string | any;
}

export default function AppDecorator({
  children,
  createTheme,
  selectedTheme
}: AppDecoratorProps) {

    console.log(window.location.href);
  
  const theme = useMemo(() => {
    const outerTheme = createTheme({ darkMode: selectedTheme === 'dark' ? true : false });
    const _bgColor = outerTheme.palette.background.default;
    return muiCreateTheme(outerTheme, {
      components: {
        MuiOutlinedInput: {
          styleOverrides: {
            input: {
              "&:-webkit-autofill": {
                WebkitBoxShadow: `0 0 0 100px ${_bgColor} inset`,
                WebkitTextFillColor:
                  outerTheme.palette.getContrastText(_bgColor),
              },
            },
          },
        },
        MuiButton: {
          defaultProps: {
            size: "small",
            variant: "contained",
          },
        },
        MuiSelect: {
          defaultProps: {
            size: "small",
          },
        },
        MuiTabs: {
          defaultProps: {
            indicatorColor: "secondary",
            textColor: "secondary",
          },
        },
        MuiSvgIcon: {
          defaultProps: { fontSize: "small" },
        },
      },
    } as ThemeOptions);
  }, [createTheme, selectedTheme]);
  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
}