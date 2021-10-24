const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const homeRouter = express.Router();
const projectRouter = express.Router();
const connection = require('./db_config');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const getAllProjects = (req, res, next) => {
    req.message = "it's ok"
    next()
}

const getAllProjectsSuite = (req, res, next) => {
    res.send(req.message)
    next()
}

homeRouter.get('/', getAllProjects, getAllProjectsSuite, (req, res) => {
    res.send('Test')
});

projectRouter.get('/', (req, res) => {
  const sql = `SELECT * FROM projects`;
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'ressource not found or empty !' });
    } else {
      res.status(200).json(results);
    }
  });
});

projectRouter.get('/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM projects WHERE id=?';
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: err });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'ressource not found or empty !' });
    } else {
      res.status(200).json(results);
    }
  });
});


app.use('/', homeRouter);
app.use('/api/projects', projectRouter);

app.listen(port, (err) => {
    if(err){
        throw new Error('Something...');
    } 
    console.log(`Server is listening on port ${port}.`)
});