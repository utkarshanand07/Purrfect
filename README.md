# Meowssenger

![Meowssenger Logo](https://raw.githubusercontent.com/utkarshanand07/Purrfect/main/client/public/logo_black.png)

**Meowssenger** is a real-time chat application built using modern web technologies. It provides seamless and efficient messaging with a sleek UI, powered by **React** and **TailwindCSS** on the frontend, and **Express.js** with **Socket.io** on the backend. The application leverages **MongoDB** for database management and **Cloudinary** for media storage.

## 🚀 Features

- **Real-time messaging** with WebSockets (Socket.io)
- **Authentication & Authorization** using JWT
- **User-friendly UI** with TailwindCSS
- **Media Upload** via Cloudinary
- **MongoDB** for scalable database storage
- **Optimized performance** with production-ready build commands
- **Secure environment variables** support

## 🛠️ Tech Stack

### Frontend:
- React.js
- TailwindCSS

### Backend:
- Node.js with Express.js
- Socket.io for real-time communication

### Database:
- MongoDB with Mongoose

### Cloud Storage:
- Cloudinary (for media uploads)

## 📂 Project Structure
```
Purrfect/
│── client/  # Frontend (React + TailwindCSS)
│── server/  # Backend (Express + Socket.io)
│── .env     # Environment variables
│── package.json  # Dependencies and scripts
│── README.md  # Project documentation
```

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/utkarshanand07/Purrfect.git
cd Purrfect
```

### 2️⃣ Install Dependencies
#### Client
```sh
cd client
npm install
```
#### Server
```sh
cd server
npm install
```

### 3️⃣ Setup Environment Variables
Create a `.env` file in the `server/` directory with the following format:
```ini
MONGODB_URI=
PORT=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### 4️⃣ Run the Application
#### Start Frontend & Backend (Development Mode)
```sh
# In client/
npm run dev

# In server/
npm run dev
```

#### Run in Production Mode
```sh
# Build frontend
cd client
npm run build

# Start the full app
cd ..
npm start
```

## 📜 API Endpoints
### Authentication
| Method | Endpoint      | Description          |
|--------|--------------|----------------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login an existing user |

### Messaging
| Method | Endpoint            | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/messages`    | Fetch all messages       |
| POST   | `/api/messages`    | Send a new message       |

### User
| Method | Endpoint            | Description               |
|--------|--------------------|---------------------------|
| GET    | `/api/user/:id`    | Get user profile         |
| PUT    | `/api/user/:id`    | Update user profile      |

## 🚀 Deployment
For deploying Meowssenger, make sure you:
1. Set up a MongoDB Atlas instance.
2. Configure Cloudinary for media storage.
3. Use a process manager like **PM2** for server uptime.
4. Deploy frontend on **Vercel** or **Netlify**.
5. Deploy backend on **Render** or **Heroku**.

## 🎯 Contribution
We welcome contributions! Follow these steps to contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m "Add new feature"`.
4. Push the changes: `git push origin feature-branch`.
5. Create a Pull Request.

## 📄 License
This project is licensed under the **MIT License**.

## 🐾 Connect With Us
- **Project Link:** [Meowssenger on GitHub](https://github.com/utkarshanand07/Purrfect)
- **Author:** [Utkarsh Anand](https://github.com/utkarshanand07)

---

⭐ **If you like this project, consider giving it a star!** ⭐
