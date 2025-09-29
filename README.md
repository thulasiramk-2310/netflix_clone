<h1 align="center">MERN Netflix Clone 🎬</h1>



## About This Project

A full-stack Netflix clone built with the MERN stack that replicates core Netflix functionality including user authentication, movie browsing, search, and watch history.

### 🚀 Features

-    **Tech Stack:** React.js, Node.js, Express.js, MongoDB, Tailwind CSS
-    **Authentication:** JWT-based user authentication
-    **Responsive Design:** Works on all device sizes
-    **Movie/TV Show Catalog:** Browse trending content
-    **Search Functionality:** Search for movies, TV shows, and actors
-    **Trailer Streaming:** Watch movie trailers
-    **Search History:** Track and view search history
-    **Similar Content:** Get recommendations based on content
-    **Landing Page:** Beautiful Netflix-style homepage
-    **Deployment Ready:** Configured for production deployment

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (or local MongoDB)
- TMDB API key

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mern-netflix-clone
```

### 2. Install Dependencies
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/netflix_db?retryWrites=true&w=majority&appName=netflix
NODE_ENV=development
JWT_SECRET=your_secret_jwt_key
TMDB_API_KEY=your_tmdb_api_key
```


#### Getting Your API Keys:

**MongoDB Atlas:**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create database user with username/password
4. Get connection string and replace `username:password` with your credentials

**TMDB API:**
1. Create account at [TMDB](https://www.themoviedb.org/)
2. Go to Settings > API
3. Create new API key
4. Copy the API Read Access Token

### 4. Run the Application

#### Development Mode (Recommended)
Open two terminal windows:

**Terminal 1 - Backend Server:**
```bash
# From project root
node backend/server.js
```

**Terminal 2 - Frontend Server:**
```bash
# From project root
cd frontend
npm run dev
```

#### Alternative: Using npm scripts
```bash
# Build the app
npm run build

# Start production server
npm run start
```

### 5. Access the Application

- **Frontend:** http://localhost:5173/
- **Backend API:** http://localhost:5000/

## 🎯 Usage

1. **Sign Up:** Create a new account
2. **Login:** Access your account
3. **Browse:** Explore movies and TV shows
4. **Search:** Find specific content or actors
5. **Watch:** Click on content to view details and trailers
6. **History:** View your search history

## 📁 Project Structure

```
mern-netflix-clone/
├── backend/
│   ├── config/         # Database and environment configuration
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── services/       # External API services
│   ├── utils/          # Utility functions
│   └── server.js       # Express server
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── hooks/      # Custom hooks
│   │   ├── pages/      # Page components
│   │   ├── store/      # State management
│   │   └── utils/      # Utility functions
│   └── package.json
├── .env                # Environment variables
└── package.json        # Backend dependencies
```

## 🚨 Troubleshooting

### Common Issues:

**MongoDB Connection Error:**
- Verify your MongoDB URI is correct
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure username/password are correct

**TMDB API Error:**
- Verify your API key is valid
- Check if you're using the Read Access Token (not just API key)

**Port Already in Use:**
- Change PORT in .env file
- Kill processes using ports 5000 or 5173

**Frontend Can't Connect to Backend:**
- Ensure backend is running on port 5000
- Check proxy configuration in vite.config.js



## 🙏 Acknowledgments
- [TMDB](https://www.themoviedb.org/) for providing the movie database API
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [Netflix](https://netflix.com) for design inspiration

