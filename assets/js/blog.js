let blogs = []

function addBlog(event){
 event.preventDefault()

let title = document.getElementById("input-blog-title").value
let startDate = document.getElementById("input-date-start").value
let endDate = document.getElementById("input-date-end").value
let description = document.getElementById("input-desc").value
let image = document.getElementById("input-image")

image = URL.createObjectURL(image.files[0])

let blog = {
    title,
    projectDuration : countDuration(new Date(startDate), new Date(endDate)),
    description,
    image,
    techno : techCheckbox(),
}

  blogs.push(blog)
  generateBlog()
// console.log(blog)
}

// Techno Checkbox //

function techCheckbox(){
    const techCb = document.querySelectorAll(
        " .techno-container input[type='checkbox']:checked"
    );

let checkboxVal = [];

for (let i = 0; i < techCb.length; i++){
    checkboxVal.push(techCb[i].value)
}
return checkboxVal;

}

// generate blog

function generateBlog(){
    let blogContainer = document.getElementById("contents");

    blogContainer.innerHTML = "";
    for (let i = 0; i < blogs.length; i++){
    const techIcons = blogs[i].techno;
    
    blogContainer.innerHTML +=`
    <div class="blog-list-item">
    <div class="blog-image">
            <img src="${blogs[i].image}" />
        </div><div class="blog-content">
                <h1>
                    <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
                </h1>
                <div class="detail-blog-content">
                    Project Duration : ${blogs[i].projectDuration} month
                </div>
                <p>
                    ${blogs[i].description}
                </p>

                <div class="icon-product">
                ${techIcons[0] ? ` <i class="fa-brands fa-${techIcons[0]}"></i>` : ""}
                ${techIcons[1] ? ` <i class="fa-brands fa-${techIcons[1]}"></i>` : ""}
                ${techIcons[2] ? ` <i class="fa-brands fa-${techIcons[2]}"></i>` : ""}
                ${techIcons[3] ? ` <i class="fa-brands fa-${techIcons[3]}"></i>` : ""}
                </div>

                <div id="button-blog-config" class="button-blog">

                    <button id="edit">
                        Edit
                    </button>
                    <button id="delete">
                        Delete
                    </button>

                </div>

            </div>
            
        </div>` 
    
    }

}

function renderTechIcons(techIcons) {
    const blogCheckbox = document.querySelector(".icon-product");
  
    for (let i = 0; i < techIcons.length; i++) {
      blogCheckbox.innerHTML += `<i class="fa-brands fa-${techIcons[i]}"></i>`;
    }
  }

  function countDuration(startDate, endDate) {
    const result =
      startDate.getMonth() -
      endDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear());
  
    return Math.abs(result);
  }