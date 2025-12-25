// document.addEventListener("DOMContentLoaded", () => {
//   let tabButtons = document.querySelectorAll("#locationTabs button")
//   let tabContents = document.querySelectorAll("#tabContainer > div")

//   // Hide tab content
//   let hideTabContent = () => {
//     tabContents.forEach((country) => {
//       country.classList.add("hidden")
//     })

//     tabButtons.forEach((btn) => {
//       btn.classList.remove("bg-yellow-500", "text-white")
//       btn.classList.add("text-yellow-500")
//     })
//   }
//   hideTabContent()

//   // Show tab content
//   let showTabContent = (index) => {
//     tabContents[index].classList.remove("hidden")
//     tabButtons[index].classList.remove("text-yellow-500")
//     tabButtons[index].classList.add("bg-yellow-500", "text-white")
//   }
//   showTabContent(0)

//   // Button click
//   tabButtons.forEach((btn, index) => {
//     btn.addEventListener("click", () => {
//       hideTabContent()
//       showTabContent(index)
//     })
//   })
// })

document.addEventListener("DOMContentLoaded", () => {
  let tabContents = document.querySelectorAll("#tabContainer > div");
  let tabButtons = document.querySelectorAll("#locationTabs button");

  let hideTabContent = () => {
    tabContents.forEach((qiymat) => {
      qiymat.classList.add("hidden");
      qiymat.classList.add("opacity-0");
      qiymat.classList.add("translate-y-4");
    });

    tabButtons.forEach((qiymat) => {
      qiymat.classList.remove("bg-yellow-500", "text-white");
      qiymat.classList.add("text-yellow-500");
    });
  };

  let showTabContent = (index) => {
    hideTabContent();
    tabContents[index].classList.remove("hidden");
    setTimeout(() => {
      tabContents[index].classList.remove("opacity-0");
      tabContents[index].classList.remove("translate-y-4");
    }, 100);
    tabButtons[index].classList.remove("text-yellow-500");
    tabButtons[index].classList.add("bg-yellow-500", "text-white");
  };

  hideTabContent();
  showTabContent(0);

  tabButtons.forEach((qiymat, index) => {
    qiymat.addEventListener("click", () => {
      hideTabContent();
      showTabContent(index);
    });
  });
});
