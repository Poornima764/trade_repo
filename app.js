const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const app = express();
const buckleupRoutes = require('./routes/buckleupRoutes.js');
const methodOverride=require('method-override');

let port = 3000;
let host='localhost';
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//routing
app.get('/',(req,res)=>{
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.use('/products',buckleupRoutes);

app.use((req,res, next)=>{
    let err = new Error('the server cannot locate '+ req.url);
    err.status=404;
    next(err);
});

app.use((err,req,res,next)=>{
    console.log(err.stack);
    if(!err.status){
        err.status = 500;
        err.message=("Internal Server Error");
    }
    res.status(err.status);
    res.render('error',{error: err});
});

app.listen(port,host,()=>{
    console.log('Server is running on port',port);
});
