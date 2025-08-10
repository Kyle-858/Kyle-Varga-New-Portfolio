//TEMPLATE ID: template_9r6fd19
//SERVICE ID: service_fp0hq9x
//USER ID: 01qY6jcPjQjqwqYKm

let isModalOpen = false
let contrastToggle = false
const scaleFactor = 1 / 20

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const booleanInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px)
        rotate(${angle * booleanInt}deg)`
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
    }

    

function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_fp0hq9x',
            'template_9r6fd19',
            event.target,
            '01qY6jcPjQjqwqYKm'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(( ) => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me directly at krazykyle19@gmail.com"
        )
    })  
}

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}