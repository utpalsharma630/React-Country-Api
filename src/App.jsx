
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  

  return (
    <>
      <Counter> </Counter>
      <Country></Country>
    </>
  )
}
function Counter(){
  const [count, setCount]=useState(0);
  function CountIncrement(){
    const displayIncrement = count+1;
    setCount(displayIncrement);
  }
  function CountDecrement(){
    setCount(count-1)
  }
  return (
    <div className='w-96 m-auto text-center mt-16'>
      <h2 className='text-2xl font-semibold'>Counter:{count}</h2>
      <button onClick={CountIncrement} className='bg-green-300 p-1 m-2 rounded '>Increment++</button>
      <button onClick={CountDecrement} className='bg-red-300 p-1 m-2 rounded '>Decrement--</button>
      </div>
  )
}
function Country(){
  const [countrys,setCountry]= useState([]);
  useEffect(()=> {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>
      // console.log(data) 
      {
      setCountry(data)
      
    }
    )
  },[])
  
  return (
    <div>
      <h2 className='text-center font-semibold text-2xl'>This is Country Flags</h2>
      {
        countrys.map(country => <SingleCountry key={country.id} name={country.name.common} flag={country.flags.png} map={country.maps.openStreetMaps
        } ></SingleCountry> )
      }
      
    </div>
  )
}
function SingleCountry(props){
  // console.log(props);
  return (
    <div className='w-96 m-auto mt-16 text-center bg-gray-200 rounded-xl'>
      <h2 className='text-2xl font-semibold my-2'>Name: {props.name}</h2>
      <img className='w-72 mx-auto p-3 hover:w-80 ' src={props.flag} alt="" />
      <button className='bg-green-200 p-2 mb-1 rounded-xl text-xl font-semibold'><a href={props.map}>Map</a></button>

    </div>
  )
}


export default App
