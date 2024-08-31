import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    age: {type: Number, required: true},
    isAdmin: {type: Boolean, required: true, default: false},
    cartId: {type: mongoose.Schema.Types.ObjectId, ref: 'cart'},
    documents: {type: Array,
        type:[
            {
                name: {type: String},
                reference: {type: String},
                
            }
        ]
    },
    last_conecttion: {type: String, default: "Todavia no se ha conectado por primera vez"}
});

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;


