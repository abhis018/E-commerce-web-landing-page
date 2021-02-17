const f1 = require("./db").product;

function fetchdata(){
    exports.f1 = f1;
}


function populate(ratingparam, priceparam){
    fetchdata();
    checkfilter();
}