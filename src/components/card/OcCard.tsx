import type { ReactNode } from "react";
import "./OcCard.css";

export interface OcCardProps {
  children?: ReactNode;
}

export function OcCard({ children }: OcCardProps) {
  return <div className="oc-card">{children}</div>;
}
export default OcCard;
