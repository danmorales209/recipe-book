require('dotenv').config();
const express = require('express');
const http = require("http")
const port = process.env.PORT || 3001;
const path = require('path');
const routes = require("./api")
const {Router} = express;
Router.use(routes)


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("pantry-app/dist"))
}

app.listen(port, () => {
    console.log('Sup brah?')
})
