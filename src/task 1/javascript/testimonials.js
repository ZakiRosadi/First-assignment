const testimonialsData =[ 
    {
        name: "DANDI",
        comment: "Kelasnya sangat kacau",
        rating: 2,
        picture:" https://images.app.goo.gl/mv4FggF4snv3rp6X8"
      },
      {
        name: "ABEL",
        comment: "Cukup memusingkan",
        rating: 4,
        picture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        name: "Silvi",
        comment: "Aku sudah kenyang",
        rating: 5,
       picture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        name: "NDRO",
        comment: "btw its okay bruh",
        rating: 5,
        picture: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      }
]


function showTestimonial () {
    let testimonialOfHtml =""

    testimonialsData.forEach(item => {
        testimonialOfHtml += `<div class="testimonial">
        <img src="${item.picture}class="profile-testimonial" />
        <p class="quote">${item.comment}</p>
        <p class="author">${item.name}</p>
    </div>`
    })

    document.getElementById("testimonials").innerHTML = testimonialOfHtml
}

showTestimonial();

// this is for filtering

function filterTestimonials (rating) {
    let testimonialOfHtml =""

    const dataFiltered = testimonialsData.filter(data  =>data.rating === rating)

    if(dataFiltered.length ===0){
        testimonialOfHtml =` <h3> Data not found</h3>`
    }else {
        dataFiltered.forEach(item => {
            testimonialOfHtml += `<div class="testimonial">
            <img src="${item.picture} class="profile-testimonial" />
            <p class="quote">${item.comment}</p>
            <p class="author">${item.name}</p>
        </div>`
        })
    }
    document.getElementById("testimonials").innerHTML = testimonialOfHtml

}