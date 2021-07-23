const onBtnClick = document.querySelector('.about-us__video-plab-btn');
const offBtnClick = document.querySelector('.about-us__video-overlay');

console.log(onBtnClick,offBtnClick);

onBtnClick.addEventListener('click',function(){
    offBtnClick.style.display= 'block';
})

offBtnClick.addEventListener('click',function(){
    offBtnClick.style.display= 'none';
})