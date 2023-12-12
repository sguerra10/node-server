const express = require('express');
const ServicesMiddlewares = require('../services/Middlewares')
const profile = require('./profile')
const editTask = require("./crudTask/list-edit-router")
const viewTask = require("./crudTask/list-view-router")
const auth = require('./auth')

const Middlewares = new ServicesMiddlewares();

function routerApi(app) {
    const router = express.Router()
    app.use(express.json());
    app.use(Middlewares.handelRequest);
    app.use('/api/v1', router);
    router.use('/auth', auth)
    router.use('/profile', profile)
    router.use('/task', viewTask);
    router.use('/task', editTask);
}
module.exports = routerApi;

