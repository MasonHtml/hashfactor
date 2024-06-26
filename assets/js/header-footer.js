setTimeout(() => {
   const navbarMenu = document.getElementById("menu");
   const burgerMenu = document.getElementById("burger");
   const overlayMenu = document.querySelector(".overlay");

   // Check if burgerMenu and navbarMenu exist before adding event listener
   if (burgerMenu && navbarMenu) {
      burgerMenu.addEventListener("click", () => {
         burgerMenu.classList.toggle("is-active");
         navbarMenu.classList.toggle("is-active");
         document.body.classList.toggle("overflow-hidden"); // Selecting document.body directly
      });
   }

   // Close Navbar Menu on Click Links
   document.querySelectorAll(".menu-link").forEach((link) => {
      link.addEventListener("click", () => {
         // Ensure burgerMenu and navbarMenu are defined before accessing them
         if (burgerMenu && navbarMenu) {
            burgerMenu.classList.remove("is-active");
            navbarMenu.classList.remove("is-active");
            document.body.classList.remove("overflow-hidden"); // Selecting document.body directly
         }
      });
   });

   // Fixed Navbar Menu on Window Resize
   window.addEventListener("resize", () => {
      if (navbarMenu && overlayMenu && window.innerWidth >= 992) {
         if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
            overlayMenu.classList.remove("is-active");
            document.body.classList.remove("overflow-hidden"); // Selecting document.body directly
         }
      }
   });

   // Dark and Light Mode on Switch Click
   if (darkSwitch) {
      darkSwitch.addEventListener("click", () => {
         document.documentElement.classList.toggle("darkmode");
         document.body.classList.toggle("darkmode");
      });
   }



}, 2000);

   // Using plain JavaScript
   window.addEventListener('scroll', function() {
      var header = document.getElementById('header');
      if (window.scrollY > 0) {
          header.classList.add('sticky');
      } else {
          header.classList.remove('sticky');
      }
   });


