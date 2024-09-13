const accountId = 144553
let accountEmail = "devankgupta65@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 Not allowed
accountEmail = "devank@gamil.com"
accountPassword = "21516"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
