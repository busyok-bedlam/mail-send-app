import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	email:{
		type: String,
		required: true
	},
	fullName: {
		type: String,
		required: true
	}
});

const MessageSchema = new mongoose.Schema({
	theme: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	sender: UserSchema,
	receivers: {
		type: UserSchema,
		required: true
	},
	carbonCopy: {
		type: [UserSchema],
		required: false
	},
	blindCarbonCopy: {
		type: [UserSchema],
		required: false
	} 
})

export default mongoose.model('Message', MessageSchema);
