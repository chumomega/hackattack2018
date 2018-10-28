const mongoose = require('mongoose'),
      passportLocalMongoose = require("passport-local-mongoose");
      
let mentorSchema = mongoose.Schema({
   name: String,
   email: String,
   password: String,
   city: String,
   state: String,
   biography: String,
   accomplishment1: String,
   accomplishment2: String,
   accomplishment3: String,
   numMentees: Number,
   mentee1: String,
   mentee2: String,
   mentee3: String,
});

mentorSchema.plugin(passportLocalMongoose);

let Mentor = mongoose.model("Mentor", mentorSchema);

module.exports = Mentor;