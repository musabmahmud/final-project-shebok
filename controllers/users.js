const express = require("express");

const users = require('../models/users');

const mongoose = require('mongoose');


exports.getUsers = (req, res) => {
    users.find().limit(req.query.limit).exec((error, user) => {
    if (user) {
      res.status(200).json( user );
    }
    else{
      return res.status(400).json({ error });
    }
  });
};


exports.createUser = async (req, res) => {
  const user = req.body;

  let profilePicture = [];
    if(req.files > 0) {
      profilePicture = req.files.map(file => {
            return {img: file.filename};
        })
    }

  const newUsers = new users({
    ...user,
    profilePicture,
    status: 1,
    createdAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
  });

  try {
    await newUsers.save();
    res.status(201).json(newUsers);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};