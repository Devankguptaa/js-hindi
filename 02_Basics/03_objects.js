// singleton 
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser={
    name:"Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym]: "mykey1",
    age:18,
    location: "jaipur",
    email:"devank@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser["email"]);
console.log(JsUser["full name"]); //cannot be written using dot
console.log(JsUser[mySym])

JsUser.email = "devank@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "devank@microsoft.com"
console.log(JsUser);

JsUser.greeting=function()
{
    console.log("Hello JS user");
}


JsUser.greetingTwo=function()
{
    console.log(`Hello JS user,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



