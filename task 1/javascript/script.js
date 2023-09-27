function fetchData() {
    //data collection
const name = document.getElementById("Name").value
const email = document.getElementById("Email").value
const phone = document.getElementById("Phone").value
const subject = document.getElementById("Subject").value
const message = document.getElementById("Message").value


if(name == ""){
    return alert("Name should be filled in")
}else if(email ==""){
    return alert("Email should be filled in")
}else if(phone ==""){
    return alert("Phone should be filled in")
}else if(subject ==""){
    return alert("Subject should be filled in")
}if(message ==""){
    return alert("Message should be filled in")
}

//execute to mail
const emailReceiver ="zakirosadialg12@gmail.com"
let a= document.createElement ("a")
a.href=`mailto:${emailReceiver}?subject=${subject}$email=${email}hi I am zaki${name},
can you call me my phone number is ${phone}to talk about ${message}`
a.click()

let data= {
    name,
    email,
    phone,
    subject,
    message
    
}
console.log(data)

}
// let name=("zaki")
// console.log(name)
// let myAge= 20

// if(myAge < 18) {
//     alert("Kamu masih bocil")
//   } else if(myAge < 30) {
//     alert("Kamu sudah dewasa")
//   } else {
//     alert("Kamu sudah usia lanjut")
//   }