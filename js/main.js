//add and show array in localStorage
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}


    //.content - потому что всё содержимое шаблона завёрнуто в невидимый `document-fragment`
    let template = document.querySelector('#template').content; 
    let li = template.querySelector('.tameplate');
    let ul = document.querySelector('.unordered-list');
    let arr = localStorage.getObj('arr') || [];
    let counterMean = arr.length; //counter in footer-bar
    //add counter in footer-bar
    const spanCounter = document.getElementById('count');
    console.log(arr);


//Create previous session
    const previousSession = () => {
        for (i = 0; i < arr.length; i++) {
            let oldLi = li.cloneNode(true);
            ul.appendChild(oldLi);
            oldLi.setAttribute('data-id', arr[i].id);
            let textP = oldLi.querySelector('.input-p');
            textP.innerHTML = arr[i].mean;
            let check = oldLi.querySelector('.check');
            if (arr[i].check) {
                check.classList.add('visible');
                textP.classList.add('line-through');
            }
            // appear footer-bar
            const footerBar = document.getElementById('fBar');
            footerBar.style.visibility = "visible";
        }
    };
    previousSession();
//Finish ____previous session____________________________________________


//Function counter "items left"__________________________________________
    const counterItem = () => {
        const allElements = ul.querySelectorAll('.check');
        const allParentLi = ul.querySelectorAll('.new');

        let amountItems = allElements.length;
        for (let i = 0; i < amountItems; i++) {
            if (allElements[i].classList.contains('visible')) {
                amountItems -= 1;
            }
        } 
        spanCounter.innerHTML = amountItems;
        
    };
//_______________________________________________________________________

    
//Const Enter (all actions which will happen after click keyCode 13)_________________________
    const enter = input.addEventListener ("keypress", function (e) {
        if (e.keyCode === 13) {
            let text = document.getElementById('input').value.trim();
            if (text === '') {
                return;
            }
            const newObject = {id:+ new Date(), mean:text, check:false};
            document.getElementById('input').value = '';

           
            let newLi = li.cloneNode(true);
            ul.appendChild(newLi);
            newLi.setAttribute('data-id', newObject.id);
            let textP = newLi.querySelector('#inputText');
            textP.innerHTML = text;  

            // console.log for array
            arr.push(newObject);

            // change and show array from localStorage 
            localStorage.setObj('arr', arr);
            console.log(arr);

            
            // appear footer-bar after click enter
            const footerBar = document.getElementById('fBar');
            footerBar.style.visibility = "visible"; 
            // allow to change css meaning, you should use ""; 
            

            // call counter and show result of counting
            counterItem();
        }
    });

//____Finish____Const "Enter" ___________________________________________________________


// Delite elements________________________________
    ul.addEventListener('click', () => { 
        let target = event.target; 
        const iParent = target.closest('.new');
        //closest help to searching for id, class and attributes cool

        if (!target.classList.contains('fa-times')) return;
        // target.parentNode.remove(); // remove only parentNode 1 lvl on 
        
        // part which delite object in Array after click_________________
        const attrMean = Number(iParent.getAttribute('data-id'));
        const deliteObjectInArrayForId = (attrMean) => {
            for(let i = 0; i < arr.length; i++) {
                if (arr[i].id === attrMean) {
                    arr.splice(i, 1).pop();
                }
            }
        };
        deliteObjectInArrayForId(attrMean);


        // remove parent and show array
        iParent.remove(); 

        // change and show array from localStorage 
        localStorage.setObj('arr', arr);
        console.log(arr);


        // call counter and show result of counting
        counterItem(); 
    });
//___Finish_______________delite elements__________



//Changing text inside input_____________________________________________
    ul.addEventListener('click', () => {
        let target = event.target;
        const penParent = target.closest('.new');
        const pText = penParent.querySelector('.input-p');
        
        if (target.classList.contains('pen')) {
            if (target.classList.contains('fa-pen')) {
                pText.setAttribute("contenteditable","true");
                target.classList.remove('fa-pen');
                target.classList.add('fa-save');
                pText.focus();
            } else {
                pText.removeAttribute("contenteditable","true");
                target.classList.remove('fa-save');
                target.classList.add('fa-pen');
            }
        }  
    });

//_______________________________________________________________________



//Сlick on check__________________________________________________________
    
    
    const clickOnCheck = () => {
        const target = event.target;
        const parentTargetLi = target.closest('.new');
        const meanDataIdInLi = Number(parentTargetLi.getAttribute('data-id'));
        const pText = parentTargetLi.querySelector(`.input-p`);
        // textContent help to get text from paragraph
        let itemMeanNow = Number(document.getElementById('count').textContent); 

        if (target.classList.contains('fa-check')) {
            const state = target.classList.contains('visible');
            
            if (!state) {
                
                target.classList.add("visible");
                pText.classList.add("line-through");
                //Changer "item left" ;
                spanCounter.innerHTML = itemMeanNow -1;
                
                //chage meaning in arrey after check
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].id === meanDataIdInLi) {
                        arr[i].check = true;
                    }
                }
                // console.log(arr);
                localStorage.setObj('arr', arr);
                const arrInLocalStorage = localStorage.getObj('arr');
                console.log(arrInLocalStorage);


            } else if (state) {
                
                target.classList.remove("visible");
                pText.classList.remove("line-through");
                //Changer "item left" 
                spanCounter.innerHTML = itemMeanNow +1;

                //chage meaning in arrey after check
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i].id === meanDataIdInLi) {
                        arr[i].check = false;
                    }
                }
                // console.log(arr);
                localStorage.setObj('arr', arr);
                const arrInLocalStorage = localStorage.getObj('arr');
                console.log(arrInLocalStorage);
            }
        }
    };

//click on check_____finish______________________

//Buttons in footer-bar_________________________________
    let ulFoot = document.getElementById('ulFooter');

    ulFoot.addEventListener('click', () => {
        let target = event.target;
        // Для справки на будущее:
        // const ul = document.getElementsByClassName('unordered-list')[0];
        // обязательно нужно указывать [0] иначе указан не сам список, а коллекция.
        
        const elemWithBird = ul.querySelectorAll('.visible');
        const allElements = ul.querySelectorAll('.check');

        
        if (target.classList.contains('all')) {
            for (let i = 0; i < allElements.length; i++) {
                let elemParent = allElements[i].closest('.new');
                
                elemParent.classList.remove('none');
            }
            // call counter and show result of counting
            counterItem();
        }
        else if (target.classList.contains('active')) {
            for (let i = 0; i < allElements.length; i++) {
                let elemParent = allElements[i].closest('.new');
                if(allElements[i].classList.contains('visible') === false) {
                    elemParent.classList.remove('none');
                } else {
                    elemParent.classList.add('none');
                }
            }
            // call counter and show result of counting
            counterItem();
        } 
        else if (target.classList.contains('completed')) {
            for (let i = 0; i < allElements.length; i++) {
                let elemParent = allElements[i].closest('.new');
                if(allElements[i].classList.contains('visible')) {
                    elemParent.classList.remove('none');
                } else {
                    elemParent.classList.add('none');
                }
            }
            // call counter and show result of counting
            counterItem();
        }
    });


    
    