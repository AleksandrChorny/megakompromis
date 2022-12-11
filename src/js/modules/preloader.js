//const body = document.querySelector("body");
//const alert = document.querySelector('.alert');
//const closeButton = document.querySelector('.alert__close');
//const alertWindow = document.querySelector('.alert__close');

export function run() {
   //get preloader
   let preloader = document.querySelector(`.preloader__items`);
   if (preloader) {
      //console.log(preloader)
      preloader = preloader.innerHTML;
   }

   //set preloader
   document.querySelector('.search__result').innerHTML = preloader;
}

export function createPreloaderSpinner() {
   const result = document.createElement('div');
   const divSpinner = document.createElement('div');
   result.classList.add('preloader-spinner');

   result.append(divSpinner);
   result.append(divSpinner);
   result.append(divSpinner);

   return result;
}