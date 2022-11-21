const express = require('express');
const { getAllPosts } = require('../db');
const postsRouter = express.Router();


postsRouter.use((req, res, next) => {
    console.log('a post has been made to /posts');

    res.send({ message: 'hello from /posts'})
});


postsRouter.get('/', async (req, res) => {
    const users = await getAllPosts();

    res.send({
      users
    });
  });
  

module.exports = postsRouter;