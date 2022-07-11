var anchorTag = document.getElementsByClassName('d-flex')[0];
var firstImage = document.getElementsByClassName('right-img')[0].getElementsByTagName('img')[0];

anchorTag.onclick = function(event) {
    event.preventDefault();
    firstImage.click();
}

// firstImage.onclick = function() {
//     console.log('idemoooo');
// }