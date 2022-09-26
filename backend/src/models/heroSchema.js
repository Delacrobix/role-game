import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HeroSchema = new Schema({
    race: { 
        type: Schema.ObjectId,
        ref: 'Race'
    },
    level: {
        num_level: {
            type: Number
        },
        exp_needed: {
            type: Number
        }
    },
    userId: {
        type: Schema.ObjectId,
        ref: 'UserId'
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
    }
});

HeroSchema.methods.critiqueStrike = {

}

export default mongoose.model('Hero', HeroSchema);