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
        circle.eq(curr.index()+1).addClass('active').siblings().removeClass('active');
    } else {
        all.eq(0).addClass('current');
        circle.eq(0).addClass('active').siblings().removeClass('active');
    }
}
const prevSlide = ()=>{
    const curr = $('.current');
    curr.removeClass('current');
    if((curr.index() + 1) != 1){
        curr.prev().addClass('current');
        
        circle.eq(curr.index()-1).addClass('active').siblings().removeClass('active');
    } else {
        const last = all.length - 1;
        all.eq(last).addClass('current');
        circle.eq(last).addClass('active').siblings().removeClass('active');
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


