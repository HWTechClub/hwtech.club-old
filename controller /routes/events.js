var express = require('express');
var router = express.Router();

// Require team events model.
var Events = require('../../model/events');

// GET team progress home page.
router.get('/', function (req, res, next) {

    Events.find({}, function (err, result) {
        // If any errors, console log it and redirect users to the team memo page.
        if (err) {
            console.log(err);
            return res.redirect("/",{ title: 'Heriot Watt - Tech Club' });
        }
        // Else, display the progress memo page.
        else {
            console.log(result);
            return res.render('events', { title: 'Heriot Watt - Tech Club', events: result });
        }
    });

});



module.exports = router;