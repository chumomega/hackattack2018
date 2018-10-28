const mongoose = require('mongoose');
      
let menteeSchema = mongoose.Schema({
    user: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   goal1: String,
   goal2: String,
   goal3: String,
   bucketList: [
       {
           listItem: String,
       }
       ],
   numMentors: Number,
   mentors: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Mentor"
       }
   ],
});

let Mentee = mongoose.model("Mentor", menteeSchema);

module.exports = Mentee;