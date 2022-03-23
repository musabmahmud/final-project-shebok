const express = require("express");

const hires = require('../models/hires');

const mongoose = require('mongoose');


exports.getHires = (req, res) => {
    hires.find({}).exec((error, hire) => {
    if (hire) {
      res.status(200).json( hire );
    }
    else{
      return res.status(400).json({ error });
    }
  });
};

exports.createHire = async (req, res) => {
console.log(req);
  const hire = req.body;

  const newHires = new hires({
    ...hire,
    createdAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
  });

  try {
    await newHires.save();
    res.status(201).json(newHires);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};