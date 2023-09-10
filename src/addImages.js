Экспорт { add12img, add24img, add18img, add36img }
Импортировать { addDivImages } from "./index.js";
Импортировать { imgArray } from "./imgArray.js";

let cardNum = 0;
function addImages() {
  let randomId = []

  for (var t = 0; t < cardNum; t++) {
    rand()
  }

  function rand() {
    let ran = imgArray[Math.floor(Math.random() * imgArray.length)]
    if (randomId.indexOf(ran) === -1) {
      randomId.push(ran)
    } else {
      rand()
    }
  }

  const toHTML = random =>
    `<div class="mui--text-center mui-col-xs-6 mui-col-md-2">
      <div class="mui-panel">
        <img class="non-class" src="${random.img}" alt="${random.title}">
      </div>
    </div>`;


  function render() {
    const html = randomId.map(random => toHTML(random)).join('')
    addDivImages.innerHTML = html
  }

  render()

}

function add12img() {
  cardNum = 12
  addImages();
}

function add18img() {
  cardNum = 18
  addImages();

}

function add24img() {
  cardNum = 24
  addImages();
}


function add36img() {
  cardNum = 36
  addImages();
}
