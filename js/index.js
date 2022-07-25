document.addEventListener('DOMContentLoaded', e => {
    let hash = window.location.hash.slice(1);
    document.querySelector(`${hash}`).scrollIntoView();
})