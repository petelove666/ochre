import React from 'react';

import { OcButton } from '../components/button/OcButton.jsx';
import { OcCard } from '../components/card/OcCard.jsx';
import { OcToggle } from '../components/toggle/OcToggle.jsx';

import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>

      <section className="storybook-page">
           <h2>Ochre</h2>
             
          <OcCard>
            <div style={{marginBottom: '1rem'}}>
              <OcButton>Hover over me</OcButton>
            </div>

            <OcToggle
              name="hover"
              options={[
                {
                  label: 'Option 1',
                  value: 'a'
                },
                {
                  label: 'Option 2',
                  value: 'b'
                }
              ]}
              selectedValue="a"
            />
          </OcCard>
      </section>
    
    </article>
  );
};
