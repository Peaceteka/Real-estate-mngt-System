# Real Estate Management System

A modern web application for managing real estate properties, clients, and transactions.

## Features

- 🏠 Property Management
  - List properties (Houses, Apartments, Condos, Land, Commercial)
  - Track property status (Available, Sold, Rented, Under Contract)
  - Manage property details

- 👥 Client Management
  - Add and manage clients
  - Track client properties
  - View client transactions

- 💼 Transaction Management
  - Handle sales, rentals, and leases
  - Track transaction status
  - Record transaction details

- 👤 User Management
  - Admin and Agent portals
  - Secure authentication
  - Role-based access control

## Tech Stack

- Frontend: Next.js 13 with TypeScript
- Styling: Tailwind CSS
- Authentication: NextAuth.js
- Database: Prisma with PostgreSQL

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

3. Set up the database:
   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3002](http://localhost:3002) to view the application.

## Project Structure

```
src/
├── app/          # Next.js 13 App Router
├── components/   # Reusable UI components
├── lib/         # Utility functions and shared logic
├── generated/    # Generated Prisma client
└── middleware.ts # Authentication middleware
```

## Default Admin Credentials

- Email: admin@realestate.com
- Password: Teka2019

## License

MIT
