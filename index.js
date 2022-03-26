const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

const app = express();
const port = 3000;

// getting-started.js
const mongoose = require('mongoose');

app.listen(port, () => console.log('Server started : ' + port));

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}