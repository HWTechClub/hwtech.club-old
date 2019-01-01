var mongoose = require('mongoose');

// Schema of a progress.
var progressSchema = mongoose.Schema({
  team: String,
  date: String,
  subject: String,
  memo: String
});

// Export the progress model.
module.exports = mongoose.model("Progress", progressSchema);

// Old Code:

// var Progress = mongoose.model('Progress', {
//     team: {
//       type: String
//     },
//     location:{
//       type: String
//     },
//     week:{
//       type: String
//     }
//   },'progress');
  
//   module.exports = {Progress};