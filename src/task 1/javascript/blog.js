//when I klik submit button, where will the data go?
// i got error in enddate data.

const data=[]

// let manydays="";
// let manymonths="";
// let manyWeeks=""
      
//       function getDuration (startdate,endate){
//         let startingDate = new Date(startdate);
//         let endingDate = new Date(endate);
//         let aDay = (1000*3600*24);

//         let interval1 = endingDate.getTime() - startingDate.getTime();
//         let intervalOneDay = interval1/aDay;
//         let intervalWeek = Math.floor(intervalOneDay/77);
//         let intervalMonth = Math.floor(intervalOneDay/30);
//         let totalDuration="";

//         if (intervalOneDay <= 6) {
//           totalDuration = intervalOneDay + " One Day ";
//         } else if (intervalWeek <= 3) {
//           totalDuration = intervalWeek + " One Week ";
//         } else if (intervalMonth >= 1) {
//           totalDuration = intervalMonth + " One Month ";
//         }

//         manydays= intervalOneDay;
//         manymonths= intervalMonth;
//         manyWeeks=intervalWeek;


//         console.log(interval1);
//         console.log(intervalOneDay);
//         console.log(intervalMonth);

//       }

function submitData(event) {
    event.preventDefault()
  
    let title = document.getElementById("projectname").value
    // let startdate= new Date(); document.getElementById("startdate")
    // let enddate= new Date(); document.getElementById("endate")
    // let dategroup = document.getElementById("date_group").value
    let startdate = document.getElementById("startdate").value
    let endate = document.getElementById("enddate").value
    let description = document.getElementById("description").value
    // let checkbox = document.getElementById("checkbox_group").value

  
//script for checkbox button//

let checkbox = document.getElementsByName("thisistech")
let box =[]
for (i=0; i<checkbox.length; i++){
    if(checkbox[i].checked){
        let initially =checkbox[i].value;

        box.push(initially);
    }
};

// this is for image
let image = document.getElementById("uploadblogimage").files
  
image = URL.createObjectURL(image[0]);


//this is for getting duration
        let startingDate = new Date(startdate);
        let endingDate = new Date(endate);
        let aDay = (1000*3600*24);

        let interval1 = endingDate.getTime() - startingDate.getTime();
        let intervalOneDay = interval1/aDay;
        let intervalWeek = Math.floor(intervalOneDay/7);
        let intervalMonth = Math.floor(intervalOneDay/30);
        let totalDuration="";

        if (intervalOneDay <= 6) {
          totalDuration = intervalOneDay + " Day ";
        } else if (intervalWeek <= 3) {
          totalDuration = intervalWeek + " Week ";
        } else if (intervalMonth >= 1) {
          totalDuration = intervalMonth + " Months ";
        }



//this is variable for object
    const obj = {
      title,
      // startdate,
      // endate,
      // manydays,
      // manymonths,
      
      description,
      totalDuration,
      box,
      image,
    //   date: new Date(),
      author: "zaki"
    }
// end of object
  
  
    data.push(obj)
    console.log(data);
    renderBlog()
  }

  function renderBlog(){
        document.getElementById("contents").innerHTML = "";

    for(let i=0; i < data.length; i++){
    // console.log(data) // =>> looking for the first index
        

      // looping untuk menampikan gambar yang checked pada checkbox
      // this is looping to show picture checked in variable checkbox
      let imgCheckBox="";
        for(let n=0; n < data[i].box.length ; n++){
          imgCheckBox+=`
          <img src="./task 1/images/${data[i].box[n]}.svg" width="30px">
          `
        };



      //this is for getting duration
        // let duration="";
        // if (data.manymonths ===0){
        //   duration += `${data.manydays}`
        // }else if(data.manymonths ===1){
        //   duration += `${data.manymonths} ${data.manydays}`
        // }else {
        //   duration += `${data.manymonths} ${data.manydays}`
        // }
      //   if(data.manymonths === 0){
      //     duration +=`
      //     ${data.manydays} Days
      //     `
      // } else if (data.manymonths === 1){
      //     duration += `
      //     ${data.manymonths} Month ${data.manydays} Days
      //     `
      // } else{
      //     duration += `
      //     ${data.manymonths} Months ${data.days} Days
      //     `
      // };

        document.getElementById("contents").innerHTML +=`
        

      
            <div class="card-project-1">
                <div class="container-card-project">
                    
                    <div class="card-project-img">
                        
                        <img src="${data[i].image}"/>
                    </div>
                  
        
                    <div class="technology">
                      <div class="technology-option">
                      ${imgCheckBox}
                      </div>

                  </div>
                    <h1>
                    <a href="project_detail.html" target="_blank">${data[i].title}</a>
                    </h1>
                    
                    <div class="detail-blog-content">
                      ${data[i].totalDuration}| zaki
                    </div>
                    <p>
                    ${data[i].description}
                    </p>
                    <div class="blog-content">
                        <div class="btn-group">
                          <button class="btn-edit">Edit Post</button>
                          <button class="btn-post">Post Blog</button>
                        </div>
                    <div style="float:right; margin: 10px">
                      <p style="font-size: 15px; color:grey">1 minutes ago</p>
                    </div>
                  </div>
                </div>
                
            </div>
        
        
     </div>
    </div>
  </div>`
      
      }
      }


      
    
      //   document.getElementById("contents").innerHTML += ` <div class="blog-list-item">

      //   <div class="blog-image">
      //     <img src="${data[i].image}" alt="" />
      //   </div>

      //   <div class="blog-content">
      //     <div class="btn-group">
      //       <button class="btn-edit">Edit Post</button>
      //       <button class="btn-post">Post Blog</button>
      //     </div>
          
      //     <div class="technology">
      //     <div class="technology-option">
      //     ${imgCheckBox}
      //     </div>

      // </div>

      //   <h1>
      //     <a href="project_detail.html" target="_blank">${data[i].title}</a>
      //    </h1>
          
      //     <div class="detail-blog-content">
      //       ${data[i].startdate} | ${data[i].author}
      //     </div>
      //     <p>
      //       ${data[i].description}
      //     </p>

      //     <div style="float:right; margin: 10px">
      //       <p style="font-size: 15px; color:grey">1 minutes ago</p>
      //     </div>
      //   </div>
      // </div>`



//     for(let i=0; i<data.length; i++){
//         document.getElementById('contents').innerHTML=`<div class="blog-list-item">
//         <div class="blog-image">
//           <img src="./task 1/images/blog-img.png" alt="" />
//         </div>
//         <div class="blog-content">
//           <div class="btn-group">
//             <button class="btn-edit">Edit Post</button>
//             <button class="btn-post">Post Blog</button>
//           </div>
//           <h1>
//             <a href="blog-detail.html" target="_blank"
//               >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
//             >
//           </h1>
//           <div class="detail-blog-content">
//             12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
//           </div>
//           <p>
//             Ketimpangan sumber daya manusia (SDM) di sektor digital masih
//             menjadi isu yang belum terpecahkan. Berdasarkan penelitian
//             ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
//             meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
//             dolor sit amet consectetur adipisicing elit. Quam, molestiae
//             numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
//             eligendi debitis?
//           </p>

//           <div style="float:right; margin: 10px">
//             <p style="font-size: 15px; color:grey">1 minutes ago</p>
//           </div>
//         </div>
//       </div>`
//     }
//   }

// ======================================


//   function renderBlog() {
//     for(let i=0; i<=data.length; i++){
//         document.getElementById("contents").innerHTML += `<div class="blog-list-item">
//         <div class="blog-image">
//           <img src="./task 1/images/blog-img.png" alt="" />
//         </div>
//         <div class="blog-content">
//           <div class="btn-group">
//             <button class="btn-edit">Edit Post</button>
//             <button class="btn-post">Post Blog</button>
//           </div>
//           <h1>
//             <a href="blog-detail.html" target="_blank"
//               >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
//             >
//           </h1>
//           <div class="detail-blog-content">
//             12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
//           </div>
//           <p>
//             Ketimpangan sumber daya manusia (SDM) di sektor digital masih
//             menjadi isu yang belum terpecahkan. Berdasarkan penelitian
//             ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
//             meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
//             dolor sit amet consectetur adipisicing elit. Quam, molestiae
//             numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
//             eligendi debitis?
//           </p>

//           <div style="float:right; margin: 10px">
//             <p style="font-size: 15px; color:grey">1 minutes ago</p>
//           </div>
//         </div>
//       </div>`
        
//     }
//   }

