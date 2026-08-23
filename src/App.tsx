import { OcCard } from "./components/card/OcCard";
import { OcToggle } from "./components/toggle/OcToggle";
import type { OcToggleProps } from "./components/toggle/OcToggle";

function App() {
  const densityToggle: OcToggleProps = {
    name: "density",
    options: [
      { label: "condensed", value: "a" },
      { label: "expanded", value: "b" },
    ],
  };

  const optionsToggle: OcToggleProps = {
    name: "options",
    options: [
      { label: "option 1", value: "a" },
      { label: "option 2", value: "b" },
      { label: "option 3", value: "c" },
    ],
  };

  return (
    <>
      <section>
        <h1>Ochre</h1>
        <OcCard>
          <p>Density</p>
          <OcToggle {...densityToggle} />
        </OcCard>
        <OcCard>
          <p>Options</p>
          <OcToggle {...optionsToggle} />
        </OcCard>
      </section>
    </>
  );
}

export default App;
