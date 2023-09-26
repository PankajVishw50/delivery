let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
    searchForm.classList.remove('active');
}
 
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});



const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", async (event) => {
    console.log("cliecked");
    event.preventDefault();

    const form = new FormData(event.target);
    const body = new URLSearchParams(form);

    const resposne = await fetch("/api/contact", {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        body: body.toString()
    })

    if (resposne.status !== 200){
        alert("Failed to send message, try again");
        return;
    }


    alert("Successfully sent message");

    console.log(resposne);
})