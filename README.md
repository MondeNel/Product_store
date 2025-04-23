# Product_store (MERN STACK)

A full-stack Product Store web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create, update, view, and delete product items with a seamless and responsive interface.

---

## Features

- View a list of all products
- Create new products with name, price, and image URL
- Edit and update existing products
- Delete products
- Toast notifications for feedback
- Modal interface for editing

---

## Tech Stack

### Frontend:
- React.js
- Chakra UI for styling
- Zustand for state management
- Vite for fast bundling and development

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose ODM

---

## System Architecture Diagram

```text
        +-------------------+
        |   React Frontend  |
        | (Vite + ChakraUI) |
        +--------+----------+
                 |
                 |  HTTP Requests (CRUD)
                 v
        +--------+----------+
        |     Express.js     |
        |    REST API        |
        +--------+----------+
                 |
                 | Mongoose ODM
                 v
        +--------+----------+
        |      MongoDB       |
        |   (Product Data)   |
        +-------------------+
```

---

## How to Run This Project Locally

### Prerequisites
- Node.js and npm installed
- MongoDB installed or a cloud instance (MongoDB Atlas)

### Clone the Repository
```bash
git clone https://github.com/MondeNel/Product_store.git
cd PRODUCT_STORE        
```

### 1. Start the Backend
```bash
cd backend
npm install
npm run dev
```

Make sure your MongoDB URI is set in the `.env` file:
```env
MONGO_URI=mongodb://localhost:27017/product_store
PORT=5000
```

### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
```

The application will be running at `http://localhost:5173`.

---

## Folder Structure
```bash
product_store/
├── frontend/             # React Frontend
│   ├── components/
│   ├── store/            # Zustand store
│   └── ...
├── backend/              # Express Backend
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   └── ...
└── README.md
```


## License
This project is licensed under the MIT License.

