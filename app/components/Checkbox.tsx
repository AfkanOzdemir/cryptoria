import React from 'react'
import { CheckboxProps } from '../types/Fields'

const Checkbox = ({ id, label, checked, onChange }: CheckboxProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 *:cursor-pointer">
        <input type="checkbox" className="peer h-4 w-4 shrink-0 rounded-sm border border-stone-500 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-green-500 data-[state=checked]:text-green-500" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)} />
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox