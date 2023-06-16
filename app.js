
require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
// const request = require("request");
const https = require('https');
// const API_KEY = process.env.API_KEY;
const audianceID = "e4e5fe21d9"; 
 
 
app.use(express.static("public"));
 
app.listen(PORT || process.env.PORT, (req, res) => {
    console.log("App is listening on Port : ", PORT);
})
 
//redirect to signup page
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/signin.html");
})
 
//setting bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
 
//signup route setting up post method and connecting to the mailchimp server
app.post('/', (req, res) => {
 
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;
 
    //setting up data for mailchimp endpoint
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };
 
 
    const jsonData = JSON.stringify(data);
 
    const url = `https://us11.api.mailchimp.com/3.0/lists/${audianceID}`;
    const options = {
 
        method: "POST",
        headers: {
            Authorization: `auth ${process.env.API_KEY}`
        },
 
    }
 
    //setting up response for success & failure
    const request = https.request(url, options, (response) => {
        if (response.statusCode === 200) {
            // res.send("success")
             res.sendFile(__dirname + "/success.html");
        } else {
             res.sendFile(__dirname + "/failure.html");
            // res.send("success")
        }
 
        // getting data 
        response.on("data", (data) => {
            console.log(JSON.parse(data));
        });
    });
 
    // sinmitting data to mailchimp
    request.write(jsonData);
    request.end();
 
});
 
//redirect to the main page if failed
app.post("/failure", (req, res) => {
    res.redirect("/");
})
 