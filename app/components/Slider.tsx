import React from 'react'
import { SliderProps } from '../types/Fields'

const Slider = ({ value, onChange }: SliderProps) => {
  return (
    <div className="w-full flex items-center space-x-2 *:cursor-pointer">
        <input type="range" min="6" max="400" value={value} className="w-full max-w-xs relative flex touch-none select-none items-center" onChange={(e) => onChange(parseInt(e.target.value))}/>
        <label className="text-sm px-2" htmlFor="length">Length {value}</label>
    </div>
  )
}

export default Slider