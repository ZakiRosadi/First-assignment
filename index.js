const express = require ('express') //import
const path= require('path') //this is for file we want to address
const app = express() // execute and save it in variable
// const blogjs = require ('./src/mocks/myProject.json')

const config = require('./src/config/config.json')   //import connection
const { Sequelize, QueryTypes} = require("sequelize") // import methods sequelize and QueryTYpes
// const { UPDATE } = require('sequelize/types/query-types')
const sequelize = new Sequelize(config.development)

// console.log(config.development);

const port = 5000 // address

//setup
app.set ('view engine','hbs')  // innit hbs to node.js
app.set ('views',path.join(__dirname, 'src/view'))  // to access hbs inside the view

//set static file server
app.use (express.static('src/task 1'))  // to get resource from folder

// parsing data from client
app.use(express.urlencoded({ extended: false }))


// service or routing
app.get('/', home)
app.get('/contact_me_bootstrap', contactMeBootstrap)
app.get('/contact_me', contactMe)
app.get('/myProject', myProject)
app.post('/myProject', myProjectPost)
app.get ('/delete-blog/:id', deleteBlog)
app.get ('/update-blog/:id', UpdateBlog)
app.get('/project_detail/:id', projectDetail)
app.get('/testimonials', testimonials)


//directing to port
app.listen (port, ()=>{                                     //directing to port
    console.log("app is running on 5000")
})


app.get ('/zaki', (req, res) =>{
    res.send ("hello")
})

//function
function home (req, res){
    res.render ('index')
}

function contactMeBootstrap (req, res){
    res.render ('contact_me_bootstrap')    //res.render and then put ('file's name') 
}

function contactMe (req, res){
    res.render ('contact_me')
}




async function myProject (req, res){
  try{
const query = `SELECT id, projectname, "startdate", "enddate", description, technologies, picture, "createdAt", "updatedAt" FROM blogs` 
let objectDatabase = await sequelize.query(query, {type : QueryTypes.SELECT})
const manipulateData = objectDatabase.map ((res) => ({
  ... res,
  author : "zaki"
}))

res.render ('myProject', { dataBlogs: manipulateData })  // dataBlogs is used for hbs and blogs= blog's data
}catch(error){
    console.log(error);

  }
}



async function myProjectPost (req, res){
  try {
    let  { projectname,description, startdate, enddate,nodejs,reactjs,nextjs,typescript} = req.body;
  //  const technologiesButton = req.body.progammingLanguage


    console.log(projectname);
    console.log(startdate);
    console.log(enddate);
    console.log(description);
    console.log(reactjs);
    console.log(nodejs);
    console.log(nextjs);
    console.log(typescript);
    // console.log(technologiesButton)
    // const myprojectdata = req.body
    
    // console.log(myprojectdata);
    
    //this is for getting duration
      let startingDate = new Date(startdate);
        let endingDate = new Date(enddate);
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
    //end 
    
    //technology boxes
    nodejs ? (nodejs = ` fab fa-node fa-xl`) : (nodejs = null);
    nextjs ? (nextjs = `fab fa-vuejs fa-xl`) : (nextjs = null);
    reactjs ? (reactjs = `fab fa-react fa-xl`) : (reactjs = null);
    typescript ? (typescript = `fab fa-js-square fa-xl`) : (typescript = null);

    const checkboxTechnologies= [nodejs, nextjs, reactjs, typescript];
    const filteredData = checkboxTechnologies.filter((datatechnologies) => {
      return datatechnologies != null;
      // console.log(datatechnologies);

    });

    const objectData = {
        projectname,
        startdate,
        enddate,
        totalDuration,
        description,
        // postedAt : new Date(),
        author: "zaki",
        // technologiesButton,
        logoTech : filteredData
        // progammingLanguage
        
        // technologies,
        // picture
    }

    // const query = `INSERT INTO "blogs" ("projectname", "startdate","enddate",description","technologies", "picture", "createdAt", "updatedAt")
    // VALUES ('${projectname}','${startdate}',${enddate}','${description}','${technologies}', '${picture}',NOW(),NOW())`
    let query = `INSERT INTO "blogs" (projectname,"startdate","enddate",description,technologies,"createdAt", "updatedAt")
    VALUES ('${objectData.projectname}','${objectData.startdate}','${objectData.enddate}','${objectData.description}','{${filteredData}}',NOW(),NOW())`

    await sequelize.query(query, {type : QueryTypes.INSERT})

    // blogs.unshift(objectData)
    // console.log(blogs);
    res.redirect('/myProject')

  } catch (error) {
    console.log(error);
  }
   
}

async function projectDetail (req, res){
  try {
    const { id } = req.params
    const query = `SELECT * from "blogs" WHERE id=${id}`
    const dataObj = await sequelize.query(query, {type : QueryTypes.SELECT})
    const dataDetail = dataObj.map((res) =>({
      ...res,
      author: "zaki rosadi"
      
    }))
    
    res.render ('project_detail', {detail : dataDetail[0]})
  } catch (error) {
    console.log(error);
  }
}

// function projectDetail (req, res) {
//   res.render ('project_detail')
// }

function testimonials (req, res){
    res.render ('testimonials')
}

//this function is used to manipulate data by id(index) which means the data is moved to another adress
async function deleteBlog (req, res){
  try {
    const { id } = req.params
    const query = `DELETE from "blogs" WHERE id=${id}`
    await sequelize.query(query, {type : QueryTypes.DELETE})

    console.log(id);
    res.redirect('/myProject')
    } catch (error) {
    
  }
}

async function UpdateBlog (req, res) {
  try {
    const {id} = req.params
  // const updateBlogs= blogs[id];

  let  { projectname,description, startdate, enddate,nodejs,reactjs,nextjs,typescript} = req.body;
  //  const technologiesButton = req.body.progammingLanguage


    console.log(projectname);
    console.log(startdate);
    console.log(enddate);
    console.log(description);
    console.log(reactjs);
    console.log(nodejs);
    console.log(nextjs);
    console.log(typescript);
    // console.log(technologiesButton)
    // const myprojectdata = req.body
    
    // console.log(myprojectdata);
    
    //this is for getting duration
      let startingDate = new Date(startdate);
        let endingDate = new Date(enddate);
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
    //end 
    
    //technology boxes
    nodejs ? (nodejs = ` fab fa-node fa-xl`) : (nodejs = null);
    nextjs ? (nextjs = `fab fa-vuejs fa-xl`) : (nextjs = null);
    reactjs ? (reactjs = `fab fa-react fa-xl`) : (reactjs = null);
    typescript ? (typescript = `fab fa-js-square fa-xl`) : (typescript = null);

    const checkboxTechnologies= [nodejs, nextjs, reactjs, typescript];
    const filteredData = checkboxTechnologies.filter((datatechnologies) => {
      return datatechnologies != null;
      // console.log(datatechnologies);

    });

    const newData = {
        projectname,
        startdate,
        enddate,
        totalDuration,
        description,
        // postedAt : new Date(),
        author: "zaki",
        // technologiesButton,
        logoTech : filteredData
        // progammingLanguage
        
        // technologies,
        // picture
    }

let query = `UPDATE blogs SET projectname= '${newData.projectname}', startdate='${newData.startdate}', enddate='${newData.enddate}',description='${newData.description}', technologies='{${filteredData}}' WHERE id=${id}`

 await sequelize.query(query, {type: QueryTypes.UPDATE})
 res.render('update-blog')
// blogs.splice (id, 1);

//   res.render ('update-blog', { dataBlogs : updateBlogs})
  } catch (error) {
    console.log(error);
  }
  
}



//data dummy
const blogs = [
    {
        projectname: "Hari ini hari terakhir saya belajar di minggu ke tiga",
        author: "Rebbecca Eltra",
        postedAt: new Date(),
        description: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?",
        logoTech: ["fab fa-node fa-xl", "fab fa-vuejs fa-xl","fab fa-react fa-xl", "fab fa-js-square fa-xl"
          
        ]
      }
    ]
      // {
      //   projectname: "Bro bayar utang mu.. ",
      //   author: "Jhon Doe",
      //   postedAt: new Date(),
      //   description: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?",
      //   technologies: ["nextjs", "reactjs", "nodejs", "typescript"]
      // },
      // {
      //   projectname: "Pinjam dulu seratus ",
      //   author: "Lordjen",
      //   postedAt: new Date(),
      //   description: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?",
      //   technologies:["nextjs", "reactjs", "nodejs", "typescript"]
      // },
      // {
      //   projectname: "maaf tidak ada ",
      //   author: "Lordjen",
      //   postedAt: new Date(),
      //   description: "Ketimpangan sumber daya manusia (SDM) di sektor digital masih menjadi isu yang belum terpecahkan. Berdasarkan penelitian ManpowerGroup, ketimpangan SDM global, termasuk Indonesia, meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, molestiae numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta, eligendi debitis?",
      //   technologies:["nextjs", "reactjs", "nodejs", "typescript"]
      // }
