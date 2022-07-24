/* navbar for every page */
var navBar = `<div class="top-nav">
<figure class="img-wrapper">
    <a href="/">
        <img src="/assets/images/T-logo-trans.png" alt="Tetsu logo transparent">
    </a>
</figure>
<input id="menu-toggle" type="checkbox" />
<label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
</label>
<nav class="menu-wrapper">
    <ul class="menu">
        <li>
            <a href="/">Početna</a>
        </li>
        <li>
            <a href="/proizvodi.html">Proizvodi </a>
        </li>
        <li>
            <a href="/odrzavanje.html">Održavanje </a>
        </li>
        <li>
            <a href="/oNama.html">O nama </a>
        </li>
        <li>
            <a href="https://www.google.com/maps/place/Tetsu+Tepisi/@44.0423319,20.4833787,17z/data=!4m7!3m6!1s0x4757411df92331b7:0x12c152c269f34a08!8m2!3d44.0423281!4d20.4855728!9m1!1b1" target="_blank">Komentari </a>
        </li>

    </ul>
</nav>
</div>`;

// document.getElementById('navbarHTML').innerHTML = navBar;
document.querySelector("header").innerHTML = navBar;

/* backgroundcolor on current  page */

document.addEventListener('DOMContentLoaded', e => {
    // let hash = window.location.href;
    // let hash = window.location.pathname;
    // hash = hash.slice(-4);
    // console.log(hash);

    // let menu = document.getElementsByTagName('li');
    // console.log(menu);
    // let current = 0;
    // console.log(menu.length);
    // for (var i = 0; i < menu.length; i++) {
    //     console.log('menu[i]', menu[i]);
    //     // console.log('href', menu[i].location.href);
    //     if (menu[i].href === document.URL) {
    //         console.log('url', document.URL);
    //         console.log('href', menu[i].href);
    //         current = i;
    //         console.log(i);
    //     }
    // }
    // menu[current].className = 'current';


    var activeNavlink = document.querySelectorAll('ul a[href^="/' + location.pathname.split("/")[1] + '"]');
    activeNavlink[0].classList.add('active');

    // var current = location.pathname.split('/')[1];
    // if (current === "") return;
    // var menuItems = document.querySelectorAll('li a');
    // for (var i = 0, len = menuItems.length; i < len; i++) {
    //     if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
    //         menuItems[i].className += "is-active";
    //     }
    // }

    // adding click events
    // var li_Clicked = document.querySelectorAll("li");
    // console.log(li_Clicked);
    // [].forEach.call(li_Clicked, function(el) {
    //     console.log(el);
    //     el.addEventListener("click", function() {
    //         console.log('el.clicked', el);
    //         [].forEach.call(li_Clicked, function(click) {
    //             click.classList.remove("active");
    //         });
    //         el.classList.add("active");
    //     });
    // });
});