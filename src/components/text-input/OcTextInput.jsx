import "./OcTextInput.css";

export function OcTextInput({ children, stretch = false }) {
  const className = stretch
    ? "oc-text-input oc-text-input--stretch"
    : "oc-text-input";
  return (
    <div className={className}>
      <div className="oc-text-input__content">{children}</div>
    </div>
  );
}
export default OcTextInput;
