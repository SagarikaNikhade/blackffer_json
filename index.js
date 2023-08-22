const express = require("express");
const app = express();
const cors = require("cors");
const {connection} = require("./config/db")
const {dataRouter} = require("./routes/data.routes");

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome")
});

app.use("/data",dataRouter);

app.listen(8080,async()=>{
    try{
       await connection;
       console.log("Connect to DB!!")
    }
    catch(err){
      console.log(err)
      console.log("Cannot connect to DB!!")
    }
    console.log("server running at port 8080")
})