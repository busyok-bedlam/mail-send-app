import * as mongoose from 'mongoose';

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

export const MessageSchema = new mongoose.Schema({
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
})

