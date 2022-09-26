import mongoose from "mongoose";

const Schema = mongoose.Schema;

const MobSchema = new Schema({
    race: {
        type: Schema.ObjectId
    },
    element_type : {
        type: Number
    },
    stats: {
        health: { 
            type: Number
        },
        damage_range: {
            min: {
                type: Number
            },
            max: {
                type: Number
            }
        }
    },
    exp_granted: {
        type: Number
    }
});

MobSchema.methods.critiqueStrike = {

}