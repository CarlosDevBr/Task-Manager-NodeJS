require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('61e95c617b87392b30d8b53a').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteIdAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete( id )
    const count = await Task.countDocuments({ completed })
    return count
} 

deleteIdAndCount('61e973c82f51f7120439efa2', true ).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})