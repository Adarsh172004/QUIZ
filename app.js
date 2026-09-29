const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Quiz data
const quizzes = {
  science: [
    { id: 1, q: 'What is the chemical symbol for Gold?', options: ['Au', 'Ag', 'Pb', 'Fe'], answer: 0 },
    { id: 2, q: 'What is the largest planet in our solar system?', options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'], answer: 1 },
    { id: 3, q: 'How many bones are in the human body?', options: ['186', '206', '226', '246'], answer: 1 }
  ],
  history: [
    { id: 1, q: 'In what year did World War II end?', options: ['1943', '1944', '1945', '1946'], answer: 2 },
    { id: 2, q: 'Who was the first President of the USA?', options: ['Jefferson', 'Washington', 'Adams', 'Madison'], answer: 1 },
    { id: 3, q: 'Which ancient wonder still stands today?', options: ['Colossus', 'Great Pyramid', 'Lighthouse', 'Mausoleum'], answer: 1 }
  ],
  geography: [
    { id: 1, q: 'What is the capital of France?', options: ['Lyon', 'Paris', 'Marseille', 'Nice'], answer: 1 },
    { id: 2, q: 'Which is the longest river in the world?', options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'], answer: 1 },
    { id: 3, q: 'How many continents are there?', options: ['5', '6', '7', '8'], answer: 2 }
  ]
};

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/quiz/:category', (req, res) => {
  const category = req.params.category;
  if (quizzes[category]) {
    res.json({ success: true, questions: quizzes[category] });
  } else {
    res.status(404).json({ success: false, message: 'Category not found' });
  }
});

app.post('/api/submit', (req, res) => {
  const { answers, category } = req.body;
  const quiz = quizzes[category];
  
  if (!quiz) {
    return res.status(404).json({ success: false, message: 'Category not found' });
  }

  let score = 0;
  const results = answers.map((ans, idx) => {
    const isCorrect = ans === quiz[idx].answer;
    if (isCorrect) score++;
    return { questionId: quiz[idx].id, correct: isCorrect };
  });

  const percentage = (score / quiz.length) * 100;
  res.json({ 
    success: true, 
    score, 
    total: quiz.length, 
    percentage: Math.round(percentage), 
    results 
  });
});

app.get('/api/categories', (req, res) => {
  res.json({ categories: Object.keys(quizzes) });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Quiz app running at http://localhost:${PORT}`);
});
