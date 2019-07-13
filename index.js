const express = require('express');
const helmet = require('helmet');
// const chefRouter = require('./api/chef-router');
const db = require('./data/dbConfig');
const cors = require('cors');

const server = express();
server.use(cors());

server.use(express.json());
server.use(helmet());

// server.use('/', chefRouter);

// server.get('/', (req,res)=>{
//   res.send(`<h1>Test Port- ChefPortfolio</h1>`)
// })

server.get('/chefs', (req, res) => {
  db('chefs')
    .then(cooks => {
      res.status(200).json(cooks);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post('/chefs', async (req, res) => {
  try {
    const newchef = await db('chefs').insert(req.body);
    res.status(201).json({ message: 'chef added' });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Error adding chef'
    });
  }
});

server.get('/recipes', (req, res) => {
  db('recipes')
    .then(cooks => {
      res.status(200).json(cooks);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.post('/recipes', async (req, res) => {
  try {
    const project = await db('recipes').insert(req.body);
    res.status(201).json({ message: 'recipe added' });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Error adding recipe'
    });
  }
});


server.listen(5000, () => {
  console.log('\n* Server Running on http://localhost:5000 *\n');
});
