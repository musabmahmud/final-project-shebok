
const express = require("express");

const notifications = require('../models/notifications');

const mongoose = require('mongoose');


exports.getNotifications = (req, res) => {
    notifications.find({}).exec((error, notification) => {
    if (notification) {
      res.status(200).json( notification );
    }
    else{
      return res.status(400).json({ error });
    }
  });
};

exports.createNotification = async (req, res) => {
  const notification = req.body;

  const newNotifications = new notifications({
    ...notification,
    createdAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
  });

  try {
    await newNotifications.save();
    res.status(201).json(newNotifications);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};