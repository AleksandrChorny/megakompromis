//Подключение файлов js из папки 'modules'
import * as flsFunctions from "./modules/functions.js";
//Імпорт функції додавання класу '_action'
import * as scroll from "./modules/onscrollAdd_fixed.js";
import * as click from "./modules/onclickAdd_action.js";
import * as modal from "./modules/modal.js";

flsFunctions.isWebp();

modal.activateBlock({
   actionBlockClass: 'modal',
   buttonToActionBlockClass: 'heder__button',
   buttonToCloseBlockClass: 'modal__close',
   actionClassName: '_action',
   scroll: false
})