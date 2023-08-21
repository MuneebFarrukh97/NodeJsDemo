const app = require('./app');
const db = require('./config/database');
const UserModel = require('./model/user_model');


const port = 3000;

app.get('/',(req,res)=>{
    res.send("Hello World from Muneeb");
});

app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
});