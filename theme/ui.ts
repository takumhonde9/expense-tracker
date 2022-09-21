type colorVariants = { primary: string; secondary: string };

type Colors = {
  light: colorVariants;
  dark: colorVariants;
  success: string;
  error: string;
  warning: string;
  "base-600": string;
  accent: string;
  "accent-variant": string;
};

export const colors: Colors = {
  light: {
    primary: "#F1F1F1",
    secondary: "#000000",
  },
  dark: {
    primary: "#000000",
    secondary: "#F1F1F1",
  },
  success: "#4dc330",
  error: "#ad3c3c",
  warning: "#ee8521",
  "base-600": "#121212",
  accent: "#ca6023",
  "accent-variant": "#20063B",
};
