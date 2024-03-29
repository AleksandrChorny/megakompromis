//Подключение файлов js из папки 'modules'
import * as webp from "./modules/isWebp.js";
import * as header from "./modules/header.js"


import * as onScroll from "./modules/onScroll.js";
import * as onClick from "./modules/onClick.js";
//import * as header from "./modules/header.js";
//import * as modal from "./modules/activateBlock.js";
import * as goods from "./modules/goods.js";

//!! import * as test from "./modules/test.js";

webp.isWebp();

header.fixedContactBar();
header.unFixedContactBar();
header.fixedMainMenu();
header.unFixedMainMenu();

//header.viewContactForm();

header.searchPanel();


onClick.ADD_actionToHeaderAndBurger();
//onClick.openLoginInModal();
//onClick.openContactUsInModal();
//onClick.openInModal('login');
//onClick.openInModal('contacts-button');
onClick.openInModal('contactUs');
//onClick.openInModalTest('contacts-button');
onClick.hideNavigate();
onClick.sendForm();
//header.searchPanel();
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