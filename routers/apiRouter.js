
const router = require("express").Router();
const { MongoClient } = require("mongodb");
const ContactModel = require("../model");

async function register_contact(req, res, next){
    const url = "mongodb+srv://pankaj:pankaj.micromax@cluster0.1mvkcej.mongodb.net/?retryWrites=true&w=majority";

    const body = req.body;

    const client = new MongoClient(url);
    try{
        await client.connect()
        res.status(200).send();
    }catch(error){
        res.status(400).send();
    }


}

router.post("/contact", register_contact);

module.exports = router;