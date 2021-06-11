var bgimg= document.querySelector('.image-flip');
var btnleft= document.querySelector('.fa-chevron-left');
var btnright= document.querySelector('.fa-chevron-right');

var count=0 ;

btnleft.addEventListener('click',function(){
if(count === 7){
    count=0 ;
}
count++ ;

bgimg.style.backgroundImage= `url(/images/img-${count}.jpg) `;
    
});

btnright.addEventListener('click',function(){
    if(count === 0){
        count= 7 ;
    }
    count-- ;

    bgimg.style.backgroundImage= `url(/images/img-${count}.jpg) `;
        
    });