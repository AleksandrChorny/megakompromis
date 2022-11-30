const body = document.querySelector("body");

export function scrole() {
   if (body.style.overflow == "hidden") {
      body.style.overflow = "";
   }
}

export function noneScrole() {
   if (body.style.overflow !== "hidden") {
      body.style.overflow = "hidden";
   }
}