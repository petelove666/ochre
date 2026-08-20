import Card from './components/card/Card'
import Toggle from './components/toggle/Toggle'

function App() {
  const densityToggle = {
    toggleName: 'density',
    options: [
      { label: 'condensed', value: 'a' },
      { label: 'expanded', value: 'b' },
    ]
  }

  const optionsToggle = {
    toggleName: 'options',
    options: [
      { label: 'option 1', value: 'a' },
      { label: 'option 2', value: 'b' },
      { label: 'option 3', value: 'c' }
    ]
  }

  return (
    <>
      <section>
        <h1>Ochre</h1>
        <Card>
          <p>Density</p>
          <Toggle{...densityToggle}/>
        </Card>
         <Card>
          <p>Options</p>
          <Toggle{...optionsToggle}/>
        </Card>
      </section>
    </>
  )
}

export default App
