const express = require('express');
const userModel = require('../models/user.model');

const authRouter = express.Router();

authRouter.post('/sign-up', async (req, res) => {
    const { name, email, password } = req.body;

    const isExists = await userModel.findOne({ email });

    if (isExists) {
        return res.status(400).json({
            message: "user already exists."
        });
    };

    const user = await userModel.create({
        name,
        email,
        password
    });

    res.status(201).json({
        message: "User registered successfully.",
        user
    });
});

module.exports = authRouter;