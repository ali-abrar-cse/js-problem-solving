function deliveryCost(tShirtQuantity){
    //variable tShirtQuantity is being validated
    if((tShirtQuantity < 0) || (typeof tShirtQuantity != 'number')){
        return 'Enter valid number';
    }
    //will execute using valid input.
    else{
        if(tShirtQuantity <= 100){
            let deliveryCharge = tShirtQuantity * 100;
            return deliveryCharge;
        }
        //first 100 will must multiply by 100
        else if(tShirtQuantity > 100 && tShirtQuantity <= 200 ){
            let restDeliveryCharge = tShirtQuantity - 100;
            let deliveryCharge = (100*100) + (restDeliveryCharge * 80);
            return deliveryCharge;
        }
        /*first 100 will must multiply by 100 & 
        second 100 will be must multiply by 80 rest will be multiply by 50*/
        else{
            let restDeliveryCharge = tShirtQuantity - 200;
            let deliveryCharge = (100*100) + (80*100) + (restDeliveryCharge * 50);
            return deliveryCharge;
        }
    }
}

console.log(deliveryCost(276));