import './App.css';
import {useEffect, useState}  from 'react'
import axios from 'axios';
import Form from './Form';
import Displayphotos from './Displayphotos';

function App() {
  
  const [minifigs, setMinifigs] = useState ([])
  const [queryMiniFig, setQueryMinifig] = useState("")


  const handleFormSubmit =(event) => {
    event.preventDefault()
    setQueryMinifig(event.target[0].value)
  }

   useEffect(()=>{
    if (queryMiniFig !== ""){
      
      axios({
        url: 'https://rebrickable.com/api/v3/lego/minifigs/',
        params: {
          key: 'a4a279c7f86d60b0557cbc70201686e9',
          search: queryMiniFig,
          page_size: 10,
        },
      }).then((response) => {

        const minifigresults = response.data.results
        setMinifigs(minifigresults)

        if (response.data.count === 0){
          alert ("No Minifigures Match")
        }
      }
      )
    } 
  }
  
  
, [queryMiniFig])
  
  return (
    <div className="App">
      <h1>LEGO Minifigure Search</h1>
      <Form
        handleFormSubmit={handleFormSubmit}
        // handleInputChange={handleInputChange}
      />
     <Displayphotos results={minifigs}/>
    </div>
  );
}

export default App;
