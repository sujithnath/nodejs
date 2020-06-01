const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'taskManger';

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('unable to connect to database');
    }
    const db = client.db(databaseName);
    db.collection('users').insertOne(
      { name: 'Sujith', age: 29 },
      (error, result) => {
        if (error) {
          return console.log('unable to connect to user');
        }

        console.log(result.ops);
      }
    );
  }
);
