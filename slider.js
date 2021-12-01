const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click',(event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        sliderImage();
    });
});

function sliderImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('img-showcase').syle.transform = 'translateX(${- (imgId - 1) * displayWidth}px)';
}
