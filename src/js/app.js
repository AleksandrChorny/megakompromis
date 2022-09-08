//Подключение файлов js из папки 'modules'
import * as webp from "./modules/isWebp.js";
import * as onScroll from "./modules/onScroll.js";
import * as onClick from "./modules/onClick.js";
//import * as modal from "./modules/activateBlock.js";
import * as goods from "./modules/goods.js";

//!! import * as test from "./modules/test.js";


webp.isWebp();
onScroll.fixedHeaderAndMainMenu();
onClick.ADD_actionToHeaderAndBurger();
onClick.openLoginInModal();
onClick.openContactUsInModal();
//modal.activateBlock({
//   actionBlockClass: 'modal',
//   buttonToActionBlockClass: 'heder__button',
//   buttonToCloseBlockClass: 'modal__close',
//   actionClassName: '_action',
//   scroll: false
//})
goods.choiceColor({
   goodsCard: 'goods-card',
   goodsColorBoard: 'goods-card__color-items',
   goodsColor: 'goods-card__color-item',
   goodsImage: 'goods-card__img',
   goodsPrice: 'goods-card__price',
   actionClassName: '_action'
})

//!! test.test();