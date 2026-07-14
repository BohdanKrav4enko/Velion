# VELION 🛒

![VELION Preview](./public/favicon.svg)

## 🛍️ About The Project

**VELION** is a modern e-commerce web application built with React and TypeScript.

The project represents a complete online marketplace experience with product browsing, authentication, shopping cart functionality, favorites, and product management.

The main focus of the project was creating a scalable frontend architecture, smooth user experience, and reliable data management using modern React ecosystem tools.

---

## ✨ Features

### 🛒 Shopping Experience

- Product catalog with categories
- Product search
- Product details pages
- Shopping cart management
- Favorites system
- Responsive product cards
- Dynamic product data

### 👤 User Features

- User authentication
- Protected routes
- User profile management
- Role-based access control

### ⚙️ Product Management

- Create products
- Edit products
- Delete products
- Product administration

### 🚀 User Experience

- Responsive design
- Form validation
- Loading skeletons
- Error handling
- Empty states
- Smooth navigation
- Optimized performance

---

## 🛠️ Technologies

### Frontend

- React
- TypeScript
- Vite
- Redux Toolkit
- RTK Query
- React Router DOM
- React Hook Form
- Zod
- Styled Components

### Development Tools

- ESLint
- Prettier
- pnpm

---

## 🏗️ Architecture

The application follows a feature-based structure with separated responsibilities:

```
src/
├── components/
├── pages/
├── features/
├── hooks/
├── services/
├── store/
├── styles/
├── utils/
└── routes/
```

### State Management

- Redux Toolkit for global state
- RTK Query for API communication and caching
- Feature-based slices architecture

### Forms

- React Hook Form for form management
- Zod for schema validation

---

## 🚀 Getting Started

### Clone repository

```bash

git clone https://github.com/BohdanKrav4enko/Velion.git
```

### Install dependencies

```bash

pnpm install
```

### Start development server

```bash

pnpm dev
```

Application will be available at the local development server.

---

## 📦 Production Build

Create an optimized production build:

```bash

pnpm build
```

Preview the production version:

```bash

pnpm preview
```

---

## 🧹 Code Quality

Run ESLint:

```bash

pnpm lint
```

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Build application for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Check code quality |

---

## 🌐 Live Demo

https://velion-marketplace.vercel.app/

---

## 🎯 Project Goals

This project was created as a frontend portfolio project to demonstrate:

- Building scalable React applications
- Working with TypeScript in real-world scenarios
- Managing complex application state
- Integrating REST API services
- Creating reusable components
- Implementing authentication flows
- Developing responsive interfaces
- Applying modern frontend best practices

---

## 👨‍💻 Author

**Bohdan Kravchenko**

Frontend Developer

---

## 📄 License

This project was created for educational and portfolio purposes.