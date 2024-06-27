document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("header");
  const footer = document.getElementById("footer");
  const modal = document.getElementById("modal");
  // Load header.html
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      header.innerHTML = data;
    })
    .catch((error) => console.error("Error loading header:", error));
  // Load footer.html
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      footer.innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
  fetch("modal.html")
    .then((response) => response.text())
    .then((data) => {
      modal.innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
});
setTimeout(() => {
  //------------------------------------ modal------------------------------
  function initModals() {
    var cb = document.querySelectorAll(".close-btn");
    for (var i = 0; i < cb.length; i++) {
      cb[i].addEventListener("click", function () {
        var dia = this.closest(".modal");
        dia.style.opacity = 0;
        dia.style.zIndex = -1;
        document.body.classList.remove("modal-open");
      });
    }
    var mt = document.querySelectorAll(".modal-toggle");
    for (var i = 0; i < mt.length; i++) {
      mt[i].addEventListener("click", function () {
        var targetId = this.getAttribute("data-target");
        var target = document.getElementById(targetId);
        target.style.opacity = 1;
        target.style.zIndex = 9999;
        document.body.classList.add("modal-open");
      });
    }
  }
  // Call the function to initialize the modals
  initModals();
}, 300)
// ----------------------------scroll to js-------------------------------
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
setTimeout(() => {
  let scrollBtn = document.getElementById("scrollToTopBtn");
  addEventListener('scroll', function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
}, 300)
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    var tabs = document.querySelectorAll('ul.tabs li');
    var tabContents = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var tab_id = this.getAttribute('data-tab');
        // Remove 'current' class from all tabs and tab contents
        tabs.forEach(function (tab) {
          tab.classList.remove('current');
        });
        tabContents.forEach(function (content) {
          content.classList.remove('current');
        });
        // Add 'current' class to the clicked tab and corresponding tab content
        this.classList.add('current');
        document.getElementById(tab_id).classList.add('current');
      });
    });
  }, 300);
});
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    var tabs = document.querySelectorAll('ul.inner-tabs li');
    var tabContents = document.querySelectorAll('.inner-tab-content');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var tab_id = this.getAttribute('data-tab');
        // Remove 'current' class from all tabs and tab contents
        tabs.forEach(function (tab) {
          tab.classList.remove('current');
        });
        tabContents.forEach(function (content) {
          content.classList.remove('current');
        });
        // Add 'current' class to the clicked tab and corresponding tab content
        this.classList.add('current');
        document.getElementById(tab_id).classList.add('current');
      });
    });
  }, 300);
});
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      let copyText = document.querySelector(".copy-text");
      if (copyText) {
          copyText.querySelector("button").addEventListener("click", function () {
              let input = copyText.querySelector("input.text");
              input.select();
              document.execCommand("copy");
              copyText.classList.add("active");
              window.getSelection().removeAllRanges();
              setTimeout(function () {
                  copyText.classList.remove("active");
              }, 1500);
          });
      }
  }, 300);
});
setTimeout(() => {
  var currentUrl = window.location.pathname;
  // Get all the links in the navigation menu
  let menuLinks = document.querySelectorAll('nav a');
  // Loop through each link
  menuLinks.forEach(function (link) {
    var linkUrl = link.pathname; // Get the path part of the href
    // Check if the link URL matches the current page URL
    if (currentUrl === linkUrl) {
      // Add 'active' class to the link itself
      link.classList.add('active');
    }
  });
}, 300);
// set theme mode js
document.addEventListener("DOMContentLoaded", function () {
  function setThemeFromLocalStorage() {
    const lastTheme = localStorage.getItem("theme");
    document.body.classList.add(lastTheme);
    if (lastTheme == 'dark' || lastTheme == null) {
      document.getElementById("checkbox").setAttribute('checked')
    } else {
      document.getElementById("checkbox").removeAttribute('checked')
    }
  }
  setTimeout(() => {
    setThemeFromLocalStorage()
  }, 300);
})
// Function to toggle theme
function toggleTheme() {
  const checkbox = document.getElementById("checkbox");
  if (checkbox.checked) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark"); // Store theme preference
    document.getElementById("checkbox").checked = true;
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "light"); // Store theme preference
    document.getElementById("checkbox").checked = false;
  }
}
function fullview() {
  var element = document.getElementById("main-tabbing-pages");
  element.classList.toggle("fullview");
}
