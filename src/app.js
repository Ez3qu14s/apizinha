const express = require('express');
const router = require('./routers/router');
const router_users = require('./routers/router-users');

const app = express();
app.use(express.json());

app.use(router);
app.use(router_users);

module.exports = app;
