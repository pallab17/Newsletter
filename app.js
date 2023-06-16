// const express = require("express")
// const request = require("request")
// const bodyParser = require("body-parser")
// const https = require("https")
// const mailchimp = require("@mailchimp/mailchimp_marketing");
 
// const app = express()
 
// mailchimp.setConfig({
//     apiKey: "a427329642f43dccbf29ee5c2c2f65c4-us11",
//     server: "us11"
//   });
 
// app.use(express.static("public"))
// app.use(bodyParser.urlencoded({extended: true}))
 
// app.get("/",(req,res) => {
//     res.sendFile(__dirname + "/signup.html")
// })
 
// app.post("/",function (req,res) {
//     const listId = "e4e5fe21d9";
// const subscribingUser = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email
// };
 
// async function run() {
//     const response = await mailchimp.lists.addListMember(listId, {
//       email_address: subscribingUser.email,
//       status: "subscribed",
//       merge_fields: {
//         FNAME: subscribingUser.firstName,
//         LNAME: subscribingUser.lastName
//       }
//     });
  
//     console.log(
//       `Successfully added contact as an audience member. The contact's id is ${response.id}.`
//     );
//   }
 
// run();
 
 
// });
 
// app.listen(3000, () => {
//     console.log("Server is running on port 3000");
// })

// import required packages
const express= require("express");
const https= require("https");
const bodyparser= require("body-parser");

const app= express();
app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended:true}));

// On the home route, send signup html template
app.get("/",function(req,res){
res.sendFile(__dirname+"/signin.html");
});

// Manage post request on home route and
// Send data to the MailChimp account via API
app.post("/",function(req,res){
var firstName=req.body.fname;
var lastName = req.body.lName;
var email=req.body.email;

var data={
	members:[{
	email_address: email,
	status: "subscribed",
	merge_fields:{
		FNAME: firstName,
		LNAME: lastName
	}
	}]
}

// Converting string data to JSON data
const jsonData= JSON.stringify(data);
const url="https://us11.api.mailchimp.com/3.0/lists/e4e5fe21d9";
const options={
method:"POST",
auth:"pallab:a427329642f43dccbf29ee5c2c2f65c4-us11"
}

// On success send users to success, otherwise on failure template
const request=https.request(url,options,function(response){
if(response.statusCode===200){
	res.sendFile(__dirname+"/success.html");
}else{
	res.sendFile(__dirname+"/failure.html");
}
response.on("data",function(data){
	console.log(JSON.parse(data));
});
});
request.write(jsonData);
request.end();
});

// Failure route
app.post("/failure",function(req,res){
res.redirect("/");
})

app.listen(process.env.PORT || 8000,function(){
console.log("server is running on port 8000.");
})
