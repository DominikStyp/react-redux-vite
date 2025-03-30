import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Counter />
        </div>
        <div>
          <Quotes />
        </div>
        
      </header>
    </div>
  )
}

export default App
