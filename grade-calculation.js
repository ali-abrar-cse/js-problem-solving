function grade(number){
    if(number<=100 && number >=80){
        console.log("Got A+");
    }
    else if(number<80 && number >=70){
        console.log("Got A");
    }
    else if(number<70 && number >=60){
        console.log("Got A");
    }
    else if(number<60 && number >=50){
        console.log("Got B");
    }
    else if(number<50 && number >=40){
        console.log("Got B-");
    }
    else if(number<40 && number >=0){
        console.log("Fail");
    }
    else{
        console.log("wrong input")
    }
    
}

let number = 1069;
grade(number);
