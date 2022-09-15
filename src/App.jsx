import './App.css'
import Card from './components/Card'

const App = () => {
  const names = [
    'tsunode', 
    'Demetrius',
    'Anna',
    'Julio',
    'Bruna'
  ]

  return (
    <div className="App">
      <h1>Teste</h1>

      {
        names.map((name) => {
          return(
            <Card key={name} name={name} age={27} />
          )
        }) 
      }

    </div>
  )
}

export default App
