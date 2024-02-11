const hamburger = () => {
    const hamburger = document.querySelector('.hamburger'),
    hamburgerItem = hamburger.querySelectorAll('.hamburger__item'),
    menu = document.querySelector('.menu-mobile'),
    menuItems = document.querySelectorAll('.menu__link'),
    header = document.querySelector('.header'),
    classes = {
        menu: 'menu-mobile_active',
        wrap: 'menu__wrapper_active',
        hide: 'hide',
        left: 'hamburger__item_left',
        right: 'hamburger__item_right'
    };

    function changeClasses(obj, action) {
    
    }
    menuItems.forEach(i => {
        i.addEventListener('click', (e) => {
            menu.classList.remove('menu-mobile_active');
            header.classList.remove('header_active');
            hamburgerItem[2].classList.remove('hide');
            hamburgerItem[0].classList.remove('hamburger__item_left');
            hamburgerItem[1].classList.remove('hamburger__item_right');
        });
    });
    hamburger.addEventListener('click', (e) => {
        if (menu.classList.contains('menu-mobile_active')) {
            menu.classList.remove('menu-mobile_active');
            header.classList.remove('header_active');
            hamburgerItem[2].classList.remove('hide');
            hamburgerItem[0].classList.remove('hamburger__item_left');
            hamburgerItem[1].classList.remove('hamburger__item_right');
           
        } else {
            menu.classList.add('menu-mobile_active');
            header.classList.add('header_active');
            hamburgerItem[2].classList.add('hide');
            hamburgerItem[0].classList.add('hamburger__item_left');
            hamburgerItem[1].classList.add('hamburger__item_right');
        }
    });
    header.addEventListener('click', (e) => {
        if (e.target.classList.contains('header_active')) {
            menu.classList.remove('menu-mobile_active');
            header.classList.remove('header_active');
            hamburgerItem[2].classList.remove('hide');
            hamburgerItem[0].classList.remove('hamburger__item_left');
            hamburgerItem[1].classList.remove('hamburger__item_right');
        }
    });

};

export default hamburger;