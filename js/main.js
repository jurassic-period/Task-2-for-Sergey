// By pressing the enter, the value of the entered data is determined in the input,
//  new Li are created to which this value is transmitted ________________________

try {
    //.content - потому что всё содержимое шаблона завёрнуто в невидимый `document-fragment`
    let template = document.querySelector('#template').content; 
    let li = template.querySelector('.tameplate');
    let ul = document.querySelector('.unordered-list');
    let arr = [];

    const enter = input.addEventListener ("keypress", function (e) {
        if (e.keyCode === 13) {
            const text = document.getElementById('input').value.trim();
            document.getElementById('input').value = '';
            
            let newLi = li.cloneNode(true);
            ul.appendChild(newLi);
            // newLi.classList.add("block"); // add class, now don't need
            let textP = newLi.querySelector('#inputText');
            textP.innerHTML = text;  
            // console.log for array__________________________
            arr.push(text);
            console.log(arr);
            // delite elements________________________________
            ul.addEventListener('click', () => { 
                let target = event.target; 
                if (!target.classList.contains('fa')) return;
                 target.parentNode.remove(); 
                
                console.log(arr);
            });
            //_________________________________________________
        }
    });
} catch {
    alert('Please refresh the page');
}


// By clicking, the current 'li' will be deleted.__________________________________

const del = (f) => {
    f.remove();
};





