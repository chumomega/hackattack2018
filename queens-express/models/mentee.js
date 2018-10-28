const mongoose = require('mongoose');
      
let menteeSchema = mongoose.Schema({
    user: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   username: String,
   goal1: String,
   goal2: String,
   goal3: String,
   numMentors: Number,
   bucketList: [
       {
           listItem: String,
       }
   ],
   mentors: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Mentor"
       }
   ],
});

let Mentee = mongoose.model("Mentee", menteeSchema);

module.exports = Mentee;