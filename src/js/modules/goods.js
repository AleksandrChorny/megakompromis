export function choiceColor(options) {

   document.addEventListener('click', (event) => {
      //function getgoodsColorBoard(event) {
      if (event.target.closest(`.${options.goodsColorBoard}`)) {

         if (event.target.closest(`.${options.actionClassName} `)) {

            if (event.target.closest(`.${options.goodsColor}`)) {
               updGoodsImage(event);
               return;
            }

            event.target.closest(`.${options.goodsColorBoard}`).classList.remove(options.actionClassName);

            //event.target.closest(`.${options.goodsColorBoard}`)
            //   .querySelectorAll(`.${options.goodsColor}`)
            //   .forEach((element) => {
            //      element.classList.remove(options.actionClassName);
            //   });
            return;
         }

         //add _action to color items
         event.target.closest(`.${options.goodsColorBoard}`).classList.add(options.actionClassName);

         //add _action to color item
         //event.target.closest(`.${options.goodsColorBoard}`)
         //   .querySelectorAll(`.${options.goodsColor}`)
         //   .forEach((element) => {
         //      element.classList.add(options.actionClassName);
         //   });
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