type Theme = "dark" | "light";

type Settings = {
  theme: Theme;
};

export const defaultSettings: Settings = {
  theme: "dark",
};
