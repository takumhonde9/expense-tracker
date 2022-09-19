import { colors } from "./ui";
import { defaultSettings } from "../settings";

export const theme = {
  dark: true,
  colors: {
    primary: colors.accent,
    background: colors[defaultSettings.theme].primary,
    card: colors["base-600"],
    text: colors[defaultSettings.theme].secondary,
    border: "transparent",
    notification: colors["accent-variant"],
  },
};
