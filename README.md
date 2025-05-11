# Cryptoria

A modern web application for generating secure passwords and encrypting/decrypting text.

## Features

- **Password Generation**: Create strong and secure passwords with customizable options
  - Adjustable password length
  - Include/exclude letters, numbers, and symbols
  - Copy generated passwords to clipboard
  
- **Text Encryption/Decryption**: Securely encrypt and decrypt text using a key
  - Simple and intuitive interface
  - Secure encryption algorithms
  - Easy-to-use key-based encryption

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/afkanozdemir/cryptoria.git
cd cryptoria
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Usage

### Password Generator

1. Select the "Password" tab
2. Configure password options (length, include letters, numbers, symbols)
3. Click the refresh button to generate a password
4. Use the copy button to copy the password to your clipboard

### Text Encryption/Decryption

1. Select the "Crypt" tab
2. Enter the plain text you want to encrypt
3. Provide an encryption key
4. Click "Encrypt" to encrypt the text
5. To decrypt, enter the encrypted text and the same key, then click "Decrypt"

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Font: Poppins from Google Fonts
