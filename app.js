// we are just requiring two packages that we just installed  -> express and body-parser
// jshint esversion:6;
const express = require("express");
const bodyparser = require("body-parser");

// app constant using express
const app = express();

var items = ["Breakfast"];
var workitems = [];
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));


app.use(express.static("public"));

// we create simple get route that just sends the browser the word hello when user tries to access home route
app.get("/", function (req, res) {




    // when user tries to request something on the page them my response send hello to user that is res.send("hello")
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    // 3. app.get will accept the material from app.post and it will show on the user side by processing it 
    // kindofay is var which hold the value of date and newlistitems hold material of array <items> which will act as a varialble and send to the ejs file to show on the screen on user side it isi because it is var and ejs template file it will access the <items> item in individually one by one as you post the submit the new item in todolist otherwise it will samething again again it will become statuc and we dynamic website hope you understand feel free search in w3schools 
    var day = today.toLocaleDateString("en-US", options);
    res.render("list", { listTitle: day, newlistitems: items });


    // other way but long better for ur understanding
    // var currentdate = today.getDay();
    // var day = "";

    // if (currentdate === 0) {
    //     day = "Sunday";

    //     // res.send("its holiday");
    // }
    // else if (currentdate === 1) {
    //     day = "Monday";


    //     // res.send("its holiday");
    // }
    // else if (currentdate === 2) {
    //     day = "Tuesday";

    //     // res.send("its holiday");
    // }
    // else if (currentdate === 3) {
    //     day = "Wednesday";

    //     // res.send("its holiday");
    // }
    // else if (currentdate === 4) {
    //     day = "Thursday";

    //     // res.send("its holiday");
    // }
    // else if (currentdate === 5) {
    //     day = "Friday";

    //     // res.send("its holiday");
    // }
    // else if (currentdate === 6) {
    //     day = "Saturday";

    //     // res.send("its holiday");
    // }
    // res.render("list", { kindofday: day });


});


app.post("/", function (req, res) {
    //  2. app.post will welcome the material from form in ejs file
    // console.log(req.body);
    var item = req.body.additem;
    var workitem = req.body.additem;

    if (req.body.btn === "Work list") {

        workitems.push(workitem);
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");

    }

    //3. now app.post will push material in items array and send to the home route to process the work on that material 
});

app.get("/work", function (req, res) {


    res.render("list", { listTitle: "Work list", newlistitems: workitems });


});


// we listen on port 3000
app.listen(3000, function () {
    console.log("i am appdotlisten port 3000");
});