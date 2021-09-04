//navbar functionality
const nav = document.querySelector('.navbar');
window.addEventListener('scroll',activateStickyNav);

function activateStickyNav(){
    if (window.scrollY > nav.offsetHeight + 150) {
      nav.classList.add('active')
    }else{
      nav.classList.remove('active');
    }
}

//typewriter function
var i = 0;
var typeWritingText = 'Welcome to 100 days of HTML, CSS and Javascript.';
var speed = 50;

function typeWriter() {
  if (i < typeWritingText.length) {
    document.getElementById("typewrite").innerHTML += typeWritingText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
//Counter.js
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    //the sets the counter to 0 and overwrites what has ben written the html
    counter.innerText = '0';
    //this update the counter from 0 to te number you have written in you data addtribute in the html files
    const updateCounter = () =>{
        const target = +counter.getAttribute('data-attribute');

        const updatedCounter = +counter.innerText;

        const increment = target / 250;

        if (updatedCounter < target) {
            counter.innerText = Math.ceil(updatedCounter + increment);
            setTimeout(updateCounter, 1);
        } else{
            counter.innerText = target;
        }
    }

    updateCounter();
});