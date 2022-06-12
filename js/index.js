// const myMenu = document.getElementById('menu');

// myMenu.onclick = e => // JS event delegation
//     {
//         if (e.target.tagName.toLowerCase() != 'a') return; // only
//         e.preventDefault;
//         let LI = e.target.parentElement;

//         if (!LI.classList.contains('active')) {
//             myMenu.querySelector('li.active').classList.remove('active');
//         }
//         LI.classList.add('active');
//     }







// nav a::after {
//     content: "";
//     background: blue;
//     height: 1px;
//     position: absolute;
//     bottom: 0;
//     transition: .16s all 0.025s;
//   }

//   nav a::after {
//     left: 100%;
//     right: 0;
//   }

//   nav a:hover ~ a::after {
//     left: 0;
//     right: 100%;
//   }

//   nav a:hover::after {
//     left: 0;
//     right: 0;
//   }