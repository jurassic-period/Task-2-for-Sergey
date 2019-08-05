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
            const newObject = {id:+ new Date(), mean:text};
            document.getElementById('input').value = '';
            
            let newLi = li.cloneNode(true);
            ul.appendChild(newLi);
            newLi.setAttribute('data-id', newObject.id);
            // newLi.classList.add("block"); // add class, now don't need
            let textP = newLi.querySelector('#inputText');
            textP.innerHTML = text;  

            // console.log for array__________________________
            arr.push(newObject);
            console.log(arr);

            // delite elements________________________________
            newLi.addEventListener('click', (event) => { 
                let target = event.target; 
                const iParent = target.closest('.new');
                //closest help to searching for id, class and attributes cool

                // Part which delite object in Array after click
                const attrMean = Number(iParent.getAttribute('data-id'));
                const deliteObjectInArrayForId = (attrMean) => {
                    for(let i = 0; i < arr.length; i++) {
                        if (arr[i].id === attrMean) {
                            arr.splice(i, 1).pop();
                        }
                    }
                };
                deliteObjectInArrayForId(attrMean);

                if (!target.classList.contains('fa')) return;
                // target.parentNode.remove(); // remove only parentNode 1 lvl on    
                iParent.remove(); 
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




