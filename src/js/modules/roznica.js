// Показати модалку з налаштуваннями, чекбоксами вибору.
import * as formValidate from "./formValidate.js";
import * as includeFile from "./includeFile.js";


export function viewSettings() {
   const settingsBtn = document.querySelector('.settings-btn');
   const settingsMenu = document.querySelector('.settings');

   document.addEventListener('click', viewSettings);
   document.addEventListener('click', closeSettings);

   function viewSettings(event) {
      if (event.target.closest('.settings-btn')) {
         settingsMenu.classList.add('_action');
         settingsBtn.classList.add('_action');
         return;
      }
      if (event.target.closest('body') && !event.target.closest('.settings')) {
         settingsMenu.classList.remove('_action')
         settingsBtn.classList.remove('_action');
      }
   }

   function closeSettings(event) {
      if (event.target.closest('.settings__close')) {
         settingsMenu.classList.remove('_action');
         settingsBtn.classList.remove('_action');
      }

   }
}

// Відкрити форму замовлення
export function getOrderForm() {
   const orderForm = document.querySelector('.order');

   document.addEventListener('click', view);
   document.addEventListener('click', close);


   function view(event) {
      if (event.target.closest('.comunication__buy')) {
         orderForm.classList.add('_visible');
      }
   }
   function close(event) {
      if (event.target.closest('.close')) {
         orderForm.classList.remove('_visible');
      }
   }

}

// Відкрити модалку з макетами принтів
export function getPrints() {
   const catalogPrints = document.querySelector('.landing-roznica__catalog-prints');

   document.addEventListener('click', view);
   document.addEventListener('click', close);

   function view(event) {
      if (event.target.closest('.catalog-prints-btn')) {
         catalogPrints.classList.add('_visible');
      }
   }

   function close(event) {
      if (event.target.closest('.close')) {
         catalogPrints.classList.remove('_visible');
      }
   }
}

// Вибраний принт розташувати на макеті дизайну товару
export function setPrint() {
   //Отримую принт з превью товара
   const printWebp = document.querySelector('.designe__print source');
   const printPng = document.querySelector('.designe__print img');
   //Зображення на кнопці каталогу принтів
   const maketsBtnWebp = document.querySelector('.catalog-prints-btn .catalog-prints-btn__item source');
   const maketsBtnPng = document.querySelector('.catalog-prints-btn .catalog-prints-btn__item img');

   //Додаємо прослуховувача подій
   document.addEventListener('click', set);
   //встановлюю принт на макет товару
   function set(event) {
      if (event.target.closest('.tile__item')) {
         //Отримую шлях до макету з дата-елементу кнопки
         const imgPrint = event.target.closest('picture').dataset.maket;
         const imgButton = event.target.closest('picture').dataset.button;
         //Встановлюю новий шлях в зображенні принта товара
         printWebp.setAttribute('srcset', `${imgPrint}.webp`);
         printPng.setAttribute('src', `${imgPrint}.png`);
         //Встановлюю новий шлях в зображенні кнопки каталогу принтів
         maketsBtnWebp.setAttribute('srcset', `${imgButton}.webp`);
         maketsBtnPng.setAttribute('src', `${imgButton}.png`);
         //Приховую меню макетів принтів
         if (document.querySelector('.landing-roznica__catalog-prints').classList.contains('_visible')) {
            document.querySelector('.landing-roznica__catalog-prints').classList.remove('_visible');
         }
         //Встановлюю клас для виділення обраного макету
         document.querySelector('.catalog-prints .tile ._selected').classList.remove('_selected');
         event.target.closest('.tile__item').classList.add('_selected');
      }
   }
}

//Встановити налаштування кольору, розміщення та моделі
export function setChengingSettings() {
   //Створюємо константу зображення товару, що буде змінюватися
   const imageTovarWebp = document.querySelector('.designe__t-shirt source');
   const imageTovarPng = document.querySelector('.designe__t-shirt img');
   //додаємо нову подію на клік
   document.addEventListener('click', setSettings);
   // встановлюємо нове зображення по кліку на чекбокси в налаштуваннях
   function setSettings(event) {
      if (
         event.target.closest('.settings__color input[name=color]')
         || event.target.closest('.settings__front-back  input[name=front-back]')
         || event.target.closest('.settings__model input[name=model]')
      ) {
         const peth = document.querySelector('.settings').dataset.peth;
         const model = document.querySelector('.settings__model input[name=model]:checked').id;
         const place = document.querySelector('.settings__front-back input[name=front-back]:checked').id;
         const color = document.querySelector('.settings__color input[name=color]:checked').id;
         const webp = `${peth + model + place + color}.webp`;
         const png = `${peth + model + place + color}.png`;
         imageTovarWebp.setAttribute('srcset', webp);
         imageTovarPng.setAttribute('src', png);
      }
      //Показую обрану розмірну сітку в формі замовлення.
      if (event.target.closest('.settings__model input[name=model]')) {
         //Отримую імʼя моделі
         const modelName = event.target.id;
         //отримую всі розміри
         document.querySelectorAll('.order .size').forEach((size) => {
            //Видаляю класс _vizible
            if (size.classList.contains('_visible')) {
               size.classList.remove('_visible');
            }
         })
         //Встановлюю класс _visible обраній сітці розміру в залежності від моделі
         const size = document.querySelector(`.order [data-name="${modelName}"]`);
         size.classList.add('_visible')
      }
   }
}

export function viewPhoneNomber() {
   document.addEventListener('click', view);

   function view(event) {
      if (event.target.closest('.comunication__messengers [type="button"]')) {
         //Показуєм телефон
         if (document.querySelector('.phone-namber').classList.contains('_passive')) {
            document.querySelector('.phone-namber').classList.remove('_passive');
            document.querySelector('.phone-namber').classList.add('_active');
            return;
         }
         //Приховуєм телефон
         if (document.querySelector('.phone-namber').classList.contains('_active')) {
            document.querySelector('.phone-namber').classList.remove('_active')
            document.querySelector('.phone-namber').classList.add('_passive')
            return;
         }
      }
      //Приховуєм телефон
      if (event.target.closest('body') && !event.target.closest('.phone-namber')) {
         document.querySelector('.phone-namber').classList.remove('_active')
         document.querySelector('.phone-namber').classList.add('_passive')
         return;
      }
   }
}

export function setOrderTitle() {
   const getOrderBtn = document.querySelector('.comunication .comunication__buy');

   document.addEventListener('click', setTitle);

   function setTitle(event) {
      if (event.target.closest('.comunication__buy')) {
         const model = document.querySelector('.settings .settings__model input:checked').dataset.model;
         const color = document.querySelector('.settings .settings__color input:checked').dataset.color;
         const location = document.querySelector('.settings .settings__front-back input:checked').dataset.location;
         const title = document.querySelector('.catalog-prints .tile ._selected picture img').getAttribute('title');
         document.querySelector('.order h2').innerHTML = `${model}, ${color} з принтом "${title}", ${location}`
      }
   }
}

export function sendForm() {
   const submitButton = document.querySelector('.order .submit');

   document.addEventListener('click', sendForm);

   function getFormData() {
      const result = new FormData();
      const formName = document.querySelector('.order').dataset.name;
      const formTitle = document.querySelector('.order h2').innerHTML;
      const sizeProduct = document.querySelector('.size._visible input:checked').id;
      const form = document.querySelector('.order form');
      const price = `${document.querySelector('.header .price b').innerHTML}${document.querySelector('.header .price i').innerHTML}`;

      result.append('formName', formName);
      result.append('formTitle', formTitle);
      result.append('sizeProduct', sizeProduct);
      result.append('contactName', form.name.value);
      result.append('contactPhone', form.phone.value);
      result.append('contactComent', form.comments.value);
      result.append('price', price);

      //! Перевірка result
      //for (let item of result) {
      //   console.log(item[0], item[1]);
      //}

      return result;
   }

   function sendForm(event) {
      const form = document.querySelector('.order form');
      if (event.target == submitButton) {
         if (formValidate.isRequiredTrue(form)) {
            const formData = getFormData();

            const url = "/form/submit/";
            includeFile.submitFormOnPhp(url, formData)
               .then((response) => {
                  console.log(response);
                  if (response) {
                     //console.log(response);
                     //alert.setContent(response);
                     //alert.run();
                     alert('Дякуємо ми отримали ваше повідомлення скоро ми зв\'яжемося з Вами');
                     //modal.close();
                     return;
                  }
                  //alert.run();
                  alert('Невдался відправити замовлення спробуй те ще раз, або скористайтесь іншим каналом звʼязку');
               });

         }
      }
   }
}