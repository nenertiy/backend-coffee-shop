# Backend Coffee Shop - Built with NestJS, Prisma, and PostgreSQL

This repository contains the backend of a Coffee Shop application, built using **NestJS** for a modular and maintainable structure, **Prisma** as the ORM for interacting with a **PostgreSQL** database, and designed to provide APIs for managing products, categories, orders and users. For the frontend of this application, check out the **[Frontend Coffee Shop](https://github.com/nenertiy/frontend-coffee-shop)** built with React, TypeScript, and Vite.

## Features:
- **NestJS**: A scalable and modular framework for building server-side applications.
- **Prisma ORM**: Simplifies database access and queries for PostgreSQL.
- **PostgreSQL**: Relational database used for storing coffee shop data (products, orders, users).
- **Environment Configuration**: Easily configurable via an `.env` file for PostgreSQL connection.

## Tech Stack:
- **NestJS** - Backend framework
- **Prisma** - ORM for database management
- **PostgreSQL** - Relational database
- **TypeScript** - Primary language for the backend

## Setting Up the Project

### Step 1: Clone the Repository
```bash
git clone https://github.com/nenertiy/backend-coffee-shop.git
```

### Step 1: Clone the Repository
Navigate to the project folder and install the required packages:
```bash
cd backend-coffee-shop
npm install
```

### Step 3: Configure Environment Variables
Create a .env file in the root of your project and provide the PostgreSQL connection information:
```bash
DATABASE_URL="postgresql://<username>:<password>@<host>:<port>/<database-name>?schema=public"
```

### Step 4: Run Database Migrations
Run the Prisma migrations to set up your PostgreSQL database schema:
```bash
npm run start:dev
```

### Step 5: Start the Development Server
Once the database is set up, start the NestJS development server:
```bash
npm run start:dev
```

