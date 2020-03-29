;(function(){
    let btn = document.querySelectorAll('.button-accordion')
    let btnIcon = document.querySelectorAll('.button-accordion i')
    let ulShow = document.querySelectorAll('.button-accordion + ul')
    
    btn.forEach( (item, i) => { 
        btn[i].addEventListener('click', () => { 
            btnIcon[i].classList.toggle('icon-right');
            btnIcon[i].classList.toggle('icon-down');
            ulShow[i].classList.toggle('show')
        })
    })
}());