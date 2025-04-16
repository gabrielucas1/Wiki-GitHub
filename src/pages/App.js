import React, { useState } from 'react';
import FOTO from '../assets/logoDIO.png';
import {Container} from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import ButtonBuscar from '../components/ButtonBuscar';
import { api } from '../services/api';
import ButtonRemover from '../components/ButtonRemover';  



function App() {

  const [currentRepo,setCurrenteRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const BuscandoRepositorio = async () => {

   try {
    const { data } = await api.get(`repos/${currentRepo}`); 
    if(data.id){

      const isExist = repos.find( repos => repos.id === data.id);
      if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrenteRepo('');
        return;
      }
      else{
        alert('Repositorio já adicionado');

      }

    }
    
   } catch (error) {
      alert('Repositorio não encontrado');
    }
    
   }

   const removendoDoRepo = (id) =>{
     const filtrandoparaRemover = repos.filter( repo => repo.id !== id);
     setRepos(filtrandoparaRemover);
   }

  return (
    <Container>
        <img src={FOTO} className="App-logo" alt="logo" width={72} height={72} />
        <Input value={currentRepo} onChange={e => setCurrenteRepo(e.target.value)} />
        <ButtonBuscar onClick={BuscandoRepositorio} />
        {repos.map(repo => <ItemRepo remover={removendoDoRepo} key={repo.id} repos={repo}/>)}
    </Container>
  );



}


export default App;
