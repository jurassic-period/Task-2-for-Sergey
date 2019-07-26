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


const enter = input.addEventListener ("keypress", function (e) {
    if (e.keyCode === 13) {
        const text = document.getElementById('input').value.trim();
        document.getElementById("input").value = "";
        let d1 = document.getElementById('input'); 
        d1.insertAdjacentHTML('afterend', '<div id="inser2" class="inser2"></div>');
        d1.insertAdjacentHTML('afterend', '<div id="wrapper" class="wrapper"></div>');
        let d2 = document.getElementById('wrapper');
        d2.insertAdjacentHTML('afterBegin', '<spin class="spin"><i class="fa fa-times" onclick="del()"></i></spin>');

        const out = document.getElementById('inser2').innerHTML = text;
        document.getElementById('inser2').classList.add("new-todo", "new");
    }
});

const del = () => {
    inser2.remove();
};





