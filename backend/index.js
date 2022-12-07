const express = require('express');
const cors = require('cors');
require('./db/config');
const Team = require("./db/Team");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/add_team", async (req, resp) => {
    let team = new Team(req.body);
    let result = await team.save();
    resp.send(result);
})

app.listen(5000);