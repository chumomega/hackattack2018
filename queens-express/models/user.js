const mongoose = require('mongoose'),
      passportLocalMongoose = require("passport-local-mongoose");
      
let userSchema = mongoose.Schema({
   username: String,
   email: String,
   password: String,
   city: String,
   state: String,
   biography: String,
   role: String,
});

userSchema.plugin(passportLocalMongoose);

let User = mongoose.model("User", userSchema);

module.exports = User;