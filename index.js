const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "success",
        message: "API is working"
    });
});

app.get("/users", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Users fetched successfully",
        data: [
            { id: 1, name: "Rahul" },
            { id: 2, name: "Priya" }
        ]
    });
});

app.post("/users", (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            status: "error",
            message: "Name is required"
        });
    }

    res.status(201).json({
        status: "success",
        message: "User created successfully",
        data: { name: name }
    });
});

module.exports = app;