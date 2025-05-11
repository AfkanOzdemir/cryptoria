import React from 'react'

const SwitchMode = ({ mode, setMode }: { mode: "password" | "crypt", setMode: (mode: "password" | "crypt") => void }) => {

    const handleMode = (mode: "password" | "crypt") => {
        setMode(mode);
    }

  return (
    <div className="w-full flex items-center justify-center space-x-2">
        <button onClick={() => handleMode("password")} className={`text-lg font-semibold w-1/2 bg-green-300 text-stone-900 rounded-md px-2 py-1 cursor-pointer transition-all duration-300 ${mode === "password" ? "bg-green-300! text-stone-900" : "bg-stone-900 text-white"}`}>Password Mode</button>
        <button onClick={() => handleMode("crypt")} className={`text-lg font-semibold w-1/2 bg-stone-900 text-green-300 rounded-md px-2 py-1 cursor-pointer transition-all duration-300 ${mode === "crypt" ? "bg-green-300! text-stone-900" : "bg-stone-900 text-white"}`}>Crypt Mode</button>
    </div>
  )
}

export default SwitchMode