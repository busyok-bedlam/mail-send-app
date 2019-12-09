"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    }
});
exports.MessageSchema = new mongoose.Schema({
    theme: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    sender: UserSchema,
    receiver: {
        type: UserSchema,
        required: true
    },
    carbonCopy: {
        type: [UserSchema],
        required: false,
        default: null
    },
    blindCarbonCopy: {
        type: [UserSchema],
        required: false,
        default: null
    }
});
//# sourceMappingURL=message.schema.js.map