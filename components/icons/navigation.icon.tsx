import { Octicons } from "@expo/vector-icons";

type NavigationIconProps = {
  icon: NavIcon;
  color: string;
  size: number;
};

type NavIcon = "home" | "settings" | "accounts" | "expenses" | "analytics";

type ActualNavIcon =
  | "home"
  | "pulse"
  | "gear"
  | "list-unordered"
  | "credit-card";

type NavigationIconMap = { [key in NavIcon]: ActualNavIcon };

const Icon: NavigationIconMap = {
  home: "home",
  settings: "gear",
  accounts: "credit-card",
  expenses: "list-unordered",
  analytics: "pulse",
};

export default function NavigationIcon({
  icon,
  color,
  size,
}: NavigationIconProps) {
  return <Octicons name={Icon[icon]} color={color} size={size} />;
}
