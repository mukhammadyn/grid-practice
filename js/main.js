const elNavToggler = document.querySelector('.js-nav-toggler')
const elHeaderNav = document.querySelector('.site-header__nav')

if(elNavToggler) {
  elNavToggler.addEventListener('click', () => {
    elHeaderNav.classList.add('site-header__nav--open')
  })
}

window.onclick = function(evt) {
  console.log(evt)
  if(!evt.target.classList.contains('js-nav-toggler') && !evt.path.includes(elHeaderNav)) {
    elHeaderNav.classList.remove('site-header__nav--open')
  }
} 