// $.fn.moveIt = function(){
//     var $window = $(window);
//     var instances = [];
    
//     $(this).each(function(){
//       instances.push(new moveItItem($(this)));
//     });
    
//     window.onscroll = function(){
//       var scrollTop = $window.scrollTop();
//       instances.forEach(function(inst){
//         inst.update(scrollTop);
//       });
//     }
//   }
  
//   var moveItItem = function(el){
//     this.el = $(el);
//     this.speed = parseInt(this.el.attr('data-scroll-speed'));
//   };
  
//   moveItItem.prototype.update = function(scrollTop){
//     this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
//   };
  
//   // Initialization
//   $(function(){
//     $('[data-scroll-speed]').moveIt();
//   });




window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
var wrapper = document.getElementById('wrapper')
var content = document.getElementById('content')
 
function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 wrapper.style.top = -scrolltop * .01 + 'px' 
 content.style.top = -scrolltop * 1 + 'px'
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)