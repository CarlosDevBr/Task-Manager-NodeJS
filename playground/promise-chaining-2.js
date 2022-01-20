require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('61e95c617b87392b30d8b53a').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})