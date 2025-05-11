import React from 'react'
import { InputProps } from '../types/Fields'


const Input = ({ password, setPassword, extraClass, placeholder }: InputProps) => {
  return (
    <input type="text" placeholder={placeholder} className={`w-full outline-none font-semibold pr-5 ${extraClass}`} value={password} onChange={(e) => setPassword(e.target.value)} />
  )
}

export default Input