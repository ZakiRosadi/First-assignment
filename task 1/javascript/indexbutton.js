let isOpen = false // true
function openhamburger() {
  let humbergerNav = document.getElementById("hamburger-nav-container")
  console.log(humbergerNav)
  if(!isOpen) {
    humbergerNav.style.display= "block";
    isOpen = true
  } else {
    humbergerNav.style.display= "none";
    isOpen = false
  }
}