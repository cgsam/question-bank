/* Copyright (C) - All Rights Reserved
 * Written by sgnaneshwar, 2/17/2017
 */

'use strict';

module.exports.validateId = function(req, res, next, id) {
    console.log("Incomming ID ::: "+id);
    if(id.match(/^[0-9]+(-[0-9]+)+$/)){
       req.id = id;
        next();
    }else{
        res.send({code: "SMPL-1232", message:"Invalid ID"});
    }
};