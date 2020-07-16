const barca = document.querySelector('.barca-page');
const real = document.querySelector('.real-page');
const man = document.querySelector('.man-page');
const juv = document.querySelector('.juv-page');


const f_Sec = document.querySelector('.f-section');
const s_Sec = document.querySelector('.s-section');
const th_Sec = document.querySelector('.th-section');
const forth_Sec = document.querySelector('.forth-section');
const main_container = document.querySelector('.main-container');
const home_page = document.querySelector('.home-page');
const home_page2 = document.querySelector('.home-page2');
const home_page3 = document.querySelector('.home-page3');
const home_page4 = document.querySelector('.home-page4');






f_Sec.addEventListener('click' , ()=>{

    barca.classList.add('tog');
    main_container.classList.add('dis');

})

home_page.addEventListener('click' , ()=>{

    barca.classList.remove('tog');
    main_container.classList.remove('dis');

})


s_Sec.addEventListener('click' , ()=>{

    real.classList.add('tog');
    main_container.classList.add('dis');

})

home_page2.addEventListener('click' , ()=>{

    real.classList.remove('tog');
    main_container.classList.remove('dis');

})

th_Sec.addEventListener('click' , ()=>{

    man.classList.add('tog');
    main_container.classList.add('dis');

})

home_page3.addEventListener('click' , ()=>{

    man.classList.remove('tog');
    main_container.classList.remove('dis');

})


forth_Sec.addEventListener('click' , ()=>{

    juv.classList.add('tog');
    main_container.classList.add('dis');

})

home_page4.addEventListener('click' , ()=>{

    juv.classList.remove('tog');
    main_container.classList.remove('dis');

})



const trans = document.querySelectorAll('.trans');

window.addEventListener('scroll' , ()=>{
    let scroll = window.pageYOffset;

    trans.forEach(e =>{
        let speed = e.dataset.speed;
        e.style.transform = `translateY${scroll * speed}px`
    })
})

