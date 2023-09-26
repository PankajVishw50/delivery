
const express = require("express");
const path = require("path");

const apiRouter = require("./routers/apiRouter");
const { MongoClient } = require("mongodb");
const ContactModel = require("./model");
const mongoose = require("mongoose");


const app = express();

const multer = require("multer")();

const TEMPLATE_FOLDER_PATH = path.join(__dirname, "templates");
const STATIC_FOLDER_PATH = path.join(__dirname, "static");
console.log(TEMPLATE_FOLDER_PATH);


app.use("/", express.static(TEMPLATE_FOLDER_PATH));


// Middlewares
app.use(express.static(STATIC_FOLDER_PATH));

app.use(multer.none());
app.use(express.urlencoded());
app.use(express.json());

app.use("/api/contact", register_contact);

app.listen(6500, () => {
    console.log(`Listening on port ${6500} ::>`);
});

// Connect to database
const url = "mongodb+srv://pankaj:pankaj.micromax@cluster0.1mvkcej.mongodb.net/?retryWrites=true&w=majority";
const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, params)
.then(() => console.log("Successfully connected"))
.catch(err => {
    console.log("Failed to connect");
})


async function register_contact(req, res, next){
    const model = ContactModel(req.body);

    console.log(req.body);
    console.log("\n\n\n");

    console.log(model.name);
    console.log(model.email);
    console.log(model.number);
    console.log(model.subject);
    console.log(model.message);


    model.save()
    .then(() => {
        res.status(200).send();
    })
    .catch((error) => {
        console.log("Error: \n" + error); 
        res.send(400).send()
    })

}
