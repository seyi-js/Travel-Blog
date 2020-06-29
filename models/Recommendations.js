const mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;

const recommendationSchema = new mongoose.Schema( {
    
    images:[{
        type: ObjectId,
        ref: 'images'/*the colection i'm linking to  */
    } ],
    
    description: {
        type: String,
       required: true 

    },
    shortText: {
        type: String,
       required: true 

    },
    place_name: {
        type: String,
        required: true 
    },
    price: {
        type: String,
       required: true 
    },
    posted_date: {
        type: Date,
        default: new Date().toLocaleString()
    }
    
} )


const Recommendation = mongoose.model( 'recommended_places', recommendationSchema )
module.exports = Recommendation