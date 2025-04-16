import React from 'react'
import {ButtonBuscarContainer} from './styles'

function ButtoBuscar({onClick}) {
  return (
    <ButtonBuscarContainer onClick={onClick}>
    Buscar
    </ButtonBuscarContainer>
  )
}

export default ButtoBuscar;