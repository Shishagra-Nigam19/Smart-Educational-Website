const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

const questionPapersDirectory = './QuestionPapers';

app.get('/years', (req, res) => {
  fs.readdir(questionPapersDirectory, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      res.status(500).json({ error: 'Failed to retrieve years' });
    } else {
      const years = files.filter(file => fs.statSync(path.join(questionPapersDirectory, file)).isDirectory());
      res.json({ years });
    }
  });
});

app.get('/questionPapers/:year', (req, res) => {
  const year = req.params.year;
  const yearDirectory = path.join(questionPapersDirectory, year);

  fs.readdir(yearDirectory, (err, files) => {
    if (err) {
      console.error(`Error reading directory: ${err}`);
      res.status(500).json({ error: 'Failed to retrieve question papers' });
    } else {
      const questionPapers = files.filter(file => fs.statSync(path.join(yearDirectory, file)).isFile());
      res.json({ questionPapers });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});