import store from '../../index';
const currency = [
    {
        "country": "India",
        "rate": 1,
    },
    {
        "country": "Bangladesh",
        "rate": 2,
    },
    {
        "country": "Nepal",
        "rate": 3,
    },
    {
        "country": "Srilanka",
        "rate": 4,
    },
    {
        "country": "United States",
        "rate": 5,
    },
]
function storedata() {
    for(let i=0; i<store.getState().product.length; i++){
        for(let j=0; j<currency.length; j++){
            if(store.getState().countryselect === currency[j].country){
                store.getState().product[i].price = store.getState().product[i].price * currency[1].rate; 
            }
        }
    }
    return store.getState().product.price;
}

export default storedata;