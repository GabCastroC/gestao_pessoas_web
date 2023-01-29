import { useState,useEffect } from 'react';
import './App.css';
import { FichaCadastro } from './components/FichaCadastro';
import { ListaPessoas } from './components/ListaPessoas';
import {api} from './services/api.js';

function App() {

  const [pessoas, setPessoas] = useState([])

  useEffect(() => {
    api.get("/pessoas").then((response) => {
      setPessoas(response.data);  
    })
  }, [])

  return ( 
    <main> 
      <FichaCadastro />
      <ListaPessoas pessoas={pessoas}/>
    </main>
  );
}

export default App;
