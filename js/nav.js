/* navbar for every page */
var navBar = `<section class="top-nav">
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
            <a href="/galerija.html">Galerija </a>
        </li>
        <li>
            <a href="/o_nama.html">O nama </a>
        </li>
        <li>
            <a href="/komentari.html">Komentari </a>
        </li>

    </ul>
</div>
</section>`;

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