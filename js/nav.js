/* navbar for every page */
var navBar = `<nav class="top-nav">
<div class="img-wrapper">
    <a href="/">
        <img src="/assets/images/T-logo-trans.png" alt="Tetsu logo transparent">
    </a>
</div>
<input id="menu-toggle" type="checkbox" />
<label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
</label>
<div class="menu-wrapper">
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
            <a href="/o_nama.html">O nama </a>
        </li>
        <li>
            <a href="https://www.google.com/maps/place/Tetsu+Tepisi/@44.0423319,20.4833787,17z/data=!4m7!3m6!1s0x4757411df92331b7:0x12c152c269f34a08!8m2!3d44.0423281!4d20.4855728!9m1!1b1" target="_blank">Komentari </a>
        </li>

    </ul>
</div>
</nav>`;

document.getElementById('navbarHTML').innerHTML = navBar;

/* backgroundcolor on current  page */

// currentLinks = document.querySelectorAll('a[href="' + document.URL + '"]');
// currentLinks.forEach(element => {
//     element.className += ' activePage';
// });

// var url = window.location.href;

// // var page = document.querySelector('li a').innerHTML;

// console.log(url);
// console.log(page);