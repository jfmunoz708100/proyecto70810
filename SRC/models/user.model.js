import mongoose, { trusted } from 'mongoose'

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        trim: true
    },
    email:{
        type : String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        requiered: true,
    },
},{
    timestamps : true      

})

export default mongoose.model('User', userSchema)
