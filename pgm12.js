const express = require("express");
const app = express();

app.use(express.json());

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});