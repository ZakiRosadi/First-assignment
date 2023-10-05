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

//testing=================================================


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

// const talent = [
//     {
//       id: 1,
//       name: "Mei Kristian Loli",
//       isVip: false
//     },
//     {
//       id: 2,
//       name: "Ivan",
//       isVip: true
//     },
//     {
//       id: 3,
//       name: "Silvi",
//       isVip: false,
//       hobby: [
//         {
//           id: 1,
//           name: "tiktokan",
//         },
//         {
//           id: 2,
//           name: "rebahan",
//         }
//       ]
//     }
//   ]
  
//   console.log(talent)
//   console.table(talent)
//   console.log(talent[2].name)
//   console.log(talent[2].name?.hobby[0].name)
// console.log(talent[2].name, talent[2].isVip, talent[2].hobby[0].name)




// const MyBio = {
//     name: "dandi saputra",
//     age: 18,
//     isMarried: false,
//     distance: 2,
//     myHobby: {
//       hobby1: "coding",
//       hobby2: "mobile legends",
//       hobby3: "nonton anime"
//     }
//   }

// function testing (nilai1, nilai2, nilai3){
//     console.log(nilai1 + nilai2 * nilai3)
// }

// testing(10, 10, 10)


// let myAge ="25"

// if (myAge < 18){
//     alert ("not adult")
// }else{
//     alert ("you are adult")
// }

// if (myAge ===25){              
//     alert ("true")
// } else {
//     alert ("not true")
// }

// const dataMahasiswa = {
//     name: "zaki",
//     username: "yoii",
//     age : 25,
//     passion:"learning something new"
// }

// console.log (dataMahasiswa)
// console.log (dataMahasiswa.age, dataMahasiswa.passion)
// console.log ()


// const array =["zaki", 18, "zuki", "alumni", "budiluhur University"]

// console.log (array)
// console.log (array[4])


// const arrayOfObject = [
//     {
//         name:"zaki rosadi",
//         age:25,
//         height:168,
//         skills: [
//             {
//                 id: 1,
//                 first : "English language"
//             },

//             {
//                 id:2,
//                 second: "JavaScript Language",
//                 other: "Html&css"
//             }
//         ]
//     }
// ]

// console.log (arrayOfObject[0].name, arrayOfObject[0]?.skills[1])
// console.log(arrayOfObject[0].skills)



