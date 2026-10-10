const express = require("express");
const app = express();

const port = 9090;

app.get("/", (req, res) => {
    res.send("this is root path");
    console.log("this path successfull");
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
