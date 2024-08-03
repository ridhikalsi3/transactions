import mongoose from "mongoose";
export const createConnection = async () => {
	try {
		const conInfo = await mongoose.connect(process.env.MONGO_URL);
		return conInfo;
	} catch (err) {
		console.log("connection failed...", err);
		throw err;
	}
};