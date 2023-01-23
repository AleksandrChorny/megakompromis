import * as preloader from "./preloader.js";
import * as search from "./search.js";
import * as getFile from "./includeFile.js";

//add fixed class to contact bar
export function fixedContactBar() {
   const contactBar = document.querySelector('.header__contacts-bar');
   const header = document.querySelector('.header');
   const margin = `${contactBar.clientHeight}px`;

   document.addEventListener('scroll', fixed);

   function fixed() {
      if (!contactBar.classList.contains('fixed') && contactBar.getBoundingClientRect().top <= 0) {
         header.style.marginBottom = margin;
         contactBar.classList.add('fixed');
      }
   }
}

//remove fixed class from contact bar
export function unFixedContactBar() {
   const contactBar = document.querySelector('.header__contacts-bar');
   const header = document.querySelector('.header');

   document.addEventListener('scroll', unFixed);

   function unFixed() {
      if (header.getBoundingClientRect().bottom >= 0) {
         contactBar.classList.remove('fixed');
         header.style.marginBottom = '0';
      }
   }
}

//add fixed class to main menu
export function fixedMainMenu() {
   const mainMenu = document.querySelector('.main-menu');
   const contactBar = document.querySelector('.header__contacts-bar');
   const margin = `${mainMenu.clientHeight + contactBar.clientHeight}px`;
   const header = document.querySelector('.header');

   document.addEventListener('scroll', fixed);

   function fixed() {
      if (!mainMenu.classList.contains('fixed') && mainMenu.getBoundingClientRect().bottom <= 0) {
         mainMenu.classList.add('fixed');
         header.style.marginBottom = margin;
      }
   }
}

//remove fixed class from  main menu
export function unFixedMainMenu() {
   const lastElementAfterMeinMenu = document.querySelector('.tile-pages__title');
   const mainMenu = document.querySelector('.main-menu');
   const header = document.querySelector('.header');
   const contactBar = document.querySelector('.header__contacts-bar');
   const margin = `${contactBar.clientHeight}px`;

   document.addEventListener('scroll', unFixed);

   function unFixed() {
      if (mainMenu.classList.contains('fixed') && lastElementAfterMeinMenu.getBoundingClientRect().top >= 0) {
         header.style.marginBottom = margin;
         mainMenu.classList.remove('fixed');
         mainMenu.classList.add('replase-fixed');
      }
   }
}

export function viewContactForm() {
   //todo отримувати кнопку і повістити івент он клік
   //todo забирати модал modal.createModal()
   //todo вкладати в модал форму
   //todo запускати модал  modal.run()
}
//run search panel and search anything
export function searchPanel() {
   document.addEventListener('click', openSearchPanel);
   document.addEventListener('input', viewSearchRezult);

   //run search panel
   function openSearchPanel(event) {
      if (event.target.closest('.search__input')) {
         search.run()
      }
   }
   //search anything
   function viewSearchRezult(event) {
      if (event.target.closest('.search__input')) {
         event.preventDefault();
         //const form = event.target.form;
         //const formData = new FormData(form);
         //console.log(event.target.value.length)
         if (event.target.value.length > 2) {
            search.mySearch(event.target.value);
         }
      }
   }
}