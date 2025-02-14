# Invoice Form Project

A React application built with Vite, featuring authentication, routing, and PDF handling capabilities.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Lathiya50/pdf-render
cd pdf-render
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Available Scripts

- **Development server:**
```bash
npm run dev
# or
yarn dev
```
This starts the development server at `http://localhost:5173`

- **Build for production:**
```bash
npm run build
# or
yarn build
```

- **Preview production build:**
```bash
npm run preview
# or
yarn preview
```



## Features

- React 19 with Vite for fast development and building
- Authentication system with protected routes
- React Router v7 for navigation
- PDF generation and handling with @react-pdf/renderer
- Form handling with Formik and Yup validation
- Responsive design with Tailwind CSS
- Toast notifications with react-hot-toast

## Routes

- `/login` - Login page
- `/dashboard` - Main dashboard (protected)
- `/invoice-details` - Invoice details page (protected)
- `/comments` - Comments page (protected)

## Dependencies

### Main Dependencies
- react & react-dom (v19)
- react-router-dom (v7)
- @react-pdf/renderer & react-pdf
- formik & yup
- lucide-react
- react-hot-toast
- tailwindcss



## Application Snapshots

Below are the key screens of the application:

### Login Page
![Login Page](/screenshots/login.png)


### Dashboard
![Dashboard](/screenshots/dashboard.png)


### Invoice Details
![Invoice Details](/screenshots/invoice-details.png)


### Comments Section
![Comments](/screenshots/comments.png)
