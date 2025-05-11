"use client"
import React, { useState } from "react";
import SwitchMode from "./components/SwitchMode";
import Password from "./components/sections/Password";
import Crypt from "./components/sections/Crypt";
export default function Home() {
  const [mode, setMode] = useState<"password" | "crypt">("password");
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10 px-4">
        <div className="flex flex-col items-center justify-center space-y-2 text-center">
            <h1 className="text-4xl font-bold text-green-300">Cryptoria</h1>
            <p className="text-lg">The best tool of generate passwords and encrypt/decrypt text</p>
        </div>
        <div className="container p-10 w-full max-w-2xl rounded-md bg-stone-900 space-y-4">
          <div className="w-full flex items-center justify-center space-x-2">
            <SwitchMode mode={mode} setMode={setMode} />
          </div>
          {mode === "password" ? <Password /> : <Crypt />}
        </div>
    </div>
  );
}
