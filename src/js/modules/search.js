import * as body from "./body.js";
import * as getFile from "./includeFile.js";
//import * as alert from "./alert.js";


//const body = document.querySelector("body");
const search = document.querySelector('.search');
const closeButton = document.querySelector('.search__close');
const searchResultsClassName = 'search__results';


//on search remove _action and add _passive tu close search
export function close() {
   if (search.closest('._action')) {
      search.classList.remove('_action');
      search.classList.add('_passive');
      body.scrole();
   }
}

//run search
export function run() {
   //add style left $ top to var
   const styleOfsetX = search.getBoundingClientRect().x;
   const styleOfsetY = search.getBoundingClientRect().y;
   search.style.cssText = `--searchLeft: ${styleOfsetX}px; --searchTop: ${styleOfsetY}px;`;

   //manipulate classes _action or _passive to run search
   if (search && !search.closest('._action')) {
      search.classList.remove('_passive');
      search.classList.add('_action');
      body.noneScrole();
   }

   //close search
   if (closeButton) {
      document.addEventListener('click', stop);
      function stop(event) {
         //console.log(event.target);
         if (event.target == closeButton || event.target == search) {
            close()
         }
      }
   }
}

export function mySearch(inputValue) {
   //TODO run spinner preloader
   const searchResult = document.querySelector(`.${searchResultsClassName}`);
   const url = "/form/submit/";
   const formData = new FormData();
   //console.log(formData);

   formData.append('formName', 'mySearch');
   formData.append('inputValue', inputValue);

   getFile.getJsonOnPhp(url, formData)
      .then((searchData) => {
         if (searchData) {
            //TODO close spinner preloader if this nid
            searchResult.replaceWith(createSearchResults(searchData));
            return;
         }
         //TODO close spinner preloader if this nid
         searchResult.append(createNosingNotFound());
      });

   function createNosingNotFound() {
      const searchResult = document.createElement('div');
      searchResult.classList.add('search__resultCard', 'searchResultCard');

      const searchDescription = document.createElement('p');
      searchDescription.classList.add('searchResultCard__description');
      searchDescription.textContent = 'Нічого не знайшли';


      searchResult.append(searchDescription);

      return searchResult;
   }

   function createSearchResults(searchData) {
      const result = document.createElement('div');
      result.classList.add(`${searchResultsClassName}`);

      searchData.forEach(element => {
         if (element) {
            console.log(element)
            const link = document.createElement('a');
            link.setAttribute('href', element.link);


            const card = document.createElement('div');
            card.classList.add('search__resultCard', 'searchResultCard');
            //card.textContent = element.img;
            link.append(card);

            const img = document.createElement('img');
            img.setAttribute('src', `/img/goods/${element.file_name}_002.jpg`);
            img.setAttribute('alt', element.altImg);
            card.append(img);

            const content = document.createElement('div');
            content.classList.add('searchResultCard__content');
            card.append(content);

            const title = document.createElement('h3');
            title.classList.add('searchResultCard__title');
            title.textContent = element.title;
            content.append(title);

            const art = document.createElement('p');
            art.classList.add('searchResultCard__art');
            art.textContent = element.art;
            content.append(art);

            const description = document.createElement('p');
            description.classList.add('searchResultCard__description');
            description.textContent = element.description;
            content.append(description);

            result.append(link);

            //const description = document.createElement('p');
            //description.classList.add('searchResultCard__description');
            //description.textContent = 'result of Search';
            //searchDescription.textContent = element.img;


            //result.append(description);

            return result;
            //   console.log(element)
            //   console.log(element.img)
            //   return `
            //   <a href="${element.link}">
            //      <div class="search__resultCard searchResultCard">
            //         <img src="@img/goods/${element.img}" alt="${element.altImg}">
            //         <div class="searchResultCard__content">
            //            <h3 class="searchResultCard__title">${element.title}</h3>
            //            <p class="searchResultCard__art"> Арт.: ${element.art}</p>
            //            <p class="searchResultCard__description">${element.description}</p>
            //         </div>
            //      </div>
            //   </a>
            //`;
         }
         console.log(result)
         return result;
      });
      console.log(result)

      return result;
   }
}
