const fs = require( 'fs' )
const Post = require( '../models/Post' )

//File uploading middleware
const fileUpload = (path) => {
    let buff = fs.readFileSync(path);
    let base64data = buff.toString( 'base64' );
    
    return base64data
}


//WritetoFile function
const write = ( { data, fileName } ) => {
    // returns a number btw 1-100
    const id = Math.floor( ( Math.random() * 100 ) + 1 )
    const json = JSON.stringify( data, null, 2 )
    fs.writeFile( `${ fileName }${ id }.json`, json, 'utf8', function ( err ) {
        if ( err ) return log( err );
        console.log( 'Done Writing' );
    } );
}



module.exports = {fileUpload,write}