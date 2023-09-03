export { add12img, add24img, add18img, add36img }
import { addDivImages } from "./index.js";
import { imgArray } from "./imgArray.js"

function showImages(img) {
  let a = Math.floor(Math.random() * imgArray.length);
  img = imgArray[a] // рандомный объект с атрибутами
  return img
}

function AddImages() { //add div images
  let content = showImages()
  addDivImages.innerHTML +=
    `<div class="mui--text-center mui-col-xs-6 mui-col-md-2">
      <div class="mui-panel">
        <img class="non-class" src="${content.img}" alt="${content.title}">
      </div>
    </div>`;
}

function add12img() {
  for (let i = 0; i < 12; i++) {
    AddImages();
  }
}

function add18img() {
  for (let i = 0; i < 18; i++) {
    AddImages();
  }
}

function add24img() {
  for (let i = 0; i < 24; i++) {
    AddImages();
  }
}

function add36img() {
  for (let i = 0; i < 36; i++) {
    AddImages();
  }
}
