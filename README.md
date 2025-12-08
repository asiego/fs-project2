# Project 2 REST API

A simple REST API, built with **Node.js**, **Express**, and **MongoDB**.  
This API allows you to create, read, update, and delete items.

---

## Endpoints

| Method | Endpoint              | Description                 |
|--------|----------------------|-----------------------------|
| GET    | `/api/items`          | Get all items               |
| GET    | `/api/items/:id`      | Get a single item by ID     |
| POST   | `/api/items`          | Create a new item           |
| PUT    | `/api/items/:id`      | Update an existing item     |
| DELETE | `/api/items/:id`      | Delete an item              |

Optional:

| Method | Endpoint       | Description                    |
|--------|----------------|--------------------------------|
| GET    | `/api/routes`  | List all available API routes  |
| GET    | `/`            | Landing page / welcome message |

---

## Getting Started (Locally)

1. **Clone the repo**

```bash
git clone <your-repo-url>
cd <repo-folder>

2. Install dependencies

npm install

3. Create a .env file in project root with MongoDB connection string:

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<your-db-name>

4. Start the server

npm start

5. Test the API

Open http://localhost:3000/api/items in your browser, Postman, curl etc.

---

# Tech stack
* Node.js

* Express

* MongoDB Atlas

* Mongoose

* dotenv

* cors