const {v4:uuidv4} = require('uuid');
const products=[
    {
        id :'1',
        title:'Nike Downshifter 12 Running Shoes',
        brand:'Nike',
        product_description:'Begin your running journey with Nike Downshifter 12. These Shoes are made from 20% recycled material with light weight, supportive fit, with a lightweight feel that easily transitions from your workout to hangout. Your trek begins. Lace up and hit the road.',
        price:'70',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTd4YzPT86t4BNBoGWeXjLua6WG8icfHACNRuB_h0eVc_fAtTyWWxzipOoQAKGHMm1dWW4YWEhf9mSobOjyuenEamEAej8H9X9Dgx4h2t28LmW1L-3LjY-UTyiphif8VYEnhg&usqp=CAc'
    },
    {
        id :'2',
        title:'Nike Flex Experience Run 11',
        brand:'Nike',
        product_description:'Comfortably zen, just like every run should be. On the Nike Flex Experience Run 11 Next Nature, we created a lightweight and clean design that feels as good as it looks.',
        price:'65',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSy3FuN0dX7hJPg21KU9Wdgp_OrBvOcxF_0V6MGtSlBDIdnp5UOAiuG8dxXL2itAHSzGD3LdAx_tJkFFw5J8ZAjwYjKGLK25cGsZBU8n68mAsCj5pTP4-GkyDZ1AeEXiIZBqzs&usqp=CAc'
    },
    {
        id :'3',
        title:'ADDIDAS ULTRABOUNCE SHOES',
        brand:'Addidas',
        product_description:'Ready to ramp up your training? These adidas shoes help you take the next step in your running journey. Lightweight Bounce cushioning provides comfort and flexibility to keep you energized when you add miles to your daily run.',
        price:'80',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ51yoRtXaGxRooqbqek4AsMMhYYcH8kkvhDmfaxnbGDeOFfdLg9OoMdF4O35DVyosk0YzRSBJFFrryKpeFi9KDLu_ABGNpkefQvPJiuQKNfkM8EZgC3kUJAg&usqp=CAE'
    },
    {
        id :'4',
        title:'Skechers Summits - Torre',
        brand:'Skechers',
        product_description:'Happier feet are just a step away with Skechers Summits - Torre. This lightweight active design features an engineered mesh upper with lace-up front and a Skechers Memory Foam™ cushioned comfort insole.',
        price:'50',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTf4qOsYRP3h9HE57_l6RZfvceTvgnxrDMI_PXVyzaplcOgiXWYwkMlzQrbBmacTAARrahv8gXyqFhSfe4d0Okyd45MnDWuP7iq2ixX7yiCnEtDCV8NGgILiZW6F2Cvx7xW&usqp=CAc'   
    },
    {
        id :'5',
        title:'Nike Pegasus 39 Womens Road Running Shoes',
        brand:'Nike',
        product_description:'Whether you prefer an extended route at sunrise or a quick jog at sunset, running is your daily ritual, and you need shoes just as dedicated.',
        price:'130',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhX6NPFQIWe9c1LBi7C0roSIF_DlYIeikdemYz3fjo_3B8RRFbAmPNdWKJ0QIKdJ6YnCyFWojtufhi_MPvR1vstgEkUI21Q7nSpTil92Eu35Vv4I8yM1Fw_veY3pFGrS_rAzM&usqp=CAc'
    },
    {
        id :'6',
        title:'Nike Air Presto Womens Shoes',
        brand:'Nike',
        product_description:'Happier feet are just a step away with Skechers Summits - Torre. This lightweight active design features an engineered mesh upper with lace-up front and a Skechers Memory Foam™ cushioned comfort insole.',
        price:'135',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS6VOjjNqbdmSYEim8I0PrN3ydsC4uNgLEjpxMoeQe22-D77ccVfp4HWZB1qY8czevz_q9ep_8xyTEdSww8As_tm-hIJ795Hnugo8E7-Zf1k43jRE537lxZR3q4BLpCy6XAXA&usqp=CAc'
    },
    {
        id :'7',
        title:'Addidas -Ultrboost 20',
        brand:'Addidas',
        product_description:'Happier feet are just a step away with Skechers Summits - Torre. This lightweight active design features an engineered mesh upper with lace-up front and a Skechers Memory Foam™ cushioned comfort insole.',
        price:'150',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT2yxMUZ8g6WLdTh0tdWsMIARxvXWD9XzhcRimD5CfnRPP9m5aMrO8IYF_uGGHTDxiTVtF--lqNwSrQQdHWPVe45BuKPFgb13e6LbfOhejHtK2aQcbCExw&usqp=CAc'
    },
    {
        id :'8',
        title:'Addidas - Mens running shoes',
        brand:'Addidas',
        product_description:'Happier feet are just a step away with Skechers Summits - Torre. This lightweight active design features an engineered mesh upper with lace-up front and a Skechers Memory Foam™ cushioned comfort insole.',
        price:'150',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTd_lR_aIQd6RGo0zmUMq2RNYMw9vRgwQk_Ku7Oh6R4pAd-GSfa1-6-Kk3g8bB20fZxJu4wKTLwg5prAeOkQFHZJAV69Sl6nfU-lvvZhqKORDkz8CIegNfsDzaKo_yfkPCpKA8&usqp=CAc'
    },
    {
        id :'9',
        title:'Skechers GO WALK air',
        brand:'Skechers',
        product_description:'Happier feet are just a step away with Skechers Summits - Torre. This lightweight active design features an engineered mesh upper with lace-up front and a Skechers Memory Foam™ cushioned comfort insole.',
        price:'100',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRG5G3isCmE43yuyQc0FraBp1GVFMYLCzGQZ9QkMDi5bRwWoIwxOvs3WhpUq1y9yeNEglA1kCrZxDeI8NiMvPmPVgQDjHlMTWvQ_o3d3Q5pfZXQL4lJ2Ix6&usqp=CAE'
    },
    {
        id :'10',
        title:'Skechers Womens UNO',
        brand:'Skechers',
        product_description:'Happier feet are just a step away with Skechers Summits - Torre. This lightweight active design features an engineered mesh upper with lace-up front and a Skechers Memory Foam™ cushioned comfort insole.',
        price:'80',
        size:[6,7,8,9,10],
        image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQhSL0jG3J6w-Nrgjmk1wvUD49ngE0X1cHDESUeHPtQV-O0eofdDz3YIG5RsLwa75UamLt6uLNW4E7a2HAkiUyxlKB7eAbEyW5w41PKSJ0gIMPL-GRAM0CJ&usqp=CAE'
    }
];

exports.find = ()=>{
    return products;
}
exports.findById = (id) => {
    return products.find(product=>product.id === id);
}
exports.save=(product)=>{
    product.id = uuidv4();
    product.size = [6,7,8,9,10];
    products.push(product);
}
exports.updateById=(id, newProduct)=>
{
    let product = products.find(product=>product.id === id);
    if(product){
        product.title=newProduct.title;
        product.product_description=newProduct.product_description;
        product.image=newProduct.image;
        product.price=newProduct.price;
        return true;
    }
    else{
        return false;
    }
}
exports.deleteById=(id)=>{
    let index=products.findIndex(product=> product.id === id);
    if(index !== -1)
    {
            products.splice(index,1);
            return true;
    }
    else
    return false;
}