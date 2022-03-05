//snippet page function

const imageContainer = document.getElementById("snippet-container");
const imageURL = "./project.json";
const numberOfRows = 4;

getSnippets(imageURL);

async function getSnippets(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.snippets);
  //await response.json is what returns the data
  showSnippets(data.snippets);
}
function showSnippets(snippets) {
  const snippet = snippets;
  let snippetHTML = "";
  for (let i = 0; i < numberOfRows; i++) {
    snippetHTML += `<div class="row">`;
    for (let j = 0; j < numberOfRows; j++) {
      const index = i * numberOfRows + j;
      if (index < snippet.length) {
        snippetHTML += `<div class="col-sm-3">
        <div class="card">
        <img src="${snippet[index].imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
          <h3 class="card-title">${snippet[index].title}</h3>
       
        </div>
      </div>
      </div>`;
      }
    }
    snippetHTML += `</div>`;
  }
  imageContainer.innerHTML = snippetHTML;
}

//could be used later
// <p class="card-text">${snippet[index].description}</p>
// <a href="${snippet[index].link}" class="btn btn-primary">Go somewhere</a>

var gallery = document.querySelector("#gallery");
var getVal = function (elem, style) {
  return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
var getHeight = function (item) {
  return item.querySelector(".content").getBoundingClientRect().height;
};
var resizeAll = function () {
  var altura = getVal(gallery, "grid-auto-rows");
  var gap = getVal(gallery, "grid-row-gap");
  gallery.querySelectorAll(".gallery-item").forEach(function (item) {
    var el = item;
    el.style.gridRowEnd =
      "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
  });
};
gallery.querySelectorAll("img").forEach(function (item) {
  item.classList.add("byebye");
  if (item.complete) {
    console.log(item.src);
  } else {
    item.addEventListener("load", function () {
      var altura = getVal(gallery, "grid-auto-rows");
      var gap = getVal(gallery, "grid-row-gap");
      var gitem = item.parentElement.parentElement;
      gitem.style.gridRowEnd =
        "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
      item.classList.remove("byebye");
    });
  }
});
window.addEventListener("resize", resizeAll);
gallery.querySelectorAll(".gallery-item").forEach(function (item) {
  item.addEventListener("click", function () {
    item.classList.toggle("full");
  });
});
