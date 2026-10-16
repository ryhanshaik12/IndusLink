# Backend Setup Guide

This guide will help you set up the MySQL backend for the IndusLink project.

## Prerequisites

1. **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
2. **MySQL** (v5.7 or higher) - [Download](https://dev.mysql.com/downloads/)
3. **npm** or **yarn**

## Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 2: Configure Database

1. Create a `.env` file in the `backend` directory:
   ```bash
   cd backend
   cp .env.example .env
   ```

2. Edit `.env` with your MySQL credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=induslink_db
   PORT=5000
   JWT_SECRET=your_secret_key_change_this
   CORS_ORIGIN=http://localhost:5173
   ```

## Step 3: Create Database

Run the setup script to create the database and tables:

```bash
npm run setup-db
```

Or manually create the database:

```bash
mysql -u root -p < database/schema.sql
```

## Step 4: Start Backend Server

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## Step 5: Configure Frontend

1. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

2. The frontend will automatically use `http://localhost:5000/api` if `VITE_API_URL` is not set.

## Step 6: Test the Setup

1. Start the backend server (should see "✅ MySQL Database connected successfully")
2. Start the frontend: `npm run dev`
3. Try registering a new user
4. Check the database to verify data is being stored

## API Endpoints

- **Health Check**: `GET http://localhost:5000/api/health`
- **Register**: `POST http://localhost:5000/api/auth/register`
- **Login**: `POST http://localhost:5000/api/auth/login`
- **Get Items**: `GET http://localhost:5000/api/items`

## Troubleshooting

### Database Connection Error
- Verify MySQL is running: `mysql -u root -p`
- Check `.env` file has correct credentials
- Ensure database exists: `SHOW DATABASES;`

### Port Already in Use
- Change `PORT` in `.env` file
- Or stop the process using port 5000

### CORS Errors
- Verify `CORS_ORIGIN` in backend `.env` matches your frontend URL
- Default is `http://localhost:5173` for Vite

## Database Schema

The database includes the following tables:
- `users` - User accounts (buyers and sellers)
- `items` - Marketplace items/materials
- `orders` - Order records
- `order_items` - Order line items
- `order_history` - Order status change history
- `cart` - Shopping cart items

## Next Steps

1. Seed initial data (optional)
2. Set up production environment variables
3. Configure SSL/HTTPS for production
4. Set up database backups

