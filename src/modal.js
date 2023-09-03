export { activateModalSelect }
export { addModalClickImages }
export { addModalInputName }
export { fatality }
export { addResult }

function activateModalSelect() {
  // initialize modal element select images
  var modalEl = document.createElement('div');
  modalEl.style.width = '400px';
  modalEl.style.height = '200px';
  modalEl.style.margin = '100px auto';
  modalEl.style.backgroundColor = '#fff';
  modalEl.innerHTML += `
    <div class="mui--text-center mui--text-display1" style="padding-top:75px; padding-bottom:85px; color:#fff; background-color:#508dfe;">
      ВЫБЕРИТЕ ИЗОБРАЖЕНИЯ
    </div>`;
  // show modal
  mui.overlay('on', modalEl);
}

function addModalClickImages() {
  // initialize modal element select images
  var modalEl = document.createElement('div');
  modalEl.style.width = '400px';
  modalEl.style.height = '200px';
  modalEl.style.margin = '100px auto';
  modalEl.style.backgroundColor = '#fff';
  modalEl.innerHTML += `
    <div class="mui--text-center mui--text-display1" style="padding-top:75px; padding-bottom:85px; color:#fff; background-color:#508dfe;">
      НАЖМИТЕ СТАРТ
    </div>`;
  // show modal
  mui.overlay('on', modalEl);
}

function fatality() {
  // initialize modal element select images
  var modalEl = document.createElement('div');
  modalEl.style.width = '400px';
  modalEl.style.height = '200px';
  modalEl.style.margin = '100px auto';
  modalEl.style.backgroundColor = '#fff';
  modalEl.innerHTML += `
    <div class="mui--text-center mui--text-display1" style="padding-top:75px; padding-bottom:85px; color:#fff; background-color:#508dfe;">
      ОШИБКА!
    </div>`;
  // show modal
  mui.overlay('on', modalEl);
}

function addModalInputName() {
  // initialize modal element select images
  var modalEl = document.createElement('div');
  modalEl.style.width = '400px';
  modalEl.style.height = '200px';
  modalEl.style.margin = '100px auto';
  modalEl.style.backgroundColor = '#fff';
  modalEl.innerHTML += `
      <form class="mui-form mui--text-center mui-container" style="padding-top:35px; padding-bottom:10px; background-color:#508dfe;">
        <legend style="color:#fff;">ВВЕДИТЕ НАЗВАНИЕ</legend>
        <div class="mui-textfield">
          <input name="myCountry" id="my-input" type="text" class="mui--text-center form-control" value=""  autocomplete="off" autocapitalize="none" style="color:#fff;" placeholder="Введите название">
        </div>
        <button id="modal-input" class="mui-btn mui-btn--raised mui-btn--primary">OK</button>
      </form>`
  // show modal
  mui.overlay('on', modalEl);
}

function addResult(x) {
  // initialize modal element select images
  let modalEl = document.createElement('div');
  let image = '<img src="./images/звезда.png">'
  let images = image.repeat(x)

  console.log(images)
  modalEl.style.width = '500px';
  modalEl.style.height = '200px';
  modalEl.style.margin = '100px auto';
  modalEl.style.backgroundColor = '#fff';
  modalEl.innerHTML += `
    <div class="mui--text-center mui--text-display1" style="padding-top:75px; padding-bottom:85px; color:#fff; background-color:#508dfe;">
      ${images}
    </div>`;
  // show modal
  mui.overlay('on', modalEl);
}
