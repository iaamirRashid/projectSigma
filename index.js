const express = require("express");
const app = express();

const port = 9090;

app.get("/", (req, res) => {
    res.send("this is root path");
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})