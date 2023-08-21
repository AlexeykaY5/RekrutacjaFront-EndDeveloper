var elem = document.querySelector('.grid');
let GutterWidth = 40

if (window.innerWidth <= 425) {
  GutterWidth = 10
} else if(window.innerWidth <= 769){
  GutterWidth = 20
}else if(window.innerWidth >= 769){
  GutterWidth = 40
}

var msnry = new Masonry( elem, {
  itemSelector: '.grid_item',
  gutter: GutterWidth
});
