const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu-links');
    const user = document.querySelector('.user-menu');
    const navFixed = document.getElementsByName('nav');
    //const navLinks = document.querySelectorAll('.menu-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        user.classList.toggle('nav-active');

    
       /*navLinks.foreach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.5}s`;
            }

        });*/
    });
}
navSlide();