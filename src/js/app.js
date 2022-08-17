//Подключение файлов js из папки 'modules'
//** Імпортовані функції що не використовуються в файлі підсвічуються блідо. Хоча можливо вони працюють на власному розташуванні */
import * as MK_Functions from "./modules/functions.js";

MK_Functions.isWebp();
MK_Functions.headerOnScroll();
MK_Functions.onClickADD_action();
//MK_Functions.activateBlock({
//   actionBlockClass: 'modal',
//   buttonToActionBlockClass: 'heder__button',
//   buttonToCloseBlockClass: 'modal__close',
//   actionClassName: '_action',
//   scroll: false
//})
MK_Functions.choiceColor({
   goodsCard: 'goods-card',
   goodsColorBoard: 'goods-card__color-items',
   goodsColor: 'goods-card__color-item',
   goodsImage: 'goods-card__img',
   goodsPrice: 'goods-card__price',
   actionClassName: '_action'
})