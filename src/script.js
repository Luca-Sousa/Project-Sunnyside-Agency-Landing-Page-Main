const menu_mob = document.getElementById('menu');
const nav_mob = document.getElementById('navigation');

menu_mob.addEventListener('click', handleMenuClick);

function handleMenuClick() {
    if (!isVisible(nav_mob)) {
        nav_mob.classList.remove('hidden');
        nav_mob.classList.add('animate__fadeInDown', 'block');

        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
    } else {
        nav_mob.classList.remove('animate__fadeInDown', 'block');
        nav_mob.classList.add('animate__fadeOutUp');

        setTimeout(() => {
            nav_mob.classList.add('hidden');
            nav_mob.classList.remove('animate__fadeOutUp');
        }, 750);
    }
}

function checkWindowSize() {
    if (window.innerWidth >= 640) {
        window.location.reload();
    }
}

function isVisible(el){
    return window.getComputedStyle(el).display !== 'none';
};