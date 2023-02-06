import mongoose from 'mongoose'
import config  from './config'


mongoose.set("strictQuery", false);

mongoose
    .connect(config.MongoDbUri)
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) =>{
        console.error('Error connecting to mongo', err.reason)
    })
  
    