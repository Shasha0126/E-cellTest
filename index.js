const express=require("express");
const app = express();
const path = require('path');
const fs = require('fs');
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/main',(req,res)=>{
    res.render('main');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});