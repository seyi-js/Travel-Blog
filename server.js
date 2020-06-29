const express = require( 'express' )
const bodyParser = require( 'body-parser' )
const PORT = process.env.PORT || 2000;
const app = express();
const path = require( 'path' );
const mongoose = require( 'mongoose' );
mongoose.set('useCreateIndex', true);
let db;

//switch btw production and dev
if ( process.env.NODE_ENV !== 'production' ) {
  db = 'mongodb://localhost:process.env.27017/TravelDB';
} else {
  db= process.env.MONGO_URL;
}

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
.then(()=>{
    console.log('MongoDb Connected')
})
    .catch( err => console.log( err ) );
    
//Body Parser config
app.use( bodyParser.json() );

//Initializing routes
const posts =require('./routes/posts')
app.use('/api/posts', posts)
//Serving Files In Production

if ( process.env.NODE_ENV === 'production' ) {
    app.use(express.static('Client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'Client/build', 'index.html'));
    })
}

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))