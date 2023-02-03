import './App.css';
import {useEffect, useState}  from 'react'
import axios from 'axios';
import Form from './Form';

function App() {
  
  const [minifigs, setMinifigs] = useState ([])
  
  
  useEffect(()=>{
    // Making my API call
    axios({
        url: 'https://rebrickable.com/api/v3/lego/minifigs/',
        params: {
          key: 'a4a279c7f86d60b0557cbc70201686e9',
          search: 'pirate',
          page_size: 10,
        },
      }).then((response)=>{
        
        // store data in state
        const minifigresults = response.data.results
        setMinifigs(minifigresults)
        
        }
      )
  }      
, [])
  
  
  
  





  return (
    <div className="App">
      <h1>LEGO Minifigure Search</h1>
      
      <Form />
      
      {minifigs.map( (minfig)=>{
        return(
          <img src={minfig.set_img_url} alt="minfig" />
        )
      })

    }
      

    </div>
  );
}

export default App;
