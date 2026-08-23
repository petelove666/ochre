import { useId } from "react";
import type { ReactNode } from "react";
import "./OcToggle.css";

export interface OcToggleOption {
  label: ReactNode;
  value: string;
  selected?: boolean | null;
}

export interface OcToggleProps {
  name: string;
  options?: OcToggleOption[];
  selectedValue?: string;
}

export function OcToggle({ name, options = [], selectedValue }: OcToggleProps) {
  const instanceId = useId();
  const resolvedGroupName = `${name}-${instanceId}`;

  const hasExplicitSelected = options.some(
    ({ selected }) => selected !== null && selected !== undefined,
  );

  return (
    <div className="oc-toggle">
      {options.map(({ label, value, selected }, index) => {
        const id = `${resolvedGroupName}-option-${index}`;
        const shouldDefaultToFirst =
          !hasExplicitSelected && selectedValue == null && index === 0;

        return (
          <label key={id} htmlFor={id} className="oc-toggle__option">
            <input
              id={id}
              type="radio"
              name={resolvedGroupName}
              value={value}
              defaultChecked={
                selected ?? (value === selectedValue || shouldDefaultToFirst)
              }
              className="oc-toggle__input"
            />
            <span className="oc-toggle__label">{label}</span>
          </label>
        );
      })}
    </div>
  );
}

export default OcToggle;
