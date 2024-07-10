// we are working with ES6 Module
import "dotenv/config"
import express from "express"

const app = express();
app.use(express.json());
const port= process.env.PORT||3000;



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});

