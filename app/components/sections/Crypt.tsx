import React, { useState } from 'react'
import Input from '../Input'
import Button from '../Button'
import CryptService from '../../core/Crypt'

const Crypt = () => {
    const [plainText, setPlainText] = useState<string>("");
    const [hashedText, setHashedText] = useState<string>("");
    const [key, setKey] = useState<string>("");
    const [verifyResult, setVerifyResult] = useState<string>("");

    const handleEncrypt = () => {
      if (!plainText || !key) {
        setVerifyResult("Please enter the text and key");
        return;
      }

      const result = CryptService.encrypt({
        text: plainText,
        key: key
      });

      if (result.success) {
        setHashedText(result.result);
        setVerifyResult("Text encrypted successfully");
      } else {
        setVerifyResult(`Encryption error: ${result.error}`);
      }
    };

    const handleDecrypt = () => {
      if (!hashedText || !key) {
        setVerifyResult("Please enter the encrypted text and key");
        return;
      }

      const result = CryptService.decrypt({
        text: hashedText,
        key: key
      });

      if (result.success) {
        setPlainText(result.result);
        setVerifyResult("Text decrypted successfully");
      } else {
        setVerifyResult(`Decryption error: ${result.error}`);
      }
    };

  return (
    <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <Input password={plainText} placeholder="Plain Text" setPassword={setPlainText} extraClass="w-full p-2 rounded-sm border border-stone-500"/>
          <Input password={hashedText} placeholder="Hashed Text" setPassword={setHashedText} extraClass="w-full p-2 rounded-sm border border-stone-500"/>
          <Input password={key} placeholder="Encryption Key" setPassword={setKey} extraClass="w-full p-2 rounded-sm border border-stone-500"/>
          {verifyResult && (
            <p className="text-sm text-center mt-2">{verifyResult}</p>
          )}
        </div>
        <div className="flex space-x-2 w-full h-10">
          <Button label={'Encrypt'} onClick={handleEncrypt} extraClass="w-full"/>
          <Button label={'Decrypt'} onClick={handleDecrypt} extraClass="w-full"/>
        </div>
    </div>
  )
}

export default Crypt