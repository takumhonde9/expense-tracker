import { StyleProp, TextStyle } from "react-native";

export type TextVariant =
  | "text"
  | "title"
  | "subtitle"
  | "sectionTitle"
  | "button";

export type TextProps =
  | { style?: StyleProp<TextStyle>; variant?: TextVariant } & (
      | {
          text: string;
          children?: any;
        }
      | {
          children: any;
          text?: string;
        }
    );
