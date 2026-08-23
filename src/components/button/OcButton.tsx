import type { MouseEventHandler, ReactNode } from "react";
import "./OcButton.css";

export interface OcButtonProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function OcButton({
  children,
  type = "button",
  disabled = false,
  onClick,
}: OcButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="oc-button"
    >
      {children}
    </button>
  );
}

export default OcButton;
