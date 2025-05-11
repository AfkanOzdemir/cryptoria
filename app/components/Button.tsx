import React from 'react'
import { ButtonProps } from '../types/Fields'

const Button = ({ label, onClick, extraClass }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`px-2 py-2 rounded-lg bg-green-300 text-stone-900 transition-all duration-300 hover:bg-green-400 font-semibold cursor-pointer aspect-square ${extraClass}`}>{label}</button>
  )
}

export default Button