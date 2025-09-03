const accountId = 554433
let accountEmail ="naxxs999@email.com"
var accountPassword = "558077"
accountCity = "chennai"
let accountState;

//accountId = 2 //not allowed

accountEmail = "hg@hg.com"
accountPassword = "4433212"
accountCity = "mumbai"

console.log(accountId);

/*
prefer not to use var 
beacause of issue in block scope and functional scope 
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
