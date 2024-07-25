import mongoose from "mongoose";

const chatCollection = "chat";

const chatSchema = new mongoose.Schema({
    user: { type: String, required: true, max: 100 },
    message: { type: String, required: true, max: 500 },
});

const chatModel = mongoose.model(chatCollection, chatSchema);

export default chatModel;