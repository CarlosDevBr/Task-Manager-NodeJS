const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Carlos',
//     age: 'Mike'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch(() => {
//     console.log('Error!', error)
// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const note = new Task({
    description: 'fazer um software',
    completed: false
})

note.save().then(() => {
    console.log(note)
}).catch(() => {
    console.log('Error!', error)
})