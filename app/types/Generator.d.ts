export interface GeneratorOptions {
    letters: boolean;
    numbers: boolean;
    symbols: boolean;
}

export interface GeneratorResult {
    password: string;
    options: GeneratorOptions;
}

export interface Generator {
    (password: string, options: GeneratorOptions): string;
}

export interface GeneratorConfig {
    result : string;
    characters: string;
    lowercase: string;
    numbers: string;
    symbols: string;
}

