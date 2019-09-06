var mongoose = require('mongoose');

// Schema of a progress.
var eventSchema = mongoose.Schema({
    week: Number,
    range: String,
    events: [
        {
            eventname: String,
            image: String,
            date: String,
            time: String,
            location: String,
            roomNo : String,
            organization: String,
            description: String,
            link: [{
                name: String,
                url: String
            }]
        }
    ]
});

// Export the Events model.
module.exports = mongoose.model("Events", eventSchema);