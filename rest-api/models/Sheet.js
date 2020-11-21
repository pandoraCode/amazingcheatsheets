const mongoose = require('mongoose');

const sheetSchema = new mongoose.Schema({

        
        publisher_id: {
        type: String,
        required: true,
        min:6
                },
        title: {
            type: String,
            required: true,
            min:3
                    },
        description: {
            type: String,
            required: false,
            min:6
                    },
        tags: {
            type: String,
            required: true,
            max : 255,
            min:6
                    },
        likes: {
            type: Number,
            required: false,
            max : 255,
            min:6
                    },
        link: {
            type: String,
            required: true,
            min:6
                    },

});


module.exports = mongoose.model('Sheet',sheetSchema);