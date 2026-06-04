# AI-Powered Cold Outreach Message Generator

An AI-powered SaaS web application that generates personalized cold outreach messages for job applications, networking, and recruiter outreach using Google's Gemini API.

## Features

* Generate personalized cold outreach messages using Gemini AI
* Custom inputs for company, role, and recruiter name
* Save generated messages to MongoDB Atlas
* View message history
* Responsive React frontend
* RESTful Node.js/Express backend
* Cloud deployment using Vercel and Render
* Production-ready environment configuration

## Tech Stack

### Frontend

* React
* Vite
* Axios
* CSS

### Backend

* Node.js
* Express.js
* Gemini API
* MongoDB Atlas
* Mongoose

### Deployment

* Vercel (Frontend)
* Render (Backend)

## Architecture

User Input → React Frontend → Express API → Gemini API → MongoDB Atlas → Response Display

## Screenshots

(Add screenshots here)

## Installation

### Clone Repository

```bash
git clone https://github.com/AI-vish/cold-outreach-generator.git
cd cold-outreach-generator
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URI
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Start Backend:

```bash
npm run dev
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000
```

Start Frontend:

```bash
npm run dev
```

## API Endpoints

### Generate Message

```http
POST /api/messages/generate
```

Request Body:

```json
{
  "company": "OpenAI",
  "role": "Machine Learning Engineer",
  "recruiter": "John Doe"
}
```

### Get Message History

```http
GET /api/messages
```

## Example Workflow

1. Enter company name
2. Enter target role
3. Enter recruiter name (optional)
4. Generate AI-powered outreach message
5. Save message automatically to MongoDB
6. View previous messages in history

## Learning Outcomes

* Full-stack MERN development
* REST API development
* Gemini API integration
* Environment variable management
* MongoDB Atlas integration
* Cloud deployment using Vercel and Render
* Production-ready application configuration

## Future Improvements

* User authentication
* Export messages as PDF
* Multiple outreach templates
* Message analytics
* Multi-model LLM support
* Prompt customization

## Author

**Vishal Thangakumar**

* LinkedIn: https://linkedin.com/in/vishalgtk
* GitHub: https://github.com/AI-vish
