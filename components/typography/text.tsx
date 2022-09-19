import { Text, StyleSheet, StyleProp, TextStyle } from "react-native";
import { colors } from "../../theme/ui";
import { TextProps } from "../../types/components/text.type";

function AppText({ children, text, style, variant }: TextProps) {
  const _styles = [styles[variant || "text"], style];
  return (
    <>
      {children && !text ? (
        <Text style={_styles}>{children}</Text>
      ) : (
        <Text style={_styles}>{text}</Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.light.primary,
    fontSize: 16,
  },
  title: {
    color: colors.light.primary,
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  subtitle: {
    color: colors.light.primary,
    fontSize: 12,
  },
});

export default AppText;
