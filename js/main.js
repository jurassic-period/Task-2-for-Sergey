// const text = document.getElementById('input').value.trim();

// console.log(text);
// let x = '';
// const text = (function() {
//     x = document.querySelector('input').addEventListener('keydown', function(e) {
//    if (e.keyCode === 13) {
//         return x;
//    }
//     });
//   })();

//   console.log(x);

const enter = window.addEventListener ("keypress", function (e) {
    const text = document.getElementById('input').value.trim();
    // const out = document.getElementById('inser2').innerHTML = text;
    if (e.keyCode !== 13) return;
    var d1 = document.getElementById('input'); 
    d1.insertAdjacentHTML('afterend', '<div id="inser2">1string</div>');
    
});




