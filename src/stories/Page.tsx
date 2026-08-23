import { OcTabs } from "../components/tabs/OcTabs.tsx";
import { OcLayoutCol } from "../components/layout-col/OcLayoutCol.tsx";
import { OcTabPanel } from "../components/tabs/OcTabPanel.tsx";
import { OcButton } from "../components/button/OcButton.tsx";
import { OcCard } from "../components/card/OcCard.tsx";
import { OcToggle } from "../components/toggle/OcToggle.tsx";
import { OcTextInput } from "../components/text-input/OcTextInput.tsx";

import "./page.css";

export const Page = () => {
  return (
    <article>
      <section className="storybook-page">
        <h2>Demo</h2>
        <OcCard>
          <OcTabs>
            <OcTabPanel key="1" label="First tab">
              <OcLayoutCol gap={24}>
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
                  <label htmlFor="with-content-input1">Example</label>
                  <input
                    id="with-content-input1"
                    type="text"
                    placeholder="Enter text here"
                  />
                </OcTextInput>
              </OcLayoutCol>
            </OcTabPanel>
            <OcTabPanel key="2" label="Second tab">
              <OcLayoutCol>
                <OcButton>Hover over me</OcButton>

                <OcTextInput>
                  <label htmlFor="with-content-input2">Example</label>
                  <input
                    id="with-content-input2"
                    type="text"
                    placeholder="Enter text here"
                  />
                </OcTextInput>
              </OcLayoutCol>
            </OcTabPanel>
            <OcTabPanel key="3" label="Third tab">
              <OcLayoutCol>
                <OcTextInput>
                  <label htmlFor="with-content-input3">Example</label>
                  <input
                    id="with-content-input3"
                    type="text"
                    placeholder="Enter text here"
                  />
                </OcTextInput>
              </OcLayoutCol>
            </OcTabPanel>
          </OcTabs>
        </OcCard>
      </section>
    </article>
  );
};
