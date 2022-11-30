import * as body from "./body.js";

//const body = document.querySelector("body");
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');
//const modalWindow = document.querySelector('.modal__close');

export function close() {
   //console.log('closeModal');
   if (modal.closest('._action')) {
      //if (getComputedStyle(modal).top == '0px') {
      //   modal.style.top = '0';
      //   setTimeout(function () { modal.style.top = '-100%'; }, 2000);
      //}
      modal.classList.remove('_action');
      modal.classList.add('_passive');
      if (document.querySelector('.alert').closest('._action')) {
         return;
      }
      body.scrole();
   }
}

export function run() {
   if (modal && !modal.closest('._action')) {
      modal.classList.remove('_passive');
      modal.classList.add('_action');
      body.noneScrole();

   }

   if (closeButton) {
      document.addEventListener('click', stop);

      function stop(event) {
         //console.log(event.target);
         if (event.target == closeButton || event.target == modal) {
            close()
         }
      }
   }

}

//set Content to Modal if this content do not set at this modal earlier
export function setContent(htmlString) {
   const modalContent = modal.querySelector('.modal__items');
   modalContent.innerHTML = htmlString;
   //console.log(htmlString)
   //if (typeof htmlString === 'string' || htmlString instanceof String) {
   //   if (modal) {
   //      const modalContent = modal.querySelector('.modal__items');

   //      if (modalContent && htmlString) {
   //         if (!modalContent.querySelector('[data-not-reset]')) {
   //            modalContent.innerHTML = htmlString;
   //            return;
   //         }

   //         if (modalContent.querySelector('[data-not-reset]')) {

   //            const parser = new DOMParser();
   //            let newHtml = parser.parseFromString(htmlString, "text/html");

   //            if (newHtml.querySelector('[data-not-reset]')) {
   //               if (newHtml.querySelector('[data-not-reset]').dataset.notReset !== modalContent.querySelector('[data-not-reset]').dataset.notReset) {
   //                  modalContent.innerHTML = htmlString;
   //               }
   //               return;
   //            }

   //            if (newHtml) {
   //               modalContent.innerHTML = htmlString;
   //            }
   //         }
   //      }
   //   }
   //} else {
   //   console.log('typeof not string')
   //}
}

//export function closeModal() {
//   function closeModal() {
//      modal.classList.remove('._action');
//   }

//   function setBodyOverflowNoHidden() {
//      body.style.overflow = "";
//   }

//   if (modal.closest('._action')) {
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
//      const modal = document.querySelector(`.${options.actionBlockClass}`);
//      //Якщо неіснує класу модального вікна показуємо alert з повідомленням
//      if (event.target.closest(`.${options.buttonToActionBlockClass}`) && !modal) {
//         alert(`Модального вікна з класом ${options.actionBlockClass} не існує`);
//         return;
//      }
//      //Додаємо клас та блокуємо скрол
//      if (event.target.closest(`.${options.buttonToActionBlockClass}`) && modal) {
//         modal.classList.add(options.actionClassName);
//         if (document.querySelector("body").style.overflow !== "hidden" && options.scroll === false) {
//            document.querySelector("body").style.overflow = "hidden";
//         }
//         return;
//      }
//      //Знімаємо клас та деблокуємо скрол
//      if (event.target.closest(`.${options.buttonToCloseBlockClass}`) || event.target.classList.contains(options.actionBlockClass)) {
//         modal.classList.remove(options.actionClassName);
//         document.querySelector("body").style.overflow = "";
//      }
//   }
//}