export interface ButtonProps {
  variant: "primary" | "green" | "grey";
  text?: string;
  icon?: any;
  onClick: () => void;
  width?: string;
  justifyContent: "space-between" | "center";
  lowPadding?: boolean;
}
