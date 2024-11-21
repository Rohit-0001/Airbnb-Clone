const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

const mongoUrl = 'mongodb://127.0.0.1:27017/wanderlust';

main().then(() => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    mongoose.connect(mongoUrl);
};

const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
}

initDB();