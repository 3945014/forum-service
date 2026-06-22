import dotenv from "dotenv";

dotenv.config();
const config = {
    port: process.env.PORT || 3000,
    mongodb: {
        uri: process.env.MONGO_URI || 'mongodb+srv://3945014_db_user:@cluster0.s1ysafr.mongodb.net/?appName=Cluster0',
        db: {
            dbname: process.env.DB_NAME || 'cohort82'
        }
    }
}

export default config;