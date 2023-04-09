const express =  require('express');
const app = express();
const tasks = require('./Routes/Routes');

const port = 3000;

//Middleware 
app.use(express.json());

//app.use(express.static('./public'))
app.use('/api/v1/tasks', tasks)


app.listen(port, ()=> {
    console.log(`Server started on port ${port}...`);
})
