import mongoose from 'mongoose';
const { Schema } = mongoose;

const  validator = (v)=> {
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(v);
}


const GateWayShemes = new Schema({
    serial_number: {
      type: String, // a unique serial number
      required: [true, 'Serial number is required'],
      unique: [true , 'Serial number already exists'],
    },
    name:{
      type: String,
      required: [true , 'Name is required'],
   },
    ip:{
      type: String,
      required:   [true , 'IP is required'],
      validate: [validator, 'Please enter a valid IP address'],
    },
    devices:{
      type: Array,
      required: false,
      default: [],
      maxlength: [10, "Devices can't be more than 10"],
    },
    dateCreated:{
      type: Date,
      required: true,
      default: Date.now
    }
})



module.exports = mongoose.models.GateDataMain||mongoose.model('GateDataMain', GateWayShemes);