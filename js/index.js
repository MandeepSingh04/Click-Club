var i=0;
function navfunc() {
    i++;
    if (i%2==1 || document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      navbar.classList.add('nav-active');
    } else {
      navbar.classList.remove('nav-active');
    }
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      navbar.classList.add('nav-active');
    } else {
      navbar.classList.remove('nav-active');
    }
  }