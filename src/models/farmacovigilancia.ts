// Farmacovigilancia model

import {Schema, model, Document} from 'mongoose';

// Farmacovigilancia model:
const schema = new Schema({
    uname: String,
    descripcion: String,
    responsable: String,
    telefono: String
});

// create an interface that contains all
// same info of the schema:
// (also its hereditary from the Document of MongoDB
// this means that it will have all the other important
// fields like ObjectId() = _id)
interface IFarmacovigilancia extends Document {
    uname: String;
    descripcion: String;
    responsable: String;
    telefono: String;
}

export default model<IFarmacovigilancia>('Farmacovigilancia', schema); // EXPORT THE MODEL