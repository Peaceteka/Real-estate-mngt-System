# Real Estate Management System

A modern web application for managing real estate properties, tenants, and payments.

## Features

- 🏠 Property Management
  - List properties (Bedsitters, One Bedroom, Two Bedroom)
  - Track occupancy status
  - Manage property details

- 👥 User Management
  - Admin and Tenant portals
  - Secure authentication
  - Role-based access control

- 📄 Documents
  - Digital consent forms
  - Online agreement signing
  - PDF receipt generation

- 💳 Payments
  - M-PESA integration
  - Automated rent collection
  - Payment history tracking

## Tech Stack

- Frontend: Next.js with TypeScript
- Styling: Tailwind CSS
- Authentication: NextAuth.js
- Database: Prisma with PostgreSQL
- Payments: M-PESA Integration

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/          # Next.js 13 App Router
├── components/   # Reusable UI components
├── lib/         # Utility functions and shared logic
├── models/      # Database models and types
└── services/    # External service integrations
```

## License

MIT
