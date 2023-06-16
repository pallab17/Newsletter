// // const express=require("express");
// // const bodyParser=require("body-parser");
// // const request = require("request");
// // const https = require("https");
// // const { subscribe } = require("diagnostics_channel");
// // const { request } = require("http");
// // const app=express();

// // // // // ebare problem ta hocche je jokhun user 3000 e dekhche website take tokhun kono image show hocche na as img hocche static file to fix this we need to use express r static fn
// // // // app.use(express.static("public"));
// // // // // ekhane pulic === ekta folder jetar modhe sob kota static files rakhbo

// // // // app.use(bodyParser.urlencoded({extended:true}));


// // // // app.get("/", function(req,res){
// // // //     res.sendFile(__dirname + "/signup.html");
// // // // })

// // // // app.post("/", function(req,res){

// // // //     const firstName = req.body.fName;
// // // //     const lastName = req.body.lName;
// // // //     const email = req.body.email;
// // // //     // console.log(firstName,lastName,email);
// // // //     var data = {
// // // //         members:[
// // // //             {
// // // //                 email_address:email,
// // // //                 status:"subscribed",
// // // //                 merge_fields :{
// // // //                     FNAME : firstName,
// // // //                     LNAME : lastName
// // // //                 }

// // // //         }
// // // //     ]
// // // //     };

// // // //     const jsonData = JSON.stringify(data);

// // // //     const url = "https://us11.api.mailchimp.com/3.0/lists/e4e5fe21d9";
// // // //     const options = {
// // // //         method : "POST",
// // // //         auth : "pb7 : ef09da00164afdac6a86aa91b8e9f86e-us11"
// // // //     }

// // // //    const request = https.request(url,options,function(response){
// // // //     response.on("data",function(data){
// // // //         console.log(JSON.parse(data));
// // // //     })
// // // //     })

// // // //     request.write(jsonData);
// // // //     request.end();


// // // // });


// // // // app.listen(3000,function(){
// // // //     console.log("server is running on port 3000");
// // // // })

// // // // // mailchimp api key= ef09da00164afdac6a86aa91b8e9f86e-us11
// // // // // audience id - e4e5fe21d9


// // // // import express, { response } from "express";
// // // // import path from "path";
// // // // import { fileURLToPath } from "url";
// // // // import mailchimp from "@mailchimp/mailchimp_marketing";
 
 
// // // // const audienceId = "e4e5fe21d9";
// // // // const mailchimpapiKey = "ef09da00164afdac6a86aa91b8e9f86e-us11";
// // // // const serverPrefix = "us11";
 
// // // // const __filename = fileURLToPath(import.meta.url);
// // // // const __dirname = path.dirname(__filename);
 
// // // // const app = express();
// // // // app.use(express.static("public"));
// // // // app.use(express.urlencoded({extended: true}));
 
// // // // mailchimp.setConfig({
// // // //     apiKey: mailchimpapiKey,
// // // //     server: serverPrefix,
// // // // });
 
 
// // // // app.listen(3000, function(){
// // // //     console.log("Server is running on port 3000");
// // // // });
 
 
// // // // app.get("/", function(req, res){
// // // //     res.sendFile(path.join(__dirname + "/signup.html"));
// // // // });
    
 
// // // // app.post("/", function(req, res){
 
// // // //     const firstName = req.body.fName;
// // // //     const lastName = req.body.lName;
// // // //     const email = req.body.email;
 
// // // //     console.log(firstName, lastName, email);
// // // //     console.log(__dirname);
// // // //     // console.log(res);
 
// // // //     const data = {
// // // //         email_address: email,
// // // //             status: "subscribed",
// // // //             merge_fields: {
// // // //                 FNAME: firstName,
// // // //                 LNAME: lastName
// // // //             }
// // // //     };
 
// // // //     async function run() {
// // // //         const response = await mailchimp.lists.addListMember(audienceId, data);
        
// // // //         if (response.errors) {
// // // //             throw new Error(response.errors);
// // // //         }
 
// // // //         return response;
// // // //     }
 
// // // //     run()
// // // //     .then((response) =>{
// // // //         console.log(response.status);
// // // //         res.sendFile(path.join(__dirname + "/success.html"));
// // // //     })
 
// // // //     .catch(errors => {
// // // //         console.log(`Catch ${errors}`);
// // // //         res.sendFile(path.join(__dirname + "/failure.html"));
// // // //     })
// // // // });
 
 
// // // // app.post("/failure", function(req, res){
// // // //     res.redirect("/");
// // // // })
// // // const express = require("express");
// // // const bodyParser = require("body-parser");
// // // const mailchimp = require("@mailchimp/mailchimp_marketing");
// // // const request = require("request");
 
// // // mailchimp.setConfig({
// // //     apiKey: "ef09da00164afdac6a86aa91b8e9f86e-us11",
// // //     server: "us11"
// // // })
 
// // // const app = express();
// // // app.use(express.static("public"));
// // // app.use(bodyParser.urlencoded({extended : true}));
 
// // // app.get("/", function(req, res){
// // //     res.sendFile(__dirname +"/signup.html");
// // // })
 
// // // app.post("/", function(req,res){
// // //     let firstName = req.body.fname;
// // //     let lastName = req.body.lname;
// // //     let email = req.body.email_address;
 
// // //     const listId = "e4e5fe21d9";
// // //     const subscribeData = {
// // //         members: [
// // //             {
// // //                 email_address: email,
// // //                 status: "subscribed",
// // //                 merge_fields: {
// // //                     FNAME: firstName,
// // //                     LNAME: lastName
// // //                 }
// // //             }
// // //         ]
// // //     }
// // //     const subscribe = async () => {
// // //         const response = await mailchimp.lists.batchListMembers(listId, subscribeData);
// // //         console.log(response);
// // //             if(response.error_count == 0){
// // //                 res.sendFile(__dirname + "/success.html");
// // //             }
// // //             else{
// // //                 res.sendFile(__dirname + "/failure.html");
// // //             }
// // //     };
// // //     subscribe();
// // // })
 
// // // app.post("/failure", function(req,res){
// // //     res.redirect("/");
// // // })
 
// // // app.listen(3000, function(req,res){
// // //     console.log("Server is up and Running!!");
// // // }) 

// // import express, { response } from "express";

// // import path from "path";

// // import { fileURLToPath } from "url";

// // import mailchimp from "@mailchimp/mailchimp_marketing";

// // const audienceId = "e4e5fe21d9";

// // const mailchimpapiKey = "ef09da00164afdac6a86aa91b8e9f86e-us11";

// // const serverPrefix = "us-11";

// // const __filename = fileURLToPath(import.meta.url);

// // const __dirname = path.dirname(__filename);

// // const app = express();

// // app.use(express.static("public"));

// // app.use(express.urlencoded({extended: true}));

// // mailchimp.setConfig({

// // apiKey: mailchimpapiKey,

// // server: serverPrefix,

// // });

// // app.listen(3000, function(){

// // console.log("Server is running on port 3000");

// // });

// // app.get("/", function(req, res){

// // res.sendFile(path.join(__dirname + "/signup.html"));

// // });

// // app.post("/", function(req, res){

// // const firstName = req.body.fName;

// // const lastName = req.body.lName;

// // const email = req.body.email;

// // console.log(firstName, lastName, email);

// // console.log(__dirname);

// // // console.log(res);

// // const data = {

// // email_address: email,

// // status: "subscribed",

// // merge_fields: {

// // FNAME: firstName,

// // LNAME: lastName

// // }

// // };

// // async function run() {

// // const response = await mailchimp.lists.addListMember(audienceId, data);

// // if (response.errors) {

// // throw new Error(response.errors);

// // }

// // return response;

// // }

// // run()

// // .then((response) =>{

// // console.log(response.status);

// // res.sendFile(path.join(__dirname + "/success.html"));

// // })

// // .catch(errors => {

// // console.log(`Catch ${errors}`);

// // res.sendFile(path.join(__dirname + "/failure.html"));

// // })

// // });

// // app.post("/failure", function(req, res){

// // res.redirect("/");

// // })

// //  bravo api -- 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

// const express=require("express");
// const bodyParser=require("body-parser");
// const request = require("request");
// const https = require("https");
// const axios = require("axios");
// const app=express();
// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({extended:true}));
// app.get("/", function(req,res){
//        res.sendFile(__dirname + "/signup.html");
//      })
 
// app.post("/", (req, res)=>{
//     const fname = req.body.firstName;
//     const lname = req.body.lastName;
//     const userEmail = req.body.email;
 
 
//     const options = {
//         method: 'POST',
//         url: 'https://api.brevo.com/v3/contacts',
//         headers: {
//             accept: 'application/json',
//             'content-type': 'application/json',
//             'api-key': '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'
//         },
//         data: {
//             attributes: {LASTNAME: lname, FIRSTNAME: fname},
//             updateEnabled: false,
//             email: userEmail
//         }
//     };
 
//     axios.request(options).then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
 
// });



// // // // import required packages
// // // const express= require("express");
// // // const https= require("https");
// // // const bodyparser= require("body-parser");

// // // const app= express();
// // // app.use(express.static("public"));

// // // app.use(bodyparser.urlencoded({extended:true}));

// // // // On the home route, send signup html template
// // // app.get("/",function(req,res){
// // // res.sendFile(__dirname+"/signup.html");
// // // });

// // // // Manage post request on home route and
// // // // Send data to the MailChimp account via API
// // // app.post("/",function(req,res){
// // // var firstName=req.body.Fname;
// // // var email=req.body.Email;
// // // var password=req.body.password;

// // // var data={
// // // 	members:[{
// // // 	email_address: email,
// // // 	status: "subscribed",
// // // 	merge_fields:{
// // // 		FNAME: firstName,
// // // 		LNAME: password
// // // 	}
// // // 	}]
// // // }

// // // // Converting string data to JSON data
// // // const jsonData= JSON.stringify(data);
// // // const url="https://us14.api.mailchimp.com/3.0/lists/e4e5fe21d9";
// // // const options={
// // // method:"POST",
// // // auth:"201951173:a427329642f43dccbf29ee5c2c2f65c4-us11"
// // // }

// // // // On success send users to success, otherwise on failure template
// // // const request=https.request(url,options,function(response){
// // // if(response.statusCode===200){
// // // 	res.sendFile(__dirname+"/success.html");
// // // }else{
// // // 	res.sendFile(__dirname+"/failure.html");
// // // }
// // // response.on("data",function(data){
// // // 	console.log(JSON.parse(data));
// // // });
// // // });
// // // request.write(jsonData);
// // // request.end();
// // // });

// // // // Failure route
// // // app.post("/failure",function(req,res){
// // // res.redirect("/");
// // // })

// // // app.listen(8000,function(){
// // // console.log("server is running on port 8000.");
// // // })


// // const express = require("express");
// // const https = require("https");
// // const client = require("@mailchimp/mailchimp_marketing");
// // client.setConfig({
// //   apiKey: "ef09da00164afdac6a86aa91b8e9f86e-us11",
// //   server: "us11",
// // });
 
// // const app = express();
 
// // app.use(express.static("public"));
// // app.use(express.json());
// // app.use(express.urlencoded({extended: true}));
 
// // app.get("/", function(req, res){
// //     res.sendFile(__dirname + "/signup.html");
// // })
 
// // async function add(member)  {
// //     const response = await client.lists.addListMember("e4e5fe21d9", member);
// //   };
 
// // app.post("/" , function(req, res){ 
// //     const mail = req.body.email;
// //     const fName = req.body.fName;
// //     const lName = req.body.lName;
 
// //     const newMember = {email_address: mail , 
// //             status: 'subscribed',
// //             merge_fields: {
// //                 FNAME: fName,
// //                 LNAME: lName,
// //             }};
    
// //     add(newMember);
 
// //     res.send('Form submitted.');
// // })
 
// // app.listen(3000, function(){
// //     console.log("Your Server is Running on Port 3000");
// // })
// /*Constant variables needed to load the page
// please note that since 2020 you have to get the mailchimp library...
// which unfortunately has depricated objects.
// */
 
// const express = require("express");
// const client = require("@mailchimp/mailchimp_marketing");
// const bodyparser= require("body-parser");
// const app = express();
// const port = 3000;
 
// //Declare different use sets of the express app
// app.use(express.static("public"));
// app.use(express.json());
// // app.use(express.urlencoded());
// app.use(bodyparser.urlencoded({extended:true}));
 
 
// //GET
// app.get("/", (req, res)=> {
//     res.sendFile(__dirname + "/signup.html");
// });
 
 
// //POST
// app.post("/", function (req, res){
//     const firstName = req.body.firstName;
//     const lastName = req.body.lastName;
//     const email = req.body.eMail;
//     const data = {
//         members: [
//             {
//                 email_address : email,
//                 status: "subscribed",
//                 merge_fields: {
//                     FNAME: firstName,
//                     LNAME: lastName,
//                 },
//             },
//         ]
//     };
    
// /*This will create a string from your JSON, you could just code the string but this 
// makes code so much easier to read*/
//     const jsonData = JSON.stringify(data);
 
// /*This is where the magic happens, this client, is the mailchimp client
// You just config your access, the server prefix is found at the begining 
// of mailchimps main webpage once you're logged in */
//     client.setConfig({
//         apiKey: "ef09da00164afdac6a86aa91b8e9f86e-us11",
//         server: "us11",
//     });
 
// //Async function will send your data to the list via batchListMembers
//     const run = async () => {
//         const response = await client.lists.batchListMembers("e4e5fe21d9",
//             jsonData
//         );
// //I recomend you avoid this console log... it's quite hefty and somewhat useless
//         // console.log(response);
//     };
 
// //Run the ASYNC function in order to create a new contact
//     run();
 
// //Redirect to a new page 
//     res.write("<h1>You have been signed up successfully!</h1>");
// });
 
// //LISTEN
// app.listen(port, ()=>{
//     console.log(`Port listened ${port}`); 
// });

