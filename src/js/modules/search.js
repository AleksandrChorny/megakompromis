import * as body from "./body.js";
import * as getFile from "./includeFile.js";
import * as preloader from "./preloader.js";


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

//search fuunction
export function mySearch(inputValue) {
   //get variable
   const searchResult = document.querySelector(`.${searchResultsClassName}`);
   const url = "/form/submit/";
   const formData = new FormData();
   const language = document.documentElement.lang;

   //run spinner preloader befor get search result
   const pre = document.createElement('div');
   pre.classList.add('search__results', '_center');
   pre.append(preloader.createPreloaderSpinner());
   searchResult.replaceWith(pre);

   //set input and formName to formdata
   formData.append('formName', 'mySearch');
   formData.append('inputValue', inputValue);
   //formData.append('language', language);

   //get search result from backEnd
   getFile.getJsonOnPhp(url, formData)
      .then((searchData) => {
         if (searchData) {
            if (searchData == 'fulse') {
               const s = document.querySelector('.search__results')
               document.querySelector('.search__results').replaceWith(createNosingNotFound());
               //searchResult.replaceWith(document.createElement('div'));
               return;
            }
            //TODO close spinner preloader if this nid
            document.querySelector('.search__results').replaceWith(createSearchResults(searchData));
            return;
         }
      });

   function createNosingNotFound() {
      const searchDescription = document.createElement('p');
      searchDescription.classList.add('search-card__description');
      searchDescription.textContent = 'Нічого не знайдено, спробуйте ще';
      if (language == 'ru-UA') {
         searchDescription.textContent = 'Ничего не найдено. попробуйте еще';
      }

      const searchResult = document.createElement('div');
      searchResult.classList.add('search__result-card', 'search-card');
      searchResult.append(searchDescription);

      const results = document.createElement('div');
      results.classList.add('search__results')
      results.append(searchResult)

      return results;
   }

   function createSearchResults(searchData) {
      const result = document.createElement('div');
      result.classList.add(`${searchResultsClassName}`);
      searchData.forEach(element => {
         if (element) {
            //console.log(element);
            const link = document.createElement('a');
            link.setAttribute('href', element.link);
            if (language == 'ru-UA') {
               link.setAttribute('href', `/ru${element.link}`);
            }


            const card = document.createElement('div');
            card.classList.add('search__result-card', 'search-card');
            //card.textContent = element.img;
            link.append(card);

            const img = document.createElement('img');
            img.setAttribute('src', `/img/goods/${element.file_name}_${element.color}.jpg`);
            img.setAttribute('alt', element.altImg);
            card.append(img);

            const content = document.createElement('div');
            content.classList.add('search-card__content');
            card.append(content);

            const title = document.createElement('h3');
            title.classList.add('search-card__title');
            title.textContent = element.title;
            if (language == 'ru-UA') {
               title.textContent = element.title_ru;
            }
            content.append(title);

            const art = document.createElement('p');
            art.classList.add('search-card__art');
            art.textContent = `арт.: ${element.id}`;
            content.append(art);

            const description = document.createElement('p');
            description.classList.add('search-card__description');
            description.innerHTML = `${element.name} <br> ${element.name2}`;
            if (language == 'ru-UA') {
               description.innerHTML = `${element.name_ru} <br> ${element.name2_ru}`;
            }
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
