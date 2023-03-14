export interface ButtonProps {
  variant: "primary" | "green" | "grey" | "black";
  text?: string;
  icon?: any;
  onClick: () => void;
  width?: string;
  justifyContent: "space-between" | "center";
  lowPadding?: boolean;
  maxWidth?: boolean;
  marginRight?: string;
  iconReverse?: boolean;
}
