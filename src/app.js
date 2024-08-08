const express = require('express');
const router = require('./routers/router');
const router_users = require('./routers/router-users');
const router_auth = require('./routers/router-auth');

const app = express();
app.use(express.json());

app.use(router);
app.use(router_users);
app.use(router_auth);

module.exports = app;
