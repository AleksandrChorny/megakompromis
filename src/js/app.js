//Подключение файлов js из папки 'modules'
import * as flsFunctions from "./modules/functions.js";
//Імпорт функції додавання класу '_action'
import * as scroll from "./modules/onscrollAdd_fixed.js";
import * as click from "./modules/onclickAdd_action.js";
import * as modal from "./modules/modal.js";
import * as color from "./modules/color-choice.js";

flsFunctions.isWebp();

modal.activateBlock({
   actionBlockClass: 'modal',
   buttonToActionBlockClass: 'heder__button',
   buttonToCloseBlockClass: 'modal__close',
   actionClassName: '_action',
   scroll: false
})

color.choiceColor({
   goodsCard: 'goods-card',
   goodsColorBoard: 'goods-card__color-items',
   goodsColor: 'goods-card__color-item',
   goodsImage: 'goods-card__img',
   goodsPrice: 'goods-card__price',
   actionClassName: '_action'
})