
var loader = document.getElementById('preloader');
      window.addEventListener("load", function(){
        loader.style.display = "none";
      })

// typing
var i=0,text;
text = "Yes, i am Full-Stack Developer";
function type() {
    if(i < text.length){
        document.getElementById('typing').innerHTML += text.charAt(i);
        i++;
        setTimeout(type,70)
    }
}
type();

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var doc = $(document).height();
        var win = $(window).height();
        var value = ( scroll / (doc-win)) * 100;
        $('.ul-line').css('height', value + '%');
    })
})

// mobile menu
function showMenu(){
    document.getElementById('mobileMenu').style.display = 'block';
}
function hideMenu(){
    document.getElementById('mobileMenu').style.display = 'none';
}

// FAQ
const accordion = document.querySelectorAll('.accordion');

 
accordion.forEach((item, index) => {
  let header = item.querySelector(".accordion-link");
  header.addEventListener('click', () => {
    item.classList.toggle('open');

    let description = item.querySelector('.answer');
    if(item.classList.contains('open')){
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector('i').classList.replace("ion-md-add", "ion-md-remove");
    }else{
      description.style.height = '0px';
      item.querySelector('i').classList.replace("ion-md-remove", "ion-md-add");
    }
    removeOpen(index);
  })
})

function removeOpen(index1){
  accordion.forEach((item2, index2) => {
    if(index1 != index2){
      item2.classList.remove('open');

      let des = item2.querySelector('.answer');
      des.style.height = '0px';
      item2.querySelector('i').classList.replace("ion-md-remove", "ion-md-add")
    }
  })
}

function clickFocus(){
  document.querySelector('').classList.add('contact-focus-button');
}



// popup button
const focusBtn = document.querySelector('.contact-hover-button');

focusBtn.addEventListener('click', (e) => {
  e.classList.add('.contact-focus-button')
})




  /**
   * Animation on scroll function and init
   */
   function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });
  