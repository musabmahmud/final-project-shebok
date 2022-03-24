const express = require("express");

const foods = require('../models/foods');

const mongoose = require('mongoose');


exports.getFoods = (req, res) => {
    foods.find({}).exec((error, food) => {
    if (hire) {
      res.status(200).json( food );
    }
    else{
      return res.status(400).json({ error });
    }
  });
};

exports.createFood = async (req, res) => {
  const food = req.body;

  const newFoods = new hires({
    ...food,
    createdAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
  });

  try {
    await newFoods.save();
    res.status(201).json(newFoods);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};