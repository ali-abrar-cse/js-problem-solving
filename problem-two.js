function totalSales(shirtQuantity, pantQuantity, shoeQuantity){
    //validation of input parameter
    if(shirtQuantity < 0 || pantQuantity < 0 || shoeQuantity < 0 || typeof shirtQuantity  != 'number' || typeof pantQuantity != 'number' || typeof shoeQuantity != 'number'){
        return 'Enter valid input';
    }
    //Allowed to operate after validation
    else{
        let shirtPrice = 100;
        let pantPrice = 200;
        let shoePrice = 500;
        let totalPrice = (shirtPrice * shirtQuantity) + (pantPrice * pantQuantity) + (shoePrice * shoeQuantity);
        return totalPrice;
    }
}

console.log(totalSales(2, 2, 2));