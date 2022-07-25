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
    var activeNavlink = document.querySelectorAll('ul a[href^="/' + location.pathname.split("/")[1] + '"]');
    activeNavlink[0].classList.add('active');
});