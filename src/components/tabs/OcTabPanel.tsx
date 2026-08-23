import type { ReactNode } from "react";
import "./OcTabPanel.css";

export interface OcTabPanelProps {
  children?: ReactNode;
  label: string;
  id?: string;
  "aria-labelledby"?: string;
  hidden?: boolean;
}

export function OcTabPanel({ children, id, "aria-labelledby": ariaLabelledBy, hidden }: OcTabPanelProps) {
  return (
    <div
      className="oc-tab-panel"
      role="tabpanel"
      id={id}
      aria-labelledby={ariaLabelledBy}
      hidden={hidden}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default OcTabPanel;
