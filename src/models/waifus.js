const mongoose=require('mongoose');

const waifusSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        max:60
      },
    descripcion:{
        type: String,
        required: true,
        trim: true,
        max:250,
        min:5,
    }

})
module.exports= mongoose.model('waifus', waifusSchema);