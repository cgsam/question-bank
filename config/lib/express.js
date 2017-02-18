/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 2/16/2017
 */

'use strict';

var express = require('express'),
    config = require('../config'),
    path = require('path'),
    app = express();

module.exports.initModulesServerRoutes = function(app){
    config.files.server.routes.forEach(function(route){
        require(path.resolve(route))(app);
    })
};

module.exports.init = function(){
    this.initModulesServerRoutes(app);
    return app;
};
