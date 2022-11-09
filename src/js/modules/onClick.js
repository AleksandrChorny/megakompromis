import * as modal from "./modal.js";
import * as alert from "./alert.js";
import * as getFile from "./includeFile.js";
import * as formValidate from "./formValidate.js";

export function ADD_actionToHeaderAndBurger() {

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

export function openInModal(buttonClassName) {
   const button = document.querySelector(`.${buttonClassName}`);
   if (button) {
      document.addEventListener('click', getModal);
      function getModal(event) {
         if (event.target.closest(`.${buttonClassName}`)) {
            const url = button.dataset.form;

            getFile.includeFile(url, {})
               .then((modalContent) => {
                  modal.setContent(modalContent);
                  //modal.querySelector('.modal__content').innerHTML = data;
                  // console.log(data['id']); // JSON data parsed by `response.json()` call
                  //console.log(data)
                  //myModal.innerHTML = data; // JSON data parsed by `response.json()` call
               });

            modal.run();
         }
      }
   }
}

export function hideNavigate() {
   const button = document.querySelector('.main-menu__close');
   const navigate = document.querySelector('.main-menu');
   if (button) {
      document.addEventListener('click', hideNavigate);
      function hideNavigate(event) {
         if (event.target.closest('.main-menu__close')) {
            if (!navigate.classList.contains('_hide')) {
               navigate.classList.add("_hide");
               return;
            }
            navigate.classList.remove("_hide");
         }
      }
   }
}

export function sendForm() {
   //const button = document.querySelector('.modal');
   document.addEventListener('click', sendForm);


   function sendForm(event) {
      const listOfForm = [
         'contactBtn',
         'loginBtn',
         'registrationBtn'
      ]
      //console.log(listOfForm.includes('contactBtn'));
      //console.log(listOfForm.indexOf('contactBtn1'));
      //if (event.target.closest('.form')) {


      if (event.target.type == 'submit' && listOfForm.includes(event.target.name)) {
         event.preventDefault();
         const form = event.target.form;

         if (form) {
            if (formValidate.isRequiredTrue(form)) {
               //const q = document.querySelector('form');
               //console.log(q);
               const formData = new FormData(form);

               //додаємо  наскрізну аналітику бітрікс.
               try {
                  formData.append('trace', b24Tracker.guest.getTrace());
               }
               catch (e) {
                  // инструкции для обработки ошибок
                  console.log('Немає зв\'язку з Б24')
                  //logMyErrors(e); // передать объект исключения обработчику ошибок
               }

               //! Перевірка formData
               //*for (let item of formData) {
               //*   console.log(item[0], item[1]);
               //*}

               const url = "/formSubmit/";
               //const url = "https://httpbin.org/post";
               //const url = "../../login.html";

               getFile.submitFormOnPhp(url, formData)
                  .then((data) => {
                     //console.log(data);
                     if (data) {
                        //console.log(data);
                        alert.setContent(data);
                        alert.run();
                        //alert('Дякуємо ми отримали ваше повідомлення скоро ми зв\'яжемося з Вами');
                        modal.close();
                        return;
                     }
                     //alert.setContent(data);
                     alert.run();
                     //modal.close();



                     //alert('Форма не відправлена, спробуйте ще раз, або скористайтесь іншим методом зв\'язку');
                     //modal.closeModal();
                  });
            }
         }
      }
   }
}