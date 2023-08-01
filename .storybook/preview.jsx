import { createTheme } from "../src/theme";
import  AppDecorator from "../src/components/AppDecorator";
import React from "react";

export const decorators = [
  (Story , context) => (
    <AppDecorator {...{ createTheme , selectedTheme : context.globals.theme }}>
      <React.StrictMode>
        <Story />
      </React.StrictMode>
    </AppDecorator>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    title: 'Theme',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', icon: 'circlehollow', title: 'Light Theme' },
        { value: 'dark', icon: 'circle', title: 'Dark Theme' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}