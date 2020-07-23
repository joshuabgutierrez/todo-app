const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.connect(process.env.DATABASE_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		});

		console.log(`MongoDB connected successfully`);
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
