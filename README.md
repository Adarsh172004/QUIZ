# Minimal Quiz App

A super simple quiz application built with Express.js

## Features
- ✨ 3 Quiz Categories (Science, History, Geography)
- 📊 Score calculation and feedback
- 🎨 Beautiful UI with gradient design
- ⚡ Fast and lightweight

## Installation

1. Navigate to the project:
```bash
cd minimal-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

4. Open your browser and go to:
```
http://localhost:3000
```

## Project Structure
```
minimal-quiz/
├── app.js              # Main Express server
├── package.json        # Dependencies
├── README.md          # This file
└── public/
    └── index.html     # Quiz UI
```

## API Endpoints
- `GET /` - Main quiz page
- `GET /api/categories` - Get all quiz categories
- `GET /api/quiz/:category` - Get quiz questions for a category
- `POST /api/submit` - Submit quiz answers

## How to Use
1. Select a quiz category
2. Answer all questions
3. Click "Submit Quiz"
4. See your score and feedback
5. Click "Try Again" to retry

## To Add More Questions
Edit the `quizzes` object in `app.js` and add more questions to any category!

Enjoy! 🎯
