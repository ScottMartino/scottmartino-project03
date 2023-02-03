import './App.css';
import {useEffect, useState}  from 'react'
import axios from 'axios';
import Form from './Components/Form';
import Displayphotos from './Components/Displayphotos';

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
    
  <section className='wrapper'>
      
      <div className="App">
        
        <img className="logo" src="https://fontmeme.com/permalink/230203/516bfcab31265e95580399d30ac6a00d.png" alt="lego-font" border="0"/>
        
        <div className='form'>
          <Form
           handleFormSubmit={handleFormSubmit}
          />
        </div>
        
        <div className='minifigs'>
          <Displayphotos results={minifigs}/>
        </div>

      </div>
  </section>

  );
}

export default App;
