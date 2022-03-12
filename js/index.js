function openMenu() {
    console.log(document.querySelector('.menu'))
    document.querySelector('.menu').classList.toggle('show-menu');
}

document.querySelector('.menu-open').addEventListener('click', openMenu);

console.log(document.querySelector('.menu-open'));