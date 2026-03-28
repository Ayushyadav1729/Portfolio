# 3D Portfolio

An interactive personal portfolio built with React, Vite, Tailwind CSS, React Router, and React Three Fiber. The site includes a 3D landing scene, an about page for skills, a projects showcase, and a contact form powered by EmailJS.

## Features

- 3D home scene with animated models and stage-based info cards
- Responsive portfolio pages for `About`, `Projects`, and `Contact`
- Contact form integrated with EmailJS
- Background music toggle on the home page
- Client-side routing with React Router

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router DOM
- `@react-three/fiber`
- `@react-three/drei`
- `@react-spring/three`
- EmailJS

## Routes

- `/` - 3D landing page
- `/about` - skills and introduction
- `/projects` - featured projects
- `/contact` - contact form with animated 3D fox

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run Locally

```bash
npm run dev
```

The app will start on the local Vite development server, usually `http://localhost:5173`.

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Project Structure

```text
src/
  assets/        Static icons, images, audio, and 3D models
  components/    Reusable UI components
  constants/     Skills, social links, and projects data
  hooks/         Custom hooks
  models/        Three.js model components
  pages/         Route pages
  App.jsx        Router setup
  main.jsx       App entry point
```

## Notes

- The home page uses React Three Fiber to render the interactive island scene.
- The contact form sends messages through EmailJS, so valid EmailJS credentials are required.
- Static portfolio content such as skills and projects is configured in `src/constants/index.js`.
