# 🔐 Canara Bank API Payload Encryption (Node.js)

This repository provides a lightweight Node.js implementation to encrypt payloads for Canara Bank's API Banking system using **JWE (JSON Web Encryption)** as per their specifications. The payload and encryption key are provided by the **Canara Bank API Team**.

📤 Payload Format (Provided by Canara Bank)
You will receive:

encrypt – The JSON payload that must be encrypted

key – A symmetric key in hexadecimal format

## 📦 Features

- 🔐 Encrypts sensitive banking data using JWE standard
- 🧪 Built with [jose](https://github.com/panva/jose) for modern cryptographic operations
- ⚡ Lightweight and easy to deploy as an AWS Lambda, Cloud Function, or a standalone server
- 📜 Accepts input payload and key via API request

---

## 🔧 Requirements

- Node.js 16+
- `jose` for encryption
- `uint8array-json-parser` for JSON parsing (optional, for Uint8Array compatibility)

---

## 🚀 Installation

```bash
npm install jose uint8array-json-parser

