// file hederOnScroll=========================================================================
const hederHight_1 = elementHeight('header__separating-container_1');
const hederHight_2 = elementHeight('header__separating-container_2');
const hederHight_3 = elementHeight('header__separating-container_3');
const hederHight = elementHeight('header');
const navigateHight = elementHeight('main-menu');

window.onscroll = function () {

   let scrolled = window.pageYOffset;

   if (scrolled > hederHight_1 + hederHight_2 && scrolled < hederHight + navigateHight - hederHight_3) {
      setClassName("header__separating-container_3", "fixed");
      setClassName("header__separating-container_2", "fixed");
      // console.log('ja bolshe heder1+2');
      document.querySelector('.header__separating-container_2').style.marginBottom = '30px';
   }

   if (scrolled < hederHight_1 + hederHight_2) {
      delClassName('header__separating-container_3', 'fixed');
      delClassName('header__separating-container_2', 'fixed');
      document.querySelector('.header__separating-container_2').style.marginBottom = '0px';
   }


   if (navigateHight) {
      if (scrolled > hederHight + navigateHight - hederHight_3 + 50) {
         if (window.getComputedStyle(document.querySelector('.main-menu')).top < '0') {
            return
         }
         // margin1 = elementHeight('heder')+elementHeight('main-menu') - elementHeight('header__separating-container_1') - elementHeight('header__separating-container_2')+48;
         setClassName("main-menu", "fixed");
         setClassName("header__separating-container_3", "fixed");
         setClassName("header__separating-container_2", "fixed");
         // setClassName("header__separating-container_2", "fixedNav");
         // console.log(navigateHight);
         // let a = navigateHight+hederHight_3;
         // console.log(a);

         document.querySelector('.header__separating-container_2').style.marginBottom = navigateHight + hederHight_3 + 'px';
         // document.querySelector('.header__separating-container_2').style.marginBottom = '439px';
      }
   }

   // console.log(hederHight+navigateHight-hederHight_3 -1);

   if (navigateHight) {
      if (scrolled < hederHight + navigateHight - hederHight_3 + 30 && scrolled > hederHight_1 + hederHight_2) {
         // console.log(hederHight+navigateHight-hederHight_3);
         // console.log('hederHight+navigateHight-hederHight_3');
         // document.querySelector('.main-menu__items').style.animation = 'backNavigate 2s';
         if (document.querySelector('.main-menu').classList.contains('fixed')) {


            setClassName("main-menu", "replase-fixed");
            // console.log(document.querySelector('.main-menu li')).classList.add('back');
         }
         // setClassName("main-menu", "replase-fixed");
         // setClassName("main-menu__items", "back");

         delClassName('main-menu', 'fixed');
         document.querySelector('.header__separating-container_2').style.marginBottom = hederHight_3 + 'px';

         // const scrollTop = 
         // document.querySelector('.main-menu').style.animation = 'fixedNavigat 4s';
      }
   }
};

function elementHeight(className) {
   if (document.querySelector('.' + className)) {
      return document.querySelector('.' + className).offsetHeight;
   }
}

function setClassName(classNameElement, classNameForSet) {
   if (document.querySelector("." + classNameElement)) {
      document.querySelector("." + classNameElement).classList.add(classNameForSet);
   }
}

function delClassName(classNameElement, classNameToDel) {
   if (document.querySelector("." + classNameElement).classList.contains(classNameToDel)) {
      document.querySelector("." + classNameElement).classList.remove(classNameToDel);
   }
}

//=========================================================================================================================


