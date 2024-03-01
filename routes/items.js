const express = require('express');
const router=express.Router();
const Item=require('../models/Item');

//get
router.get('/',async(req,res) => {

    try{
        const items=await Item.find();
        res.json(items);
    }catch(err){
        console.error(err.message);
        res.status(500).send('error');
    }
});

router.post('/', async(req,res)=> {
    try{ 
        const newItem= new Item({
            firstname:req.body.name,
            lastName:req.body.lastName,
            email:req.body.email,
            mobile:req.body.mobile,
            project:req.body.project
        });
        const item=await newItem.save();
        res.json(item);

    }catch (err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});

router.delete('/:id', async(req,res)=>{
    try{
        const item=await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({msg:'item not found'});
        }
        await item.remove();
        res.json({msg:'item removed'});
    }catch(err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;