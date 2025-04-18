const mongoose = require ('mongoose');

const Nurse = new mongoose.Schema({
    nurseName : {type: String, required: true},
    phone:{type:Number , required:true},
    address:{type: String, required: true},
    password : {type: String, required: true}
});

module.exports = mongoose.model('Nurse', Nurse);
