export function clickOnClassADDClassName(classToClick, classToAction) {

   document.addEventListener('click', actionMenu);

   function actionMenu(event) {
      //console.log(className)
      if (event.target.closest(classToClick) && document.querySelector(classToAction)) {
         if (document.querySelector(classToClick).classList.contains('_action') && document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToClick).classList.remove('_action');
            document.querySelector(classToAction).classList.remove('_action');
            return;
         }
         if (document.querySelector(classToClick).classList.contains('_action') && !document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToAction).classList.add('_action');
         }
         if (!document.querySelector(classToClick).classList.contains('_action') && document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToAction).classList.remove('_action');
            return;
         }
         if (!document.querySelector(classToClick).classList.contains('_action') && !document.querySelector(classToAction).classList.contains('_action')) {
            document.querySelector(classToClick).classList.add('_action');
            document.querySelector(classToAction).classList.add('_action');

         }
      }
   }
}