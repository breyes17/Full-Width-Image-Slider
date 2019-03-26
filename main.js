const all = document.querySelectorAll('.slides');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    } else {
        all[0].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
}
const prevSlide = () =>{
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    } else {
        all[all.length-1].classList.add('current');
    }
    setTimeout(()=> current.classList.remove('current'));
}

next.addEventListener('click',()=>{
    nextSlide();
});
prev.addEventListener('click',()=>{
    prevSlide();
});