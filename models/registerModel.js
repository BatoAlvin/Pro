const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");


const registerSchema=new mongoose.Schema({
    username: {
      type: String, 
      required: "Enter username"
      },
    password: {
      type: String,
      required: "Enter password"
    },
    date: String,
    email: String,
    phonenumber: Number,
    msex: String,
    nin: String,
    companyrole: String,
    wdays:Number,
    role: String
    });


//Password should be encrypted 10 times
registerSchema.pre("save", function(next) {
  this.password = bcryptjs.hashSync(this.password, 10);
  next();
});

//Get your username and password and check in the DB for that username
registerSchema.statics.authenticate = async function(
  username,
  password
) {
  const user = await this.findOne({
    username: username
  });
  if (!user) {
    throw new Error("User not found.");
  }
  const match = await bcryptjs.compare(
    password,
    user.password
  );
  if (match) {
    return user;
  }
};




module.exports = mongoose.model("user", registerSchema);