# 🏨 Hotel Management Dashboard

A modern **Hotel Management Web Application** built for hotel employees to efficiently manage cabins, bookings, guests, and daily hotel operations.

🔗 **Live Demo:**  
https://ultimate-react-lemon.vercel.app/login

---

## 📌 Project Overview

This application is designed exclusively for **hotel staff**.  
New users can only be created **inside the application**, ensuring that only authorized employees get access.

The app provides a complete workflow for:
- Managing cabins
- Handling bookings and check-ins
- Tracking payments and breakfast add-ons
- Viewing hotel analytics and sales insights

---

## ✨ Features

### 🔐 Authentication & Users
- Secure authentication using **Supabase**
- Only logged-in hotel employees can access the app
- New users can be created inside the application
- Users can:
  - Upload avatar
  - Update name and password

---

### 🛏️ Cabin Management
- Table view showing:
  - Cabin photo
  - Name
  - Capacity
  - Price
  - Discount
- Create new cabins (with image upload)
- Update or delete existing cabins

---

### 📅 Booking Management
- View all bookings with:
  - Arrival & departure dates
  - Booking status
  - Paid amount
  - Cabin & guest details
- Booking statuses:
  - `unconfirmed`
  - `checked in`
  - `checked out`
- Filter bookings by status
- Actions available:
  - Delete booking
  - Check-in
  - Check-out

---

### 💳 Payments & Breakfast
- Bookings may not be paid at arrival
- During **check-in**, users can:
  - Confirm payment received (outside the app)
  - Mark payment as received inside the app
- Guests can add **breakfast for the entire stay** at check-in

---

### 👤 Guest Information
Each guest includes:
- Full name
- Email
- National ID
- Nationality
- Country flag for quick identification

---

### 📊 Dashboard & Analytics
The dashboard displays data for the last **7 / 30 / 90 days**, including:
- Guests checking in and out today
- Recent bookings and sales
- Occupancy rate
- Daily hotel sales:
  - Total sales
  - Extras (breakfast)
- Stay duration statistics

---

### ⚙️ Application Settings
Admins can configure:
- Breakfast price
- Minimum and maximum nights per booking
- Maximum guests per booking

---

### 🌙 UI & UX
- Fully responsive design
- Dark mode support
- Clean and modern UI
- Toast notifications for actions and errors

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- React Router DOM
- Tailwind CSS
- React Hook Form
- Recharts
- React Icons
- Date-fns

### State & Data Handling
- @tanstack/react-query
- React Error Boundary

### Backend / Auth
- Supabase (Authentication, Database, Storage)

---

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.12.0",
  "@supabase/supabase-js": "^2.90.1",
  "@tanstack/react-query": "^5.90.18",
  "react-hook-form": "^7.71.1",
  "react-hot-toast": "^2.6.0",
  "recharts": "^3.7.0",
  "tailwindcss": "^4.1.18",
  "date-fns": "^4.1.0"
}
