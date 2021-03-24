

const dropDown = () => {
    const burger = document.querySelector('.burger-menu');
    const burger1 = document.getElementById('burger1');
    const burger2= document.getElementById('burger2');
    const burger3 = document.getElementById('burger3');


    const navigation = document.querySelector('header>nav');
    const link1 = document.getElementById('home-link');
    const link2 = document.getElementById('games-link');
    const link3 = document.getElementById('about-link');
 
    //toggle
    burger.addEventListener('click', () => {
        navigation.classList.toggle('navigation-active');
        link1.classList.toggle('link-animation');
        link2.classList.toggle('link-animation');
        link3.classList.toggle('link-animation');
        burger1.classList.toggle('burger1-active');
        burger2.classList.toggle('burger2-active');
        burger3.classList.toggle('burger3-active');
    })

    //animation links

}

dropDown();