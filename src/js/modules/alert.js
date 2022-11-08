const body = document.querySelector("body");
const alert = document.querySelector('.alert');
const closeButton = document.querySelector('.alert__close');
//const alertWindow = document.querySelector('.alert__close');

export function close() {
   //console.log('closeModal');
   if (alert.closest('._action')) {
      //if (getComputedStyle(alert).top == '0px') {
      //   alert.style.top = '0';
      //   setTimeout(function () { alert.style.top = '-100%'; }, 2000);
      //}
      alert.classList.remove('_action');
      alert.classList.add('_passive');
      if (document.querySelector('.modal').closest('._action')) {
         return;
      }
      if (body.style.overflow == "hidden") {
         body.style.overflow = "";
      }
   }
}

export function run() {
   if (alert && !alert.closest('._action')) {
      alert.classList.remove('_passive');
      alert.classList.add('_action');
      if (body.style.overflow !== "hidden") {
         body.style.overflow = "hidden";
      }
   }

   if (closeButton) {
      document.addEventListener('click', stop);

      function stop(event) {
         //console.log(event.target);
         if (event.target == closeButton || event.target == alert) {
            close()
         }
      }
   }

}

//set Content to Modal if this content do not set at this alert earlier
export function setContent(htmlString) {
   const alertContent = alert.querySelector('.alert__items');

   if (typeof htmlString === 'string' || htmlString instanceof String) {
      if (alert) {
         if (alertContent && htmlString) {
            if (!alertContent.querySelector('[data-not-reset]')) {
               alertContent.innerHTML = htmlString;
               return;
            }

            if (alertContent.querySelector('[data-not-reset]')) {

               const parser = new DOMParser();
               let newHtml = parser.parseFromString(htmlString, "text/html");

               if (newHtml.querySelector('[data-not-reset]')) {
                  if (newHtml.querySelector('[data-not-reset]').dataset.notReset !== alertContent.querySelector('[data-not-reset]').dataset.notReset) {
                     alertContent.innerHTML = htmlString;
                  }
                  return;
               }

               if (newHtml) {
                  alertContent.innerHTML = htmlString;
               }
            }
         }
      }
   } else {
      //alertContent.innerHTML = "Вибачте, виникла помилка даних. Будь-ласка спробуйте ще раз, або скористайтесь іншим способом зв'язку";
      console.log('typeof not string')
   }
}

//export function closeModal() {
//   function closeModal() {
//      alert.classList.remove('._action');
//   }

//   function setBodyOverflowNoHidden() {
//      body.style.overflow = "";
//   }

//   if (alert.closest('._action')) {
//      closeModal();
//      if (body.style.overflow == "hidden") {
//         setBodyOverflowNoHidden();
//      }
//   }
//}


//export function activateBlock(options) {
//   document.addEventListener('click', actionModal);
//   //Додаємо, або забираємо клас активації модального вікна
//   function actionModal(event) {
//      const alert = document.querySelector(`.${options.actionBlockClass}`);
//      //Якщо неіснує класу модального вікна показуємо alert з повідомленням
//      if (event.target.closest(`.${options.buttonToActionBlockClass}`) && !alert) {
//         alert(`Модального вікна з класом ${options.actionBlockClass} не існує`);
//         return;
//      }
//      //Додаємо клас та блокуємо скрол
//      if (event.target.closest(`.${options.buttonToActionBlockClass}`) && alert) {
//         alert.classList.add(options.actionClassName);
//         if (document.querySelector("body").style.overflow !== "hidden" && options.scroll === false) {
//            document.querySelector("body").style.overflow = "hidden";
//         }
//         return;
//      }
//      //Знімаємо клас та деблокуємо скрол
//      if (event.target.closest(`.${options.buttonToCloseBlockClass}`) || event.target.classList.contains(options.actionBlockClass)) {
//         alert.classList.remove(options.actionClassName);
//         document.querySelector("body").style.overflow = "";
//      }
//   }
//}