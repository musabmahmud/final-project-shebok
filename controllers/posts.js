const express = require("express");

const posts = require('../models/posts');

const mongoose = require('mongoose');


exports.getPosts = (req, res) => {
  posts.find({}).exec((error, post) => {
    if (post) {
      res.status(200).json( post );
      // return console.log("paise");
    }
    else{
      return res.status(400).json({ error });
      // return console.log("nia");
    }
  });
};

exports.createPost = async (req, res) => {
  const post = req.body;

  const newPosts = new posts({
    ...post,
    createdAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
  });

  try {
    await newPosts.save();
    res.status(201).json(newPosts);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};