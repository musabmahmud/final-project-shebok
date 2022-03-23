const express = require("express");

const accounts = require('../models/accounts');

const mongoose = require('mongoose');


exports.getAccounts = async (req, res) => {
    accounts.findOne({ email: req.body.email, password: req.body.password }).exec((error, account) => {
        if (account) {
            res.status(200).json(account);
        }
        else {
            return res.status(400).json({ error });
        }
    });
};

exports.createAccount = async (req, res) => {

    accounts.findOne({ email: req.body.email }).exec((error, account) => {
        if (account) {
            return res.status(400).json({
                message: "User Already Exists",
            });
        }
        else{
            const account = req.body;

            const newAccounts = new accounts({
                ...account,
                createdAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
                updatedAt: new Date().toLocaleString('en-BD', { timeZone: 'UTC' }),
            });
        
            try {
                newAccounts.save();
                res.status(201).json(newAccounts);
            } catch (error) {
                res.status(409).json({ message: error.message });
            }
        }
    });
};