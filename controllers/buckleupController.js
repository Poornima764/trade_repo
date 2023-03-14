const model=require('../models/product.js');
// trades.html
exports.index=(req,res)=>{
    let products = model.find();
    res.render('./products/shophere',{products});
};
//newtrade.html
exports.new=(req,res)=>
{
    res.render('./products/sellproduct');
};
//posting data collected from newtrade.html
exports.create=(req,res)=>{
    // res.send('Created new Story');
    let product = req.body;
    model.save(product);
    res.redirect('/products');
};
// GET /products/:id -- sends details of particular item
exports.show=(req,res,next)=>{
    let id = req.params.id;
    let product = model.findById(id);
    if(product){
    res.render('./products/productdetails',{product});
    }else{
        let err= new Error('Cannot find a product with id '+id);
        err.status = 404;
        next(err);
        //res.status(404).send('Cannot find product with id '+id);
    }
};

// Update - /trades/:id/:edit 
exports.edit=(req,res,next)=>
{
    let id = req.params.id;
    let product = model.findById(id);
    if(product){
        res.render('./products/edit',{product});
        }
        else{
            let err= new Error('Cannot find a product with id '+id);
            err.status = 404;
            next(err);
        }
};

// update the story identify by id
exports.update=(req,res,next)=>
{
    let product = req.body;
    let id=req.params.id;
    model.updateById(id, product);
    if(product){
    res.redirect('/products/'+id);
    }
    else{
        let err= new Error('Cannot find a product with id '+id);
        err.status = 404;
        next(err);
    }
};
//delete an item from the list
exports.delete=(req,res,next)=>
{
    let id=req.params.id;
    if(model.deleteById(id))
    {
        res.redirect('/products');
    }else{
        let err= new Error('Cannot find a product with id '+id);
        err.status = 404;
        next(err);
    }
};
exports.aboutpage=(req,res)=>
{
    res.render('./about');
};

exports.contactpage = (req,res) => {
    res.render('./contact');
};