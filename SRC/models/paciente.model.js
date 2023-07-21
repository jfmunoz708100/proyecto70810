import mongoose from  'mongoose'

const pacienteSchema = mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
    apellido:{
        type:String,
        required: true
    },
    tipoId:{
        type:Int32Array,
        required: true
    },
    num_id:{
        type:Int32Array,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        trim: true,
        unique:true
    },
    edad:{
        type: Numbers
    },
    telefono:{
        type:Int32Array
    }

})

export default mongoose.model('Paciente', pacienteSchema)