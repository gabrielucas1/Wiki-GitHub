import React from 'react'
import {InputContainer} from './styles'

function Input({value, onChange}) {

  const removendo = () => {
    console.log("Removendo")
  }
  return (
    <InputContainer>
    <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input;