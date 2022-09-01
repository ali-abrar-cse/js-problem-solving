function perfectFriend(friendsName){
    //input type has been validadet through this if
    if (typeof friendsName != 'object'){
        return 'Enter valid input';
    }
    //will execute after validation
    else{
        for(let friend of friendsName){
            if(friend.length == 5){
                return friend;
            }
        }
    }
}

let nameList = ['sabbir', 'alam', 'afifa', 'shafiul', 'sadat', 'shafiq'];
let result = perfectFriend(nameList);
console.log(result);

