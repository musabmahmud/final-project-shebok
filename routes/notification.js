const express = require('express');

const Notification = require('../models/notifications');

// router.get('/posts', (req, res)=>{
//     res.send("we are on posts");
// });

const {getNotifications, createNotification, updateNotification} = require('../controllers/notifications');

const router = express.Router();

router.post('/getnotifications', getNotifications);

router.post('/notifications/post',createNotification);

router.post('/notifications/update', updateNotification);

module.exports = router;