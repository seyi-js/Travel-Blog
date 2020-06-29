const express = require( 'express' );
const router = express.Router();
const Post = require( '../models/Post' )
const Image =require('../models/Images')
const Recommendation = require('../models/Recommendations')
const multer = require( 'multer' )
const {fileUpload, write} =require('../middleware/config')
if ( process.env.NODE_ENV === "production" ) {
    upload = multer({dest: `${__dirname}/../Client/build/uploads`});
} else {
    upload = multer({dest: `${__dirname}/../Client/public/uploads`});
}

//@route GET api/posts/
//@decs GET all posts
//@access Public

router.get( '/', ( req, res ) => {
    Post.find( {} )
        .sort({posted_data: -1})//From latest post to lastPost
        .then( data => {
        res.json(data)
        } )
    .catch(err=> console.log(err))

})

//@route POST api/posts/
//@decs POST to database
//@access Public

//This Route saves post to database except images
router.post( '/', ( req, res ) => {
    const { shortText,description,continentName } = req.body;
    //Validation
    if ( !shortText || !description || !continentName ) {
        res.status( 400 ).json( { msg: "Please Enter all Fields" })
    } else {
        const newPost = new Post( {
            shortText,
            description,
            continentName
        } );

        //Save to Databsae
        Post.create( newPost )
            .then( data => {
            res.status(200).json(data)
            } )
        .catch(err=> console.log(err))
    }
})




//@route POST api/posts/
//@decs POST images to database
//@access Public

router.post( '/images', upload.array('image'/* name given to the image on the front end */,12/* max amount of file */), ( req, res ) => {
    const {continentName} = req.body
    //Converted Images
    let images = [];
    
    Post.findOne( { continentName } )//Find data by continent name
        
        .then( post => {
            
            //Map through the array of uploaded files
            req.files.map( file => {
                const base64data = fileUpload( file.path )
                images.push( {basedata: base64data, mimetype: file.mimetype } )
            
            })
            //Map through converted Images Array and save in the database
            images.forEach( image => {
                const newImage = new Image( {
                    data: image.basedata,
                    contentType: image.mimetype
                } );
                Image.create(newImage)
                    .then( result => {
                        result.image.data = image.basedata
                        result.image.contentType = image.imetype
                        result.save( ( err, res ) => {
                            if ( err ) {
                                console.log(err)
                            } else {
                                //TodoList
                                //Save id to the post
                                console.log(res._id)
                            }
                        })
                    } )
                    .catch(err=> console.log(err))
            })
        } )
    .catch(err=>console.log(err))
})

//@route POST api/posts/recommended_places
//@decs POST to database
//@access Public

//This Route saves post to database except images
router.post( '/recommended_places', ( req, res ) => {
    const { shortText,description,continentName,price, place_name} = req.body;
    //Validation
    if ( !shortText || !description || !continentName || !price || !place_name ) {
        res.status( 400 ).json( { msg: "Please Enter all Fields" })
    } else {
        const newRecommendation = new Recommendation( {
            shortText,
            description,
            price,
            place_name
        } );
        //Get Continent Data from Database
        Post.findOne( { continentName } )
        .then( data => {
            let savedData;
        //Save to Databsae
        Recommendation.create( newRecommendation )
            .then( result => {
                data.recommended_destination.push( result._id )
                data.save()
                savedData= result
            } )
            .then(()=> console.log(savedData))
        .catch(err=> console.log(err))
        } )
        .catch( err => console.log( `Continent Error ${ err }` ) )
       
       
        
    }
})


module.exports = router