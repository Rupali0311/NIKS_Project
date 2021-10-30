var items = document.querySelectorAll(" p");
var hitems = document.querySelectorAll(" h3");
var lhitems = document.querySelectorAll(" h2,  .card");
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
  return (
    rect.top >= -200 &&
    rect.left >= -50 &&
    rect.bottom <= (window.innerHeight+50 || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
    //   console.log(isElementInViewport(items[i]))
       
    if (isElementInViewport(items[i])) {
        if (!items[i].classList.contains("in-view")) {
            if (!items[i].classList.contains("description")) {
                items[i].classList.add("in-view");
                items[i].classList.add("animate__animated");
                items[i].classList.add("animate__fadeInUp");
                items[i].classList.add("animate__slow");
            }
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
        items[i].classList.remove("animate__animated");
        items[i].classList.remove("animate__fadeInUp");
          items[i].classList.remove("animate__slow");
        }
    
      
    }
    for (var i = 0; i < hitems.length; i++) {
        //   console.log(isElementInViewport(items[i]))
           
        if (isElementInViewport(hitems[i])) {
          if(!hitems[i].classList.contains("in-view")){
              hitems[i].classList.add("in-view");
              hitems[i].classList.add("animate__animated");
              hitems[i].classList.add("animate__fadeInUp");
              hitems[i].classList.add("animate__slow");
          }
        } else if(hitems[i].classList.contains("in-view")) {
            hitems[i].classList.remove("in-view");
            hitems[i].classList.remove("animate__animated");
            hitems[i].classList.remove("animate__fadeInUp");
              hitems[i].classList.remove("animate__slow");
            }
        
          
    }
    

    for (var i = 0; i < lhitems.length; i++) {
        //   console.log(isElementInViewport(items[i]))
           
        if (isElementInViewport(lhitems[i])) {
          if(!lhitems[i].classList.contains("in-view")){
              lhitems[i].classList.add("in-view");
              lhitems[i].classList.add("animate__animated");
              lhitems[i].classList.add("animate__zoomIn");
              lhitems[i].classList.add("animate__slow");
          }
        } else if(lhitems[i].classList.contains("in-view")) {
            lhitems[i].classList.remove("in-view");
            lhitems[i].classList.remove("animate__animated");
            lhitems[i].classList.remove("animate__zoomIn");
              lhitems[i].classList.remove("animate__slow");
            }
        
          
        }
    
}
// console.log('It is working')

// window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);


// var itemsi = document.querySelectorAll("div .card-img");

// function isElementInViewport(el) {
//     var rect = el.getBoundingClientRect();
//   return (
//     rect.top >= -200 &&
//     rect.left >= -50 &&
//     rect.bottom <= (window.innerHeight+200 || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// function callbackFuncImg() {
//     for (var i = 0; i < itemsi.length; i++) {
//     //   console.log(isElementInViewport(items[i]))
       
//     if (isElementInViewport(items[i])) {
//       if(!itemsi[i].classList.contains("in-view")){
//           itemsi[i].classList.add("in-view");
//           itemsi[i].classList.add("animate__animated");
//           itemsi[i].classList.add("animate__rollIn");
//       }
//     } else if(items[i].classList.contains("in-view")) {
//         itemsi[i].classList.remove("in-view");
//         itemsi[i].classList.remove("animate__animated");
//         itemsi[i].classList.remove("animate__rollIn");
//         }
    
      
//   }
// }
// // console.log('It is working')

// window.addEventListener("load", callbackFuncImg);
// window.addEventListener("scroll", callbackFuncImg);
