const express = require("express");
const router = express.Router();
const Mensranking= require("../models/mens");

router.post("/mens", async(req, res)=>{
    try{
    const addingMensRecords=new Mensranking(req.body);
    console.log(req.body);
    const insertMens= addingMensRecords.save();
    res.status(201).send(insertMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})
router.get("/mens", async(req, res)=>{
    try{
    const getMens= await Mensranking.find();
    res.send(getMens);
    }
    catch(e){
        res.status(400).send(e);
    }
})
router.get("/mens/:id", async(req, res)=>{
    try{
    const _id=req.params.id;
    const getMen= await Mensranking.findById(_id);
    res.send(getMen);
    }
    catch(e){
        res.status(400).send(e);
    }
})
router.patch("/mens/:id", async(req, res)=>{
    try{
    const _id=req.params.id;
    const getMen= await Mensranking.findByIdAndUpdate(_id, req.body);
    res.send(getMen);
    }
    catch(e){
        res.status(500).send(e);
    }
})
router.delete("/mens/:id", async(req, res)=>{
    try{
    const _id=req.params.id;
    const getMen= await Mensranking.findByIdAndDelete(_id);
    res.send(getMen);
    }
    catch(e){
        res.status(500).send(e);
    }
})
module.exports=router;