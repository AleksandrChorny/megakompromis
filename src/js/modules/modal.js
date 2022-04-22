export function activateBlock(options) {
   document.addEventListener('click', actionModal);
   //Додаємо, або забираємо клас активації модального вікна
   function actionModal(event) {
      const modal = document.querySelector(`.${options.actionBlockClass}`);
      //Якщо неіснує класу модального вікна показуємо alert з повідомленням
      if (event.target.closest(`.${options.buttonToActionBlockClass}`) && !modal) {
         alert(`Модального вікна з класом ${options.actionBlockClass} не існує`);
         return;
      }
      //Додаємо клас та блокуємо скрол
      if (event.target.closest(`.${options.buttonToActionBlockClass}`) && modal) {
         modal.classList.add(options.actionClassName);
         if (document.querySelector("body").style.overflow !== "hidden" && options.scroll === false) {
            document.querySelector("body").style.overflow = "hidden";
         }
         return;
      }
      //Знімаємо клас та деблокуємо скрол
      if (event.target.closest(`.${options.buttonToCloseBlockClass}`) || event.target.classList.contains(options.actionBlockClass)) {
         modal.classList.remove(options.actionClassName);
         document.querySelector("body").style.overflow = "";
      }
   }
}