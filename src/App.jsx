import './App.css'
import { useEffect } from 'react'
import axios from 'axios'
function App() {

  // useEffect(() => {},[]) skeleton of a useEffect hook
  useEffect(() => {
    //API Call, runs when component is mounted.
    // console.log('Component is mounted');
    axios.get('https://pokeapi.co/api/v2/pokemon/mewtwo')
      .then((response) => console.log('RESPONSE: ',response))
      .catch((error) => console.log(error))
  }, []) //[] = Dependency Array, what you want useEffect hook to monitor.


  return (
    <>
      <h2>Promises Intro</h2>
    </>
  )
}

export default App
