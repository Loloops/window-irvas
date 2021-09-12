
import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox'),
        popupCulcBtn = document.querySelector('.popup_calc_button');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function checkInput(inputSele) {
    inputSele.forEach((item) => {
      if (item.value === ''){
        item.style.border = '1px solid red'
        popupCulcBtn.setAttribute('disabled', 'disabled')
      } else {
        popupCulcBtn.removeAttribute('disabled', 'disabled')
        item.style.border = ''
      }
    })
  }
  checkInput(windowWidth);
  checkInput(windowHeight);

  function bindActionToElems (event, elem, prop) {
    elem.forEach((item, i) => {//при клике сохраняем id которое выбрал пользователь в объект
      
      item.addEventListener(event, () =>{
        
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox'){
              i === 0 ? state[prop] = 'Cold' : state[prop] = 'Warn';
              elem.forEach((box, j) => {
                box.checked = false;
                if (i == j){
                  box.checked = true;
                }
              });
            } else {
              checkInput(windowWidth);
              checkInput(windowHeight);
              state[prop] = item.value;
              
            }
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }
        console.log(state);
      });
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');
}
export default changeModalState;