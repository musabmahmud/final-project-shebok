
const express = require("express");

const notifications = require('../models/notifications');

const mongoose = require('mongoose');


exports.getNotifications = (req, res) => {
  notifications.find({ email: req.body.email }).exec((error, notification) => {
    if (notification) {
      return res.status(200).json(notification);
    }
    else {
      return res.status(400).json({ error });
    }
  });
};

exports.createNotification = async (req, res) => {
  const notification = req.body;

  const newNotifications = new notifications({
    ...notification,
    status: true,
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


exports.updateNotification = async (req, res) => {
  try {
    let newNotifications  = await notifications.findOneAndUpdate({_id : req.body._id}, {status: false}, {
      new: true
    });
    res.status(201).json(newNotifications);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};