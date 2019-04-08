const all = document.querySelectorAll('.slides');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const circle = document.querySelectorAll('.circle-btn');

const nextSlide = () =>{
    const current = document.querySelector('.current');
    const active = document.querySelector('.active');
    current.classList.remove('current');
    active.classList.remove('active');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
        active.nextElementSibling.classList.add('active');
    } else {
        all[0].classList.add('current');
        circle[0].classList.add('active');
    }
    setTimeout(()=> {
        current.classList.remove('current');
        active.classList.remove('active');
    });
}
const prevSlide = () =>{
    const current = document.querySelector('.current');
    const active = document.querySelector('.active');
    current.classList.remove('current');
    active.classList.remove('active');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
        active.previousElementSibling.classList.add('active');
    } else {
        all[all.length-1].classList.add('current');
        circle[circle.length-1].classList.add('active');
    }
    setTimeout(()=> {
        current.classList.remove('current');
        active.classList.remove('active');
    });
}

next.addEventListener('click',()=>{
    nextSlide();
});
prev.addEventListener('click',()=>{
    prevSlide();
});

const clickCircle = (index)=>{
    circle.forEach(function(item,ind){
        item.classList.remove('active');
        all[ind].classList.remove('current');
    });
    circle[index].classList.add('active');
    all[index].classList.add('current');
}