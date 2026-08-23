import "./OcTabPanel.css";

export function OcTabPanel({ children, id, "aria-labelledby": ariaLabelledBy, hidden }) {
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
