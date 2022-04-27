export function choiceColor(options) {

   document.addEventListener('click', (event) => {
      //function getgoodsColorBoard(event) {
      if (event.target.closest(`.${options.goodsColorBoard}`)) {

         if (event.target.closest(`.${options.actionClassName} `)) {

            updGoodsImage(event);

            event.target.closest(`.${options.goodsColorBoard}`).classList.remove(options.actionClassName);

            event.target.closest(`.${options.goodsColorBoard}`)
               .querySelectorAll(`.${options.goodsColor}`)
               .forEach((element) => {
                  element.classList.remove(options.actionClassName);
               });
            return;
         }

         //add _action to color items
         event.target.closest(`.${options.goodsColorBoard}`).classList.add(options.actionClassName);

         //add _action to color item
         event.target.closest(`.${options.goodsColorBoard}`)
            .querySelectorAll(`.${options.goodsColor}`)
            .forEach((element) => {
               element.classList.add(options.actionClassName);
            });
      }
   });

   function updGoodsImage(event) {
      if (event.target.getAttribute("data-srcImg")) {
         event.target.closest(`.${options.goodsCard}`)
            .querySelector('img')
            .setAttribute("src", event.target.getAttribute("data-srcImg"));
      }
      if (event.target.getAttribute("data-price")) {
         event.target.closest(`.${options.goodsCard}`)
            .querySelector(`.${options.goodsPrice}`)
            .innerHTML = `Ціна: ${event.target.getAttribute("data-price")} грн.`
      }

   }
}




//const modal = document.querySelector(`.${ options.actionBlockClass } `);
////Якщо неіснує класу модального вікна показуємо alert з повідомленням
//if (event.target.closest(`.${ options.buttonToActionBlockClass } `) && !modal) {
//   alert(`Модального вікна з класом ${ options.actionBlockClass } не існує`);
//   return;
//}
////Додаємо клас та блокуємо скрол
//if (event.target.closest(`.${ options.buttonToActionBlockClass } `) && modal) {
//   modal.classList.add(options.actionClassName);
//   if (document.querySelector("body").style.overflow !== "hidden" && options.scroll === false) {
//      document.querySelector("body").style.overflow = "hidden";
//   }
//   return;
//}
////Знімаємо клас та деблокуємо скрол
//if (event.target.closest(`.${ options.buttonToCloseBlockClass } `) || event.target.classList.contains(options.actionBlockClass)) {
//   modal.classList.remove(options.actionClassName);
//   document.querySelector("body").style.overflow = "";
//}