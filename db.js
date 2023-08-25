const mongoose = require('mongoose');

module.exports = async function() {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Connected to MongoDB...');
    }
    catch (err) {
        console.error('Could not connect to MongoDB...', err);
    }
}