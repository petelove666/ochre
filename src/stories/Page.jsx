import React from "react";

import { OcLayoutCol } from "../components/layout-col/OcLayoutCol.jsx";
import { OcButton } from "../components/button/OcButton.jsx";
import { OcCard } from "../components/card/OcCard.jsx";
import { OcToggle } from "../components/toggle/OcToggle.jsx";
import { OcTextInput } from "../components/text-input/OcTextInput.jsx";

import "./page.css";

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <section className="storybook-page">
        <h2>Ochre</h2>

        <OcCard>
          <OcLayoutCol>
            <OcButton>Hover over me</OcButton>

            <OcToggle
              name="hover"
              options={[
                {
                  label: "Option 1",
                  value: "a",
                },
                {
                  label: "Option 2",
                  value: "b",
                },
              ]}
              selectedValue="a"
            />

            <OcTextInput>
              <label htmlFor="with-content-input">Example</label>
              <input
                id="with-content-input"
                type="text"
                placeholder="Enter text here"
              />
            </OcTextInput>
          </OcLayoutCol>
        </OcCard>
      </section>
    </article>
  );
};
