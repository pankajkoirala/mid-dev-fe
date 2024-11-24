# Next.js Application with TypeScript

## Overview

This project is a Next.js application built with React and TypeScript. It uses several packages to manage functionality, including reusable components, file uploads, and ensuring smooth application perfomance. The application runs on a local server with the port defined in the `.env` file.

## Features

- Built with TypeScript for type safety and maintainability.
- Using radix and tailwind for components and styling.
- Uses `dotenv` for environment variable management.
- Includes `axios` for HTTP requests.

---
## Demo

- Open [Link](https://mid-dev-fe.vercel.app/) with your browser to see the result.


## Installation

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or above recommended)
- [npm](https://www.npmjs.com/)

### Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory with the following content:

   ```env
   PORT=3000
   ```

   Replace `3000` with the desired port number if needed.

3. Start the server:

   ```bash
   npm start
   ```

4. Access the application in your browser at:

   ```
   http://localhost:3000
   ```

---

## Endpoint

The following pages are present

- `/product` # All products list
- `/product/:id` # Spectific product details

---

## Project Structure

```
├── src
│   ├── app           # All application routes
│   ├── components    # All reusable components, e.g Header,Footer
│   ├── constant      # All application constants
│   ├── container     # All application container
│   ├── hooks         # All application hooks, e.g., disclosure, form handling
│   ├── types         # Application types and model
│   └── utils         # Utils and reusable functions
│
├── public            # Directory for public files
├── .env              # Environment variables
├── .gitignore        # Files and directories to ignore in Git
├── tsconfig.json     # TypeScript configuration
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

---

## Scripts

The following npm scripts are available:

- `npm run build`: Compiles TypeScript files into JavaScript.
- `npm run dev`: Starts the application.

---

## Key Packages

Here are the main packages used in this project:

### Dependencies

- **Next.js**: Web framework for building server-side and client-side applications.
- **React**: library for web and native user interfaces.
- **Radix UI**: Components, icons, and colors for building high‑quality, accessible UI.
- **axios**: HTTP client for making API requests.
- **dotenv**: Loads environment variables from a `.env` file.


### Dev Dependencies

- **typescript**: Enables development using TypeScript.
- **ts-node**: Executes TypeScript directly without pre-compilation.
- **@types/node**: Type definitions for Node.js.
- **@types/react**: Type definitions for React.js.

---

## Environment Variables

The application uses a `.env` file to manage configuration. Currently, it supports the following variable:

```
    NEXT_BASE_API_URL=https://mid-dev-be.onrender.com/api   # used as backend endpoint
```

---