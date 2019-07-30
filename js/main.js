// By pressing the enter, the value of the entered data is determined in the input,
//  new Li are created to which this value is transmitted ________________________

const enter = input.addEventListener ("keypress", function (e) {
    if (e.keyCode === 13) {
        const text = document.getElementById('input').value.trim();
        document.getElementById('input').value = '';
        
        let newLi = document.getElementById('tameplate');
        let liClone = newLi.cloneNode(true);
        newLi.parentNode.appendChild(liClone);
        newLi.classList.add("block");
        let textP = document.getElementById('inputText');
        textP.innerHTML = text;  
    }
});


// By clicking, the current 'li' will be deleted.__________________________________

const del = () => {
    let newLi = document.getElementById('tameplate');
    newLi.remove();
};





