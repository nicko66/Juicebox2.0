const express = require('express');
const { getAllTags } = require('../db');
const postsRouter = express.Router();

tagsRouter.use((req, res, next) => {
    console.log('a tag has been made to /tags');

    res.send({ message: 'hello from /tags'})
});


tagsRouter.get('/', async (req, res) => {
    const users = await getAllTags();

    res.send({
      users
    });
  });
  

module.exports = tagsRouter;