export interface CryptOptions {
    text: string;
    key: string;
}

export interface CryptResult {
    result: string;
    success: boolean;
    error?: string;
}