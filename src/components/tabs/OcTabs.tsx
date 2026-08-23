import { Children, cloneElement, useId, useRef, useState } from "react";
import type { KeyboardEvent, ReactElement, ReactNode } from "react";
import type { OcTabPanelProps } from "./OcTabPanel";
import "./OcTabs.css";

export interface OcTabsProps {
  children?: ReactNode;
  defaultActiveIndex?: number;
}

export function OcTabs({ children, defaultActiveIndex = 0 }: OcTabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const baseId = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const panels = Children.toArray(children) as ReactElement<OcTabPanelProps>[];
  const lastIndex = panels.length - 1;

  const focusTab = (index: number) => {
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let newIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        newIndex = index === lastIndex ? 0 : index + 1;
        break;
      case "ArrowLeft":
        newIndex = index === 0 ? lastIndex : index - 1;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = lastIndex;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(newIndex);
    focusTab(newIndex);
  };

  return (
    <div className="oc-tabs">
      <div className="oc-tabs__list" role="tablist">
        {panels.map((panel, index) => {
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${index}`;
          const isActive = index === activeIndex;

          return (
            <button
              key={tabId}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isActive}
              aria-controls={panelId}
              tabIndex={isActive ? 0 : -1}
              className="oc-tabs__tab"
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              {panel.props.label}
            </button>
          );
        })}
      </div>

      {panels.map((panel, index) => {
        const tabId = `${baseId}-tab-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return cloneElement(panel, {
          key: panelId,
          id: panelId,
          "aria-labelledby": tabId,
          hidden: index !== activeIndex,
        });
      })}
    </div>
  );
}

export default OcTabs;
