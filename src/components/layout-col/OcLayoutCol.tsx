import type { ReactNode } from "react";
import "./OcLayoutCol.css";

const GAP_VALUES = [8, 16, 24, 32, 48] as const;

export type OcLayoutColGap = (typeof GAP_VALUES)[number];

export interface OcLayoutColProps {
  children?: ReactNode;
  gap?: OcLayoutColGap;
}

export function OcLayoutCol({ children, gap = 16 }: OcLayoutColProps) {
  const gapValue = GAP_VALUES.includes(gap) ? gap : 16;

  return (
    <div className="oc-layout-col" style={{ gap: `${gapValue / 16}rem` }}>
      {children}
    </div>
  );
}
export default OcLayoutCol;
