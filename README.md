# TalkMore - Chat Application

This is a real-time chat application built using the **MERN stack** (MongoDB, Express, React, Node.js) with **Socket.io** for instant messaging. The application supports user authentication, message handling, and modern, responsive UI features.

## Features

- **Real-Time Messaging**: Users can send and receive messages in real-time using Socket.io.
- **Authentication**: Secure authentication using **JWT tokens** stored in cookies.
- **Message History**: Stores message history for each conversation.
- **Message Deletion**: Users can delete their messages, and the UI reflects these changes instantly.
- **Responsive Design**: Fully responsive and modern UI design.
- **Notifications**: Real-time notifications using `react-hot-toast`.
  
## Technologies Used

- **Frontend**:
  - **React** (with Vite for fast builds)
  - **Socket.io-client** for real-time updates
  - **React-hot-toast** for notifications
  - **JWT Tokens** for user authentication
  - **CSS3** for styling and UI responsiveness
  
- **Backend**:
  - **Node.js** with **Express**
  - **Socket.io** for real-time communication
  - **MongoDB** (Local instance) for data storage
  - **Mongoose** for database schema modeling
  - **JWT** for secure authentication
  
## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14+)
- MongoDB (installed locally or MongoDB Atlas)
- NPM or Yarn

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/TalkMore.git
    cd TalkMore/backend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file for environment variables:
    ```bash
    MONGO_URI=mongodb://localhost:27017/chatapp
    JWT_SECRET=your_jwt_secret_key
    ```

4. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd ../frontend
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

### Running the Application

- The backend will run on `http://localhost:5000`
- The frontend will run on `http://localhost:5173`
