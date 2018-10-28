const mongoose = require('mongoose'),
      passportLocalMongoose = require("passport-local-mongoose");
      
let menteeSchema = mongoose.Schema({
   name: String,
   email: String,
   password: String,
   city: String,
   state: String,
   biography: String,
   goal1: String,
   goal2: String,
   goal3: String,
   bucketList: String,
   numMentors: Number,
   mentor1: String,
   mentor2: String,
   mentor3: String,
});

menteeSchema.plugin(passportLocalMongoose);

let Mentee = mongoose.model("Mentor", menteeSchema);

module.exports = Mentee;