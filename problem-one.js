function seerToMon(seer){
    //variable seer is being validated
    if((seer < 0) || (typeof seer != 'number')){
        return 'Enter valid input';

    }
    //valid input will allowed for this operation
    else{
        let mon = seer/40;
        return mon;
    }
}
console.log(seerToMon(177));