import CryptoJS from 'crypto-js';
import { CryptOptions, CryptResult } from '../types/Crypt';

class Crypt {
  /**
   * Encrypts the text
   * @param options Encryption options
   * @returns Encrypted text and status
   */
  static encrypt = (options: CryptOptions): CryptResult => {
    try {
      const { text, key } = options;
      
      if (!text || !key) {
        return {
          result: '',
          success: false,
          error: 'Text or key cannot be empty'
        };
      }

      const encrypted = CryptoJS.AES.encrypt(text, key).toString();
      
      return {
        result: encrypted,
        success: true
      };
    } catch (error) {
      return {
        result: '',
        success: false,
        error: `Encryption error: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  };

  /**
   * Decrypts the encrypted text
   * @param options Decryption options
   * @returns Decrypted text and status
   */
  static decrypt = (options: CryptOptions): CryptResult => {
    try {
      const { text, key } = options;
      
      if (!text || !key) {
        return {
          result: '',
          success: false,
          error: 'Encrypted text or key cannot be empty'
        };
      }

      const decrypted = CryptoJS.AES.decrypt(text, key);
      const result = decrypted.toString(CryptoJS.enc.Utf8);
      
      if (!result) {
        return {
          result: '',
          success: false,
          error: 'Decryption failed, the key may be incorrect'
        };
      }

      return {
        result,
        success: true
      };
    } catch (error) {
      return {
        result: '',
        success: false,
        error: `Decryption error: ${error instanceof Error ? error.message : String(error)}`
      };
    }
  };
}

export default Crypt;
