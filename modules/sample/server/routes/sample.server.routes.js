/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 2/17/2017
 */

'use strict';

var controller = require('../controllers/sample.server.controllers');

module.exports = function(app){

    app.route('/events/:id')
        .all(function(req, res, next) {
            console.log('Within Interceptor');
            next();
        })
        .get(function(req, res) {
            res.json({"message":"Got your GET request"});
        })
        .post(function(req, res) {
            res.json({"message":"Got your POST request"});
        });

    app.param('id',controller.validateId);
};