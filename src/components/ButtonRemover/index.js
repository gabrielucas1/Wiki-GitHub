import React from 'react'
import {ButtonContainer} from './styles'

function ButtonRemover({children, onClick}) {
  return (
    <ButtonContainer>
    <button onClick = {onClick}>{children}</button>
    </ButtonContainer>
  )
}

export default ButtonRemover;