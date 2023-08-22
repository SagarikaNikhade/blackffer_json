const express = require("express");
const dataRouter = express.Router();
require("dotenv").config();
const {DataModel} = require("../models/data.model");

dataRouter.get("/",async(req,res)=>{
    try{
        const data = await DataModel.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(400).json({ message: err.message });
    }
})

dataRouter.get('/filter', async (req, res) => {
  try {
    const field = req.query.field;
    const value = req.query.value;

    // for dynamically handle filter
    const query = { [field]: value };

    const filteredData = await DataModel.find(query);
    res.status(200).send(filteredData);
  } 
  catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = {dataRouter};