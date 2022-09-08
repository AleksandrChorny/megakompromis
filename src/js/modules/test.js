//Проверка поддержки webp, добавляет класс webp или no-webp для HTML
export function test() {
   document.querySelector('.test').onclick = (event) => {
      if (event.target.classList.contains('_action')) {
         event.target.classList.remove('_action');
         return;
      }
      event.target.classList.add('_action');
   }
}