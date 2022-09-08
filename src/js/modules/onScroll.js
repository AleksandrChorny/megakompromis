export function fixedHeaderAndMainMenu() {
   // file hederOnScroll=========================================================================
   const hederHight = elementHeight('header');
   const hederHightTopLine = elementHeight('header__top-line');
   const hederHightMidLine = elementHeight('header__mid-line');
   const hederHightContactsBar = elementHeight('header__contacts-bar');
   const navigateHight = elementHeight('main-menu');

   window.onscroll = function () {

      let scrolled = window.pageYOffset;

      if (scrolled > hederHightTopLine + hederHightMidLine && scrolled < hederHight + navigateHight - hederHightContactsBar) {
         setClassName("header__contacts-bar", "fixed");
         setClassName("header__mid-line", "fixed");
         // console.log('ja bolshe heder1+2');
         document.querySelector('.header__mid-line').style.marginBottom = '30px';
      }

      if (scrolled < hederHightTopLine + hederHightMidLine) {
         delClassName('header__contacts-bar', 'fixed');
         delClassName('header__mid-line', 'fixed');
         document.querySelector('.header__mid-line').style.marginBottom = '0px';
      }


      if (navigateHight) {
         if (scrolled > hederHight + navigateHight - hederHightContactsBar + 50) {
            if (window.getComputedStyle(document.querySelector('.main-menu')).top < '0') {
               return
            }
            // margin1 = elementHeight('heder')+elementHeight('main-menu') - elementHeight('header__top-line') - elementHeight('header__mid-line')+48;
            setClassName("main-menu", "fixed");
            setClassName("header__contacts-bar", "fixed");
            //setClassName("header__mid-line", "fixed");
            // setClassName("header__mid-line", "fixedNav");
            // console.log(navigateHight);
            // let a = navigateHight+hederHightContactsBar;
            // console.log(a);

            document.querySelector('.header__mid-line').style.marginBottom = navigateHight + hederHightContactsBar + 'px';
            // document.querySelector('.header__mid-line').style.marginBottom = '439px';
         }
      }

      // console.log(hederHight+navigateHight-hederHightContactsBar -1);

      if (navigateHight) {
         if (scrolled < hederHight + navigateHight - hederHightContactsBar + 30 && scrolled > hederHightTopLine + hederHightMidLine) {
            // console.log(hederHight+navigateHight-hederHightContactsBar);
            // console.log('hederHight+navigateHight-hederHightContactsBar');
            // document.querySelector('.main-menu__items').style.animation = 'backNavigate 2s';
            if (document.querySelector('.main-menu').classList.contains('fixed')) {


               setClassName("main-menu", "replase-fixed");
               // console.log(document.querySelector('.main-menu li')).classList.add('back');
            }
            // setClassName("main-menu", "replase-fixed");
            // setClassName("main-menu__items", "back");

            delClassName('main-menu', 'fixed');
            document.querySelector('.header__mid-line').style.marginBottom = hederHightContactsBar + 'px';

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
}