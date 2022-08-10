//Проверка поддержки webp, добавляет класс webp или no-webp для HTML
export function isWebp() {
   //Проверка поддержки webp
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //Добавление класса _webp или _no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}
export function headerOnScroll() {
   // file hederOnScroll=========================================================================
   const hederHight_1 = elementHeight('header__enter');
   const hederHight_2 = elementHeight('header__logo');
   const hederHight_3 = elementHeight('header__contacts-bar');
   const hederHight = elementHeight('header');
   const navigateHight = elementHeight('main-menu');

   window.onscroll = function () {

      let scrolled = window.pageYOffset;

      if (scrolled > hederHight_1 + hederHight_2 && scrolled < hederHight + navigateHight - hederHight_3) {
         setClassName("header__contacts-bar", "fixed");
         setClassName("header__logo", "fixed");
         // console.log('ja bolshe heder1+2');
         document.querySelector('.header__logo').style.marginBottom = '30px';
      }

      if (scrolled < hederHight_1 + hederHight_2) {
         delClassName('header__contacts-bar', 'fixed');
         delClassName('header__logo', 'fixed');
         document.querySelector('.header__logo').style.marginBottom = '0px';
      }


      if (navigateHight) {
         if (scrolled > hederHight + navigateHight - hederHight_3 + 50) {
            if (window.getComputedStyle(document.querySelector('.main-menu')).top < '0') {
               return
            }
            // margin1 = elementHeight('heder')+elementHeight('main-menu') - elementHeight('header__enter') - elementHeight('header__logo')+48;
            setClassName("main-menu", "fixed");
            setClassName("header__contacts-bar", "fixed");
            setClassName("header__logo", "fixed");
            // setClassName("header__logo", "fixedNav");
            // console.log(navigateHight);
            // let a = navigateHight+hederHight_3;
            // console.log(a);

            document.querySelector('.header__logo').style.marginBottom = navigateHight + hederHight_3 + 'px';
            // document.querySelector('.header__logo').style.marginBottom = '439px';
         }
      }

      // console.log(hederHight+navigateHight-hederHight_3 -1);

      if (navigateHight) {
         if (scrolled < hederHight + navigateHight - hederHight_3 + 30 && scrolled > hederHight_1 + hederHight_2) {
            // console.log(hederHight+navigateHight-hederHight_3);
            // console.log('hederHight+navigateHight-hederHight_3');
            // document.querySelector('.main-menu__items').style.animation = 'backNavigate 2s';
            if (document.querySelector('.main-menu').classList.contains('fixed')) {


               setClassName("main-menu", "replase-fixed");
               // console.log(document.querySelector('.main-menu li')).classList.add('back');
            }
            // setClassName("main-menu", "replase-fixed");
            // setClassName("main-menu__items", "back");

            delClassName('main-menu', 'fixed');
            document.querySelector('.header__logo').style.marginBottom = hederHight_3 + 'px';

            // const scrollTop = 
            // document.querySelector('.main-menu').style.animation = 'fixedNavigat 4s';
         }
      }
   };

   function elementHeight(className) {
      if (document.querySelector('.' + className)) {
         return document.querySelector('.' + className).offsetHeight;
      }
   }

   function setClassName(classNameElement, classNameForSet) {
      if (document.querySelector("." + classNameElement)) {
         document.querySelector("." + classNameElement).classList.add(classNameForSet);
      }
   }

   function delClassName(classNameElement, classNameToDel) {
      if (document.querySelector("." + classNameElement).classList.contains(classNameToDel)) {
         document.querySelector("." + classNameElement).classList.remove(classNameToDel);
      }
   }

   //=========================================================================================================================
}
export function onClickADD_action() {

   // file burger===========================================================================
   const heder_class = document.querySelector('.header__social-btn');
   const burger_menu = document.querySelector('.burger-menu');
   // console.log(document.querySelector('.main-menu'))

   if (burger_menu) {
      // Присваиваем событие свойству onclick
      burger_menu.onclick = () => {
         const mail = document.querySelector(".mail");
         const numbers = document.querySelector(".numbers");
         const burger = burger_menu;
         if (mail.classList.contains('_active')) {
            mail.classList.remove("_active");
            document.querySelector('._e-mail_click').style.fill = '#4170b4';
         }
         if (numbers.classList.contains('_active')) {
            numbers.classList.remove("_active");
            document.querySelector('._call_click').style.fill = '#4170b4';
         }
         if (burger.classList.contains('_action')) {
            delClassName('main-menu', '_active');
            burger.classList.remove("_action");

            if (document.querySelector('body').classList.contains('_lock')) {
               document.querySelector('body').classList.remove('_lock');
            }

            return;
         }
         if (!burger.classList.contains('_action')) {
            setClassName("main-menu", "_active");

            document.querySelector('body').classList.add('_lock');
         }

         if (document.querySelector('.burger-menu')) {
            document.querySelector('.burger-menu').classList.add("_action");
         }
      }
   }

   const btnCall = document.querySelector("._call_click");
   btnCall.onclick = () => {
      const mail = document.querySelector(".mail");
      const numbers = document.querySelector(".numbers");
      const burger = burger_menu;

      if (burger) {
         burger.classList.add("_action");
      }

      if (mail.classList.contains('_active')) {
         mail.classList.remove("_active");
         document.querySelector('._e-mail_click').style.fill = '#4170b4';
      }

      if (numbers) {
         if (numbers.classList.contains('_active')) {
            burger.classList.remove("_action");
            numbers.classList.remove("_active");
            document.querySelector('._call_click').style.fill = '#4170b4';

            if (document.querySelector('body').classList.contains('_lock')) {
               document.querySelector('body').classList.remove('_lock');
            }

            return;
         }
         numbers.classList.add("_active");
         document.querySelector('._call_click').style.fill = '#FBB03B';

         document.querySelector('body').classList.add('_lock');
      }
   }

   const btnE_mail = document.querySelector("._e-mail_click");
   btnE_mail.onclick = () => {
      // Збираємо змінні
      const mail = document.querySelector(".mail");
      const numbers = document.querySelector(".numbers");
      const burger = burger_menu;

      if (burger) {
         burger.classList.add("_action");
      }

      if (numbers.classList.contains('_active')) {
         numbers.classList.remove("_active");
         document.querySelector('._call_click').style.fill = '#4170b4';
      }

      if (mail) {
         if (mail.classList.contains('_active')) {
            burger.classList.remove("_action");
            mail.classList.remove("_active");
            document.querySelector('._e-mail_click').style.fill = '#4170b4';

            if (document.querySelector('body').classList.contains('_lock')) {
               document.querySelector('body').classList.remove('_lock');
            }

            return;
         }
         mail.classList.add("_active");
         document.querySelector('._e-mail_click').style.fill = '#FBB03B';

         document.querySelector('body').classList.add('_lock');
      }
   }

   function setClassName(classNameElement, classNameForSet) {
      if (document.querySelector("." + classNameElement)) {
         document.querySelector("." + classNameElement).classList.add(classNameForSet);
      }
   }

   function delClassName(classNameElement, classNameToDel) {
      if (document.querySelector("." + classNameElement).classList.contains(classNameToDel)) {
         document.querySelector("." + classNameElement).classList.remove(classNameToDel);
      }
   }

   // const nav = document.querySelector('.burger-menu');
   // nav.onclick = () => {


   // }

   // ==============================================================================================

}
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