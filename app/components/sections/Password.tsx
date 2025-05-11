"use client"
import Input from "../Input";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Slider from "../Slider";
import { ClipboardCopy, RefreshCw } from 'lucide-react';
import { useState } from "react";
import Generator from "@/app/core/Generator";
import { GeneratorOptions } from "@/app/types/Generator";
const Password = () => {
    const [password, setPassword] = useState<string>("");
    const [length, setLength] = useState<number>(20);
    const [options, setOptions] = useState<GeneratorOptions>({
      letters: true,
      numbers: true,
      symbols: true,
    });
    
    const handleGenerate = () => {
      const pass = Generator(options, length);
      setPassword(pass.result);
    }
  
    const handleCopy = () => {
      navigator.clipboard.writeText(password);
    }
    
  return (
    <div className="flex flex-col space-y-4">
        <div className="flex p-2 rounded-sm border border-stone-500 space-x-2">
          <Input password={password} setPassword={setPassword} placeholder="Password" />
          <Button label={<RefreshCw className="w-4 h-4" />} onClick={handleGenerate} />
          <Button label={<ClipboardCopy className="w-4 h-4" />} onClick={handleCopy} />
        </div>
        <div className="flex flex-col items-start justify-center space-y-2 text-center">
          <p className="text-lg">Options</p>
          <div className="w-full flex flex-wrap space-x-6">
            {
              Object.entries(options).map(([key, value]) => (
                <Checkbox key={key} id={key} label={key} checked={value} onChange={() => setOptions({ ...options, [key]: !value })} />
              ))
            }
          </div>
          <div className="w-full flex items-center justify-center space-x-2">
            <Slider value={length} onChange={(value) => setLength(value)} />
          </div>
        </div>
    </div>
  )
}

export default Password