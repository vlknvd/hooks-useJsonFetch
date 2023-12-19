import Data from './components/Data'
import Error from './components/Error'
import Load from './components/Load'
import './App.css'

function App() {
  return(
    <div className='app'>
       <Data />
       <Error /> 
       <Load />
    </div>
   
  )
}

export default App
