const testimonial = new Promise((resolve, reject) => {
    const xhr= new XMLHttpRequest()

    xhr.open("GET", "https://api.npoint.io/600b2ad6698b1b99e97a", true)// this is http method, url addres, status async.

    xhr.onload = function () {
        if(xhr.status == 200){
        resolve (JSON.parse(xhr.response))
    }else{
        reject ("error")
    }
    }

    xhr.onerror = function () {
        reject ("network error")
    }

    xhr.send ()

})


async function showTestimonial () {

    try{
        const response = await testimonial
        let testimonialOfHtml =""
    
        response.forEach(item => {
            testimonialOfHtml += `<div class="testimonial">
            <img src="${item.picture}class="profile-testimonial" />
            <p class="quote">${item.comment}</p>
            <p class="author">${item.name}</p>
            <p>${item.rating}<i class="fas fa-star"></i></p>
        </div>`
        })
        document.getElementById("testimonials").innerHTML = testimonialOfHtml
    } catch (error){
        console.log (error)
    }


}

showTestimonial();

// this is for filtering

async function filterTestimonials (rating) {
    try{
        const response= await testimonial
        let testimonialOfHtml =""
    
        const dataFiltered = response.filter(data  =>data.rating === rating)
    
        if(dataFiltered.length ===0){
            testimonialOfHtml =` <h3> Data not found</h3>`
        }else {
            dataFiltered.forEach(item => {
                testimonialOfHtml += `<div class="testimonial">
                <img src="${item.picture} class="profile-testimonial" />
                <p class="quote">${item.comment}</p>
                <p class="author">${item.name}</p>
                <p>${item.rating}<i class="fas fa-star"></i></p>
            </div>`
            })
        }
        document.getElementById("testimonials").innerHTML = testimonialOfHtml
    } catch (error){
        console.log(error);
    }

}