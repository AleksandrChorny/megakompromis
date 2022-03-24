//Подключение файлов js из папки 'modules'
import * as flsFunctions from "./modules/functions.js";
//Імпорт функції додавання класу '_action'
import * as scroll from "./modules/onscrollAdd_fixed.js";
import * as click from "./modules/onclickAdd_action.js";

flsFunctions.isWebp();

// core version + navigation, pagination modules:
//!  import Swiper, { Navigation, Pagination } from 'swiper';
//! const swiper = new Swiper(...);

//Виклик функції додавання каласу в н6алащтуваннях передаємо ім'я класу по якому клік я до кого потрібно додати '_action'
//click.clickOnClassADDClassName('.call', '.calll');
//click.clickOnClassADDClassName('.e-mail', '.mail');
//console.log(click.clickOnClass());

//console.log('action');