// var path = require("path");
var reservations = require('../data/reservationsdata.js');
var waitlist = require('../data/waitlistdata.js');


module.export = function(app){
    /*  ########################## */ 
    // create endpoint 'waitlist'
    app.get('/api/waitlist', function(req, res){
        res.json(waitlist);
    });

    // create endpoint 'tables'
    app.get('/api/tables', function(req, res){
        res.json(reservations);
    });
    /*  ########################## */ 

    // app.post new reservation
    app.post('/api/tables', function(req, res){
        // evaluate length of reservations array
        if (reservations.length < 5) {
            push.reservations(req.body);
            res.json(true);
        }else {
            push.waitlist(req.body);
            res.json(false);
        }
        // if <5, push the req.body object to reservations
        // if >5, push the req.body object to waitlist
        // return boolean to indicate success to front end
    })

    app.post('/api/clear', function(req, res){
        reservations = [];
        waitlist = [];
        res.json(true);
    })

};