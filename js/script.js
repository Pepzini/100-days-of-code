//navbar functionality
const nav = document.querySelector(".navbar");

window.addEventListener("scroll", activateStickyNav);

function activateStickyNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
//project page functionality
const projectPage = document.getElementById("projectsCard");
const api_URL = "./project.json";
//creating a request to fetch the api
getProjects(api_URL);

async function getProjects(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.projects);
  //await response.json is what returns the data
  showProjects(data)
}
function showProjects(projects) {
  projectPage.innerText = '';

  projects.forEach(project => {
    const { name, imageUrl, sourceCode, demoCode } = project;
    const projectElement = document.createElement("div");
    projectElement.classList.add("portfolio-row");

    projectElement = `
    <div class="card">
    <img src="${imageUrl}" alt="${name}" />
    <div class="content">
      <h2>${name}</h2>
      <div class="project-buttons">
        <button>${sourceCode}</button>
        <button>${demoCode}</button>
      </div>
    </div>`;
   projectPage.appendChild(projectElement);
  });
}
//snippet page function
const imageContainer = document.getElementById('snippet-container');

const unsplashURL = 'https://source.unsplash.com/random/';
const numberOfRows = 5;

for (let index = 0; index < numberOfRows * 4; index++) {
    const image = document.createElement('img');
    image.src = `${unsplashURL}${getRandomImageSize()}`;  
    imageContainer.appendChild(image)
}

function getRandomImageSize() {
    return `${getRandomImageNumber()}*${getRandomImageNumber()}`
}
function getRandomImageNumber() {
    return Math.floor(Math.random() * 10) + 300
}
//typewriter function
/*var i = 0;
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
}); */
