export function isRequiredTrue(form) {
   const requiredInputs = form.querySelectorAll('[required]');
   let result = null;
   //const inputName = event.target.name;
   //const inputType = event.target.type;

   if (requiredInputs.length > 0) {
      requiredInputs.forEach(input => {
         input.addEventListener('focus', (event) => {
            event.target.classList.remove('wrongValue');
            event.target.style.backgroundColor = null;
         });

         input.addEventListener('blur', (event) => {
            if (!event.target.value) {
               //console.log(event.target)

               //modal.classList.add('_passive');
               event.target.classList.add('wrongValue');
               event.target.style.backgroundColor = '#F7931E';
               //return result = false;
            }
         });

         if (input.value && result == false) {
            return result = false;
         }
         if (input.value) {
            return result = true;
         }
         if (!input.value) {
            input.classList.add('wrongValue');
            input.style.backgroundColor = '#F7931E';
            return result = false;
         }
      });
   }
   return result;
}