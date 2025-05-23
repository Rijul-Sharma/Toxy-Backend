import { Schema, model } from "mongoose";

const imageSchema = Schema({
    url: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

let imageModel = model('image', imageSchema);

export default imageModel;
