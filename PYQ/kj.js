// Sample data for question papers (you can replace this with your actual data)
const questionPapers = [
    { title: "Mathematics 2022", link: "" },
    { title: "Physics 2022", link: " " },
    { title: "Chemistry 2022", link: "  " },

    {title: "Mathematics 2021", link: " "},
    {title: "Physics 2021", link: "  "},
    {title: "chemistry 2021", link: " "},

    
    {title: "Mathematics 2020", link: " "},
    {title: "Physics 2020", link: "  "},
    {title: "chemistry 2020", link: " "},

    
    {title: "Mathematics 2019", link: " "},
    {title: "Physics 2019", link: "  "},
    {title: "chemistry 2019", link: " "},

    
    {title: "Mathematics 2018", link: " "},
    {title: "Physics 2018", link: "  "},
    {title: "chemistry 2018", link: " "},

    
    {title: "Mathematics 2017", link: " "},
    {title: "Physics 2017", link: "  "},
    {title: "chemistry 2017", link: " "},

    
];

// Function to display question papers
function displayQuestionPapers() {
    const papersContainer = document.getElementById("papers");

    questionPapers.forEach(paper => {
        const paperLink = document.createElement("a");
        paperLink.href = paper.link;
        paperLink.textContent = paper.title;
        paperLink.classList.add("paper-link");

        papersContainer.appendChild(paperLink);
    });
}
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