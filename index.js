const express = require('express');
const app = express();
const port = process.env.PORT || 4040;
const homeRouter = express.Router();
const projectRouter = express.Router();

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
    res.send('My Projects')
});

projectRouter.get('/:id', (req, res) => {
    res.send('A one project')
});


app.use('/', homeRouter);
app.use('/api/projects', projectRouter);

app.listen(port, (err) => {
    if(err){
        throw new Error('Something...');
    }
    console.log(`Server is listening on port ${port}.`)
});