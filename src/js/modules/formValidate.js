export function isRequiredTrue(form) {
   const requiredInputs = form.querySelectorAll('[required]');
   let result = null;
   //const inputName = event.target.name;
   //const inputType = event.target.type;

   if (requiredInputs.length > 0) {
      requiredInputs.forEach(requiredInput => {
         requiredInput.addEventListener('focus', (event) => {
            const focusInput = event.target
            //Знімаємо виділення не правильно введених данних
            focusInput.classList.remove('wrongValue');
            focusInput.style.backgroundColor = null;
         });

         requiredInput.addEventListener('blur', (event) => {
            const blurInput = event.target
            if (!blurInput.value) {
               //console.log(blurInput)

               //modal.classList.add('_passive');
               //Відмічаємо інпути з помилками
               blurInput.classList.add('wrongValue');
               blurInput.style.backgroundColor = '#F7931E';
               //return result = false;
            }
         });

         if (requiredInput.value && result == false) {
            return result = false;
         }
         if (requiredInput.value) {
            return result = true;
         }
         if (!requiredInput.value) {
            requiredInput.classList.add('wrongValue');
            requiredInput.style.backgroundColor = '#F7931E';
            return result = false;
         }
      });
   }
   return result;
}