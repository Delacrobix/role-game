import mongoose from "mongoose";

const Schema = mongoose.Schema;

const RaceSchema = new Schema({
  race_name: [
    {
      typeof: String,
    },
  ],
});

RaceSchema.methods.getRace = async function (number) {
  // !Método que retornara la raza dependiendo del numero ingresado partiendo desde 0

  // !hasta el numero de razas existentes - 1
};
