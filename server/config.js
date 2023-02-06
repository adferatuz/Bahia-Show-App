import {config}  from 'dotenv'

config()

export default {
    BucketName: process.env. BUCKET_NAME ||'',
    EndPoint: process.env.ENDPOINT || '',
    MongoDbUri: process.env.MONGO_DB_URI || '',
    Cors: process.env.CORS || '',
    AuthAdmin: process.env.AUTH_ADMIN || ''

}