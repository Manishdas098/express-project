const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 8000
const path = require('path');

const staticPath = path.join(__dirname,"../public");
const Templates_path = path.join(__dirname,"./Templates/views");
// console.log(partials_path);
const partials_path = path.join(__dirname,"../partials")

app.set('view engine', 'hbs');
app.set('views' ,Templates_path);
app.use(express.static(staticPath));
hbs.registerPartials(partials_path);


// routing
app.get("/" , (req , res)=>{
    res.render("index")
});

app.get("/about" , (req , res)=>{
    res.render("about")
});
app.get("/whether" , (req , res)=>{
    res.render("whether")
});
app.get("/404" , (req , res)=>{
    res.render("404error")
});

app.get("*" , (req , res)=>{
    res.render("404error");
}); 

app.listen(port, () => {
    console.log(`listing to the port  ${port}`)
});