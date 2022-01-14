//CRUD(Create, Read, Update and Delete)

const {MongoClient, ObjectID}= require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    /* CREATE */
    // ----> CREATE ONE
    db.collection('users').insertOne({
        name: 'Carlos',
        age: 23
    })
    // ----> CREATE SEVERAL
    db.collection('tasks').insertMany([
        {
            description: 'Fazer um sistema financeiro',
            completed: true
        }, {
            description: 'Fazer um jogo de xadrez',
            completed: false
        }, {
            description: 'Fazer um web-server',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert documents!')
        }
        console.log(result.ops)
    })

    /* READ */ 
    // ----> READ ONE BY NAME 
    db.collection('users').findOne({name: 'Felipe', age: 33}, (error, user) => {
        if (error){
            return console.log('Unable to fetch')
        }
        if (user === null){
            return console.log('user not found.')
        }
        console.log(user)
    })
    // ----> READ ONE BY _ID
    db.collection('tasks').findOne({ _id: new ObjectID('61e1761578e2bb1e7c06a4d8')}, (error, task) => {
        if (error){
            return console.log('Unable to fetch')
        }
        console.log(task)
    }) 
    // ----> READ SEVERAL BY COMPLETED
    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })

    /* UPDATE */
    // ----> UPDATE ONE 
    db.collection('users').updateOne({
        _id: new ObjectID("61e174b02e704835bc2a0e3c")
    }, {
        $set: {
            name: 'antonio'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    // ----> UPDATE SEVERAL
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {           
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
    /* DELETE */
    // ----> DELETE ONE
    db.collection('users').deleteOne({
       age: 33 
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
    // ----> DELETE SEVERAL
    db.collection('users').deleteMany({
        age: 23
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    })
})