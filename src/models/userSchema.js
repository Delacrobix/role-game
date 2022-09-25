import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },
    heroes: [
        {
            type: Schema.ObjectId,
            ref: 'hero',
        }
    ]
});

UserSchema.methods.encryptPassword = async (password) => {
    let pass = await bcrypt.hash(password, 10);
    return pass;
}

UserSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);