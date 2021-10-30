var items = document.querySelectorAll("h2, hr,  h3");

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  return (
    rect.top >= -200 &&
    rect.left >= -50 &&
    rect.bottom <= (window.innerHeight+200 || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
    //   console.log(isElementInViewport(items[i]))
       
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
          items[i].classList.add("in-view");
          items[i].classList.add("animate__animated");
          items[i].classList.add("animate__fadeInUp");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
        items[i].classList.remove("animate__animated");
        items[i].classList.remove("animate__fadeInUp");
        }
    
      
  }
}
// console.log('It is working')

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

