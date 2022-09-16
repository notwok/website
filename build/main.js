const title = document.querySelector('#hero-title');
const titleText = Array(
    'Leaner websites for a cleaner internet',
    'Lean green website machine',
    'Eco-friendly web design and hosting'
)
const random = Math.floor(Math.random() * titleText.length);

window.onload = title.innerHTML = titleText[random];
window.onload = title.classList.add('text-raisin');