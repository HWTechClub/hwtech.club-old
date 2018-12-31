var mongoose = require('mongoose');


var Progress = mongoose.model('Progress', {
    team: {
      type: String
    },
    location:{
      type: String
    },
    week:{
      type: String
    }
  },'progress');
  
  module.exports = {Progress};