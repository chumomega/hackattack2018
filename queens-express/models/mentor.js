const mongoose = require('mongoose');
      
let mentorSchema = mongoose.Schema({
    user: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   username: String,
   accomplishment1: String,
   accomplishment2: String,
   accomplishment3: String,
   numMentees: Number,
   mentees: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Mentee"
       }
   ],
});

let Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;