# 🌸 Flower Stall

A modern, fully-functional e-commerce application for a flower shop built with React, TypeScript, and modern web technologies.

## Live Demo

**[View Live Demo](https://flower-stall.vercel.app)**

## Overview

Flower Stall is a frontend e-commerce application that demonstrates core web development skills including component architecture, state management, routing, and API integration. The app showcases a flower shop's products and services, with a complete shopping cart system and order management functionality.

### Key Features

- **Product Gallery** - Browse seasonal arrangements and services with real-time API data
- **Shopping Cart** - Add items to cart with persistent state management
- **Order Management** - View active orders and order history with status tracking
- **Multi-page Navigation** - Seamless routing between Gallery, Profile, and About pages
- **Responsive Design** - Mobile-friendly interface with CSS modules
- **Modern Tooling** - Built with Vite for fast development and optimized production builds

## Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18.2 |
| **Language** | TypeScript 5.0 |
| **State Management** | Zustand 5.0 |
| **Routing** | React Router v6 |
| **Styling** | CSS Modules |
| **Build Tool** | Vite 4.4 |
| **Linting** | ESLint + TypeScript |
| **Backend API** | MockAPI.io |

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
  ```bash
  git clone https://github.com/Nnisik/flower-web-stall.git
  cd flower-web-stall
  ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Set up environment variables: Create a .env file in the root directory:
  ```code
  VITE_API_TOKEN=your_mockapi_token
  ```

### Development

Start the development server:
  ```bash
  npm run dev
  ```
The app will be available at http://localhost:5173

## Project Structure
  ```code
  src/
├── components/          # Reusable UI components
│   ├── Order.tsx
│   ├── ActiveOrdersList.tsx
│   ├── ServiceCard.tsx
│   └── ...
├── pages/              # Page components
│   ├── GalleryPage.tsx
│   ├── ProfilePage.tsx
│   ├── AboutPage.tsx
│   └── MainPage.tsx
├── store/              # Zustand state management
│   ├── useCart.ts
│   ├── useGalleryStore.ts
│   └── useOrderStore.ts
├── features/           # Feature-specific modules
├── styles/             # CSS modules
├── types/              # TypeScript type definitions
├── App.tsx             # Main app component
└── main.tsx            # Entry point
  ```

## Features in Detail
### Product Gallery
- Fetches products and services from MockAPI
- Automatically categorizes items by type
- Real-time updates with proper error handling

### Shopping Cart
- Zustand-based state management
- Add items with instant UI updates
- Cart count tracking
- Cart reset functionality

### Order Management
- View active orders with real-time status
- Order history with delivery tracking
- Order status filtering (active vs. completed/canceled)
- Mock API integration for order creation

### Routing
- Client-side routing with React Router v6
- Shared layout component for consistent navigation
- Clean URL structure

## Testing
Testing setup with Vitest and React Testing Library is recommended for production deployments. Current testing roadmap includes:
- Store unit tests (Zustand)
- Component integration tests
- API mocking for integration tests
  
------------------------------------------------------------------------------------------------------------------------------------------------------------------

## TODO
- [ ] Add Vitest + React Testing Library
- [ ] Implement error boundaries & loading states
- [ ] Add .env.example with API key setup
- [ ] Document component architecture 
