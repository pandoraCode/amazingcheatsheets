const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

        name: {
            type: String,
            required: true,
            max : 255,
            min:6
                    },
        email: {
            type: String,
            required: true,
            max : 255,
            min:6
                    },
        password: {
            type: String,
            required: true,
            max : 255,
            min:6
                    },
        avatar: {
            type: String,
            required: false,
            max : 255,
            min:6
                    },
        areaOFexpertise: {
            type: String,
            required: false,
            max : 255,
            min:6
                    }

});


module.exports = mongoose.model('User',userSchema);