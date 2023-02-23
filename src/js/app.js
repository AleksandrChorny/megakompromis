//Подключение файлов js из папки 'modules'
import * as webp from "./modules/isWebp.js";
import * as roznica from "./modules/roznica.js";


//!! import * as test from "./modules/test.js";

webp.isWebp();

roznica.viewSettings();
roznica.getOrderForm();
roznica.getPrints();
roznica.setPrint();
roznica.setChengingSettings();
roznica.viewPhoneNomber();
roznica.setOrderTitle();