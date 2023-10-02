//when I klik submit button, where will the data go?
// i got error in enddate data.

const data=[]

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
}

// this is for image
let image = document.getElementById("uploadblogimage").files
  
image = URL.createObjectURL(image[0]);

//this is variable for object
    const obj = {
      title,
      startdate,
      endate,
      description,
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
      let imgCheckBox="";
        for(let n=0; n < data[i].box.length ; n++){
          imgCheckBox+=`
          <img src="./task 1/images/${data[i].box[n]}.svg" width="30px">
          `
        }
        document.getElementById("contents").innerHTML +=`<div class="blog-list-item">
        <div class="container-title"> <h2>MY PROJECT</h2></div>
        <div class="container-content">

            
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
                      ${data[i].startdate} | ${data[i].author}
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

