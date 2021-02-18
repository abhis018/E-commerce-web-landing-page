const product = require("./db").product;
const filterType = {
    pricefilter: {
        'greaterthan10000' : 'greaterthan10000',
        'between4001_10000' : 'between4001_10000',
        'between2501_4000' : 'between2501_4000',
        'between1001_2500' : 'between1001_2500',
        'lessthan1000' : 'lessthan1000'
    },
    ratingfilter : {
        'equalto5' : 'equalto5',
        'greaterthan4' : 'greaterthan4',
        'greaterthan3' : 'greaterthan3',    
        'greaterthan2' : 'greaterthan2',
        'greaterthan1' : 'greaterthan1'
    }
}


function fetchdata(pricefilter, ratingfilter) {
    let res = [];
    for(let i=0; i<product.length; i++){
        switch(pricefilter) {
            case filterType.pricefilter.greaterthan10000:
                if (product[i].price > 10000) {
                    res.push(product[i]);
                }
                break;
            case filterType.pricefilter.between4001_10000:
                if(product[i].price > 4000 & product[i].price <= 10000){
                    res.push(product[i]);
                }
                break;
            case filterType.pricefilter.between2501_4000:
                if(product[i].price > 2501 & product[i].price <= 4000) {
                    res.push(product[i]);
                }
                break;
            case filterType.pricefilter.between1001_2500:
                if(product[i].price > 1001 & product[i].price <= 2500) {
                    res.push(product[i]);
                }
                break;
            case filterType.pricefilter.lessthan1000:
                if (product[i].price < 1000) {
                    res.push(product[i]);
                }
                break;
            default:
                res.push(product[i]);
        }
    }
    let finalRes = [];
    for (let i=0; i< res.length; i++) {
        switch (ratingfilter) {
            case filterType.ratingfilter.equalto5:
                if (res[i].rating === 5) finalRes.push(res[i]);
                break;
            case filterType.ratingfilter.greaterthan4:
                if (res[i].rating >= 4 ) finalRes.push(res[i]);
                break;
            case filterType.ratingfilter.greaterthan3:
                if (res[i].rating >= 3) finalRes.push(res[i]);
                break;
            case filterType.ratingfilter.greaterthan2:
                if (res[i].rating >= 2) finalRes.push(res[i]);
                break;
            case filterType.ratingfilter.greaterthan1:
                if (res[i].rating >= 1) finalRes.push(res[i]);
                break;
            default:
                finalRes.push(res[i]);
        }
    }
    return finalRes;
}

export default fetchdata;
   