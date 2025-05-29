# Book API - Node.js & Express

A simple REST API for managing books.

## Features
- CRUD operations (Create, Read, Update, Delete)
- In-memory storage (no database required)

## How to Run
1. Clone this repo:
   ```sh
   git clone https://github.com/UrvasMohanty/Rest-API.git
2. Install dependencies:

    ```sh
    npm install
3. Start the server:

    ```sh
    node server.js
API Endpoints
GET /books → List all books

POST /books → Add a new book

PUT /books/:id → Update a book

DELETE /books/:id → Remove a book

---

### **Method 2: Using Git Commands (Recommended for Developers)**
If you're comfortable with Git, follow these steps:

#### **Step 1: Initialize Git (If Not Done Already)**
```sh
   cd book-api
   git init
Step 2: Create a .gitignore File
sh
echo "node_modules/" >> .gitignore
Step 3: Commit Files
sh
git add .
git commit -m "Initial commit: Basic Book API"
Step 4: Connect to GitHub & Push
Go to your GitHub repo and copy the remote URL (HTTPS or SSH).

Run:

sh
git remote add origin https://github.com/yourusername/book-api.git
git branch -M main
git push -u origin main



