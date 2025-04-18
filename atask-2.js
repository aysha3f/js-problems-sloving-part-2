// node atask-2.js

function sendNotification(email) {
if(email.indexOf('@') === -1){
    return "Invalid Email"
}
 let parts = email.split('@');
 let userName = parts[0];
 let domainName = parts[1];
 return `${userName} sent you an email from ${domainName}`;
    
}
console.log(sendNotification("nadim.naem5@outlook.com"))
console.log(sendNotification("nadim.naem5outlook.com"))


