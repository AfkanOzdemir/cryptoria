import { GeneratorOptions, GeneratorConfig } from "../types/Generator";

const Generator = (options: GeneratorOptions, length: number) => {
    let result: GeneratorConfig = {
        result: "",
        characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowercase: "abcdefghijklmnopqrstuvwxyz",
        numbers: "0123456789",
        symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?"
    };

    options.letters && (result.characters += result.lowercase);
    options.numbers && (result.characters += result.numbers);
    options.symbols && (result.characters += result.symbols);
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * result.characters.length);
        result.result += result.characters[random];
    }
    
    return result;
}

export default Generator;