// database

export async function startConnection() {
    // CONNECT TO MONGODG (mongodb://localhost:27017/{database})
    const urlMongo = 'mongodb:127.0.0.1:27017/DBV';


    console.log(`[ DATABASE RUNNING ] started database @ ${urlMongo}`);
}