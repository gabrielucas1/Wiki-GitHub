import React from 'react'
import {ItemRepoContainer} from './styles'
import Button from '../ButtonRemover'


function ItemRepo({repos, remover}) {


  const removendo = () => {
    remover(repos.id)
  }
  return (

     <ItemRepoContainer> 
      <h3>{repos.name}</h3>
      <p>{repos.full_name}</p>
      <a href={repos.html_url} target='_blank' >Ver repositorios</a>
      <br></br>
      <Button onClick={removendo}>{"remover"}</Button>
      <hr/>
      </ItemRepoContainer>
  )
}

export default ItemRepo;