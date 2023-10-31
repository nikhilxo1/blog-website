const blogTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector(".banner");
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, "banner");
})

uploadInput.addEventListener('change', () => {
    uploadImage(uploadInput, "image");
})



let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

publishBtn.addEventListener('click', () => {
    if(articleFeild.value.length && blogTitleField.value.length){
        // generating id
        let letters = 'abcdefghijklmnopqrstuvwxyz';
       // let blogTitle = blogTitleField.value.split(" ").join("-");
       sessionStorage.setItem('blogTitleField.value.split'.join("-")); 
var user = sessionStorage.getItem('publishBtn');
console.log(user);
        let id = '';
        for(let i = 0; i < 4; i++){
            id += letters[Math.floor(Math.random() * letters.length)];
        }

        // setting up docName
        let docName = `${blogTitle}-${id}`;
        let date = new Date(); // for published at info

        //access firstore with db variable;
        db.collection("blogs").doc(docName).set({
            title: blogTitleField.value,
            article: articleFeild.value,
            bannerImage: bannerPath,
            publishedAt: `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
        })
        .then(() => {
            location.href = `/${docName}`;
        })
        .catch((err) => {
            console.error(err);
        })
    }
})

document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
    });