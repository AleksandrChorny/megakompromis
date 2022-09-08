const body = document.querySelector("body");
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close');
//const modalWindow = document.querySelector('.modal__close');

export function run() {
   function addAction() {
      modal.classList.add('_action');
   }

   function addPassive() {
      modal.classList.add('_passive');
   }

   function removePassive() {
      modal.classList.remove('_passive');
   }

   function removeAction() {
      modal.classList.remove('_action');
   }

   function setBodyOverflowHidden() {
      body.style.overflow = "hidden";
   }

   function setBodyOverflowNoHidden() {
      body.style.overflow = "";
   }

   if (modal && !modal.closest('._action')) {
      removePassive();
      addAction();
      if (body.style.overflow !== "hidden") {
         setBodyOverflowHidden();
      }
   }

   if (closeButton) {
      document.addEventListener('click', stop);

      function stop(event) {
         //console.log(event.target);
         if (event.target == closeButton || event.target == modal) {
            if (modal.closest('._action')) {
               //if (getComputedStyle(modal).top == '0px') {
               //   modal.style.top = '0';
               //   setTimeout(function () { modal.style.top = '-100%'; }, 2000);
               //}
               removeAction();
               addPassive();
               if (body.style.overflow == "hidden") {
                  setBodyOverflowNoHidden();
               }
            }

         }
      }
   }

}

export function setContent(dataHTML) {
   if (modal) {
      const modalContent = modal.querySelector('.modal__items')

      if (modalContent) {
         modalContent.innerHTML = dataHTML;
      }
   }
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