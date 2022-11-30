import * as preloader from "./preloader.js";
import * as search from "./search.js";
import * as getFile from "./includeFile.js";
//import * as formValidate from "./formValidate.js";


export function searchPanel() {
   document.addEventListener('click', openSearchPanel);
   document.addEventListener('input', viewSearchRezult);

   function openSearchPanel(event) {
      if (event.target.closest('.search__input')) {
         search.run()
      }
   }

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