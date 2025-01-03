import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [pokeList, setPokeList] = useState([])
  const [err, setErr] = useState('')


  // useEffect(() => {},[]) skeleton of a useEffect hook
  useEffect(() => {
    //API Call, runs when component is mounted.
    // console.log('Component is mounted');
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
      .then((response) => {
        console.log('RESPONSE:', response.data.results)
        setPokeList(response.data.results)
      })
      .catch((error) => {
        console.log('ERROR', error)
        setErr('Something Went Wrong')
      })
  }, []) //[] = Dependency Array, what you want useEffect hook to monitor. Runs once, once you reload the page


  return (
    <>
      <h1>Pokemon API</h1>

      <h2>First Starters and Their Evolutions</h2>
      {
        err.length > 0 ?
          <p>{err}</p> :
          null
      }
      {
        pokeList.map((poke, idx) => (
          <div key={idx}>
            <h3>Pokemon Name: {poke.name}</h3>
          </div>
        ))
      }

    </>
  )
}

export default App
