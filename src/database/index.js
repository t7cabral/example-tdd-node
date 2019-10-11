const mongoose = require('mongoose');


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize:        5,
    user:            process.env.DB_USER,
    pass:            process.env.DB_PASS,
    dbName:          process.env.DB_NAME,
    autoIndex:       true
});


module.exports = mongoose;