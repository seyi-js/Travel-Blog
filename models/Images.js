const mongoose = require( 'mongoose' );

const imageSchema = new mongoose.Schema( {
    image: {
        data: String,
        contentType: String
    },
    posted_date: {
        type: Date,
        default: new Date().toLocaleString()
    }
    
} )


const Image = mongoose.model( 'images', imageSchema )
module.exports = Image