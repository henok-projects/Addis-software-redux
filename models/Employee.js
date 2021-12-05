//load mongoose since we need it to define a model
const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
name:{ 
    String
  },
salary:{
    Number
  },
gender: {
    String
  },
birthday: { 
    type: Date 
  }},
  {
timestamps: true //important

  })
module.exports = mongoose.model('Employee', EmpSchema);