const express =  require('express');
const app = express();
const tasks = require('./Routes/Routes');
const connectDB = require('./db/connect');
require('dotenv').config()


//Middleware 
app.use(express.static('./public'))
app.use(express.json());

//app.use(express.static('./public'))
app.use('/api/v1/tasks', tasks)

const port = 3000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, ()=> {
            console.log(`Server started on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
