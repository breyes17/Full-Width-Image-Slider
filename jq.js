// For jQuery version
const all = $('.slides');
const next = $('#next');
const prev = $('#prev');
const circle = $('.circle-btn');
const nextSlide = ()=>{
    const curr = $('.current');
    curr.removeClass('current');
    if((curr.index() + 1) < all.length){
        curr.next().addClass('current');
    } else {
        $('.slides').first().addClass('current');
    }
}
const prevSlide = ()=>{
    const curr = $('.current');
    curr.removeClass('current');
    if((curr.index() + 1) != 1){
        curr.prev().addClass('current');
    } else {
        $('.slides').last().addClass('current');
    }
}

$('#next').click(()=>{
    nextSlide();
});

$('#prev').click(()=>{
    prevSlide();
});

// circles
// $('.circles .circle-btn').click(()=>{
//     console.log($(this));
//     console.log($(this).index());
// }); // Not working

$('.circles .circle-btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    all.eq($(this).index()).addClass('current').siblings().removeClass('current');
});


