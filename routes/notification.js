const express = require('express');

const Notification = require('../models/notifications');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getNotifications, createNotification} = require('../controllers/notifications');

const router = express.Router();

router.get('/getnotifications', getNotifications);

router.post('/notifications/post',createNotification);

module.exports = router;