const mongoose = require( 'mongoose' );
var ObjectId = mongoose.Schema.Types.ObjectId;

const postSchema = new mongoose.Schema( {
    continentName: {
        type: String,
       required: true 

    },
    images:[{
        type: ObjectId,
        ref: 'images'/*the colection i'm linking to  */
    } ],
    recommended_destination: [ {
        type: ObjectId,
        ref: 'recommended_places'
    }],
    description: {
        type: String,
       required: true 

    },
    shortText: {
        type: String,
       required: true 

    },
    posted_date: {
        type: Date,
        default: new Date().toLocaleString()
    }
    
} )


const Post = mongoose.model( 'posts', postSchema )
module.exports = Post