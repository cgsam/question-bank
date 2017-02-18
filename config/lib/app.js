/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 2/16/2017
 */
'use strict';

var express = require('./express'),
    config = require('../config'),
    app = express.init();

module.exports.start = function(){
    app.listen(config.port, function(){
        console.log('Application running on port :: '+config.port);
    });
};
