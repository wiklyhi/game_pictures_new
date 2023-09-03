import './style.css' // импорт стилей
import { add12img, add24img, add18img, add36img } from './addImages.js'
import { activateModalSelect } from './modal';
import { addModalClickImages } from './modal';
import { addModalInputName } from './modal';
import { fatality } from './modal';
import { addResult } from './modal';
import { autocomplete } from './autocomp';
import { countries } from './autocomp';

export const addDivImages = document.getElementById('add-div-images'); // див для добавления массива изображений и обработки

let result = 0
let y = 1

const setNumImgList = document.querySelector(".list-button") // определяем меню
setNumImgList.addEventListener("click", setNumImg) // кликаем по меню и запускаем функцию выбора изображений

addDivImages.addEventListener("click", setDivImg) // кликаем по изображениям

const buttonStart = document.getElementById("start")
buttonStart.addEventListener("click", startApp)

const buttonResult = document.getElementById("result")
buttonResult.addEventListener("click", procentResult)

function setNumImg(event) { // выбор кол-ва изображений
  addDivImages.innerHTML = "" // очистка страницы
  if (!event.target.matches("a")) { // cлушатель 
    return
  } else {
    let elemButtonId = event.target.id
    if (elemButtonId == 12) {
      add12img()
      y = 12
      result = 0
    }
    if (elemButtonId == 18) {
      add18img()
      y = 18
      result = 0
    }
    if (elemButtonId == 24) {
      add24img()
      y = 24
      result = 0
    }
    if (elemButtonId == 36) {
      add36img()
      y = 36
      result = 0
    } else
      return
  }
}



function setDivImg(event) { // выбор изображения кликом
  if (!event.target.matches(".image-content")) {
    addModalClickImages()
  } else {
    addModalInputName()
    let q = document.getElementById("my-input")
    setTimeout(function() {
      q.focus()
    }, 300)
    autocomplete(q, countries)
    q.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        document.getElementById("modal-input").focus()
      }
    })
    document.getElementById("modal-input").onclick = function() {
      let elModal = document.getElementsByTagName("form")
      let message = document.getElementById("my-input").value
      console.log(message)
      if (message == event.target.alt) {
        event.target.classList.remove("image-content")
        mui.overlay('off', elModal)
        result++
        console.log(result)
      } else {
        fatality()
        let clas = document.querySelector("body")
        clas.classList.remove("mui-scroll-lock")
      }
      console.log(event.target.alt)
    }
  }
}

function startApp() {
  let el = document.getElementsByClassName("non-class")
  if (el.length == 0) {
    activateModalSelect()
  } else {
    for (let i = el.length; i--;) {
      el[i].classList.add("image-content")
    }
  }
}

function procentResult() {
  let procent = 100 * result / y
  console.log(procent)
  console.log(y)
  console.log(result)
  if (procent == 0) {
    activateModalSelect()
    addDivImages.innerHTML = "" // очистка страницы
    return
  }
  else if (procent <= 10) {
    addResult(1)
    addDivImages.innerHTML = "" // очистка страницы
  }
  else if (procent <= 25) {
    addResult(2)
    addDivImages.innerHTML = "" // очистка страницы
  }
  else if (procent <= 50) {
    addResult(3)
    addDivImages.innerHTML = "" // очистка страницы
  }
  else if (procent <= 75) {
    addResult(4)
    addDivImages.innerHTML = "" // очистка страницы
  }
  else if (procent > 75) {
    addResult(5)
    addDivImages.innerHTML = "" // очистка страницы
  } else {
    // alert('нет данных')
    return
  }
}
