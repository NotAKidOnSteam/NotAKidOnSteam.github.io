//slideshow
var i = 0;
var root = document.querySelector('.fadein');
var els = root.querySelectorAll(':not(:first-child)');
for (i = 0; i < els.length; i++) {
els[i].classList.add('is-hidden');
}
root.addEventListener('transitionend', function(){
root.insertBefore(root.querySelector(':first-child.is-hidden'), null);
});
setInterval(function(){
root.querySelector(':first-child').classList.add('is-hidden');
root.querySelector(':nth-child(2)').classList.remove('is-hidden');
}, 6000)

//dark mode

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

//secret code

var overscroll = new Overscroll();
window.onload = function() {
	overscroll.bindElement(document.querySelector('.easter-egg-element.top'), 'top');
	overscroll.bindElement(document.querySelector('.easter-egg-element.bottom'), 'bottom');
}