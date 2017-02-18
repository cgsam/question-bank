/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 2/17/2017
 */

'use strict';

module.exports.validateId = function(req, res, next, id) {
    console.log("Incomming ID ::: "+id);
    next();
};