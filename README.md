# Invoice Form Project

A React application built with Vite, featuring authentication, routing, and PDF handling capabilities.

🚀 **Live Demo:** [https://pdf-render-phi.vercel.app](https://pdf-render-phi.vercel.app)

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

**Note:** For testing purposes, you can log in with any username and password combination. The authentication is currently in demo mode.

## Demo  Link 
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
![image](https://github.com/user-attachments/assets/916a2cbf-1f02-4e5a-83ff-c30b1fcee06e)


### Dashboard
![full page](https://github.com/user-attachments/assets/de434016-31b3-4d2d-8625-604e6497fcdb)


### Invoice Details
![image](https://github.com/user-attachments/assets/198e9e7f-4bc4-455b-9196-5dcf1caaa46f)



### Dummy data with PDF view
![screencapture-localhost-5173-dashboard-2025-02-14-11_48_06](https://github.com/user-attachments/assets/f5a1213c-249d-4a81-a4ad-d6801a511fb4)
