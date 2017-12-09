
const express = require('express');
const cors = require('cor');
const { json } = require('body-parser');

const app = express();

app.use(cors());
app.use(json());

const port = 3001;

const controller = require("./controllers/control.js");

app.post("/api/getApiData", controller.getApiData);


app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});