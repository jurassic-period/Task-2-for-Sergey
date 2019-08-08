//.content - потому что всё содержимое шаблона завёрнуто в невидимый `document-fragment`
let template = document.querySelector('#template').content; 
let li = template.querySelector('.tameplate');
let ul = document.querySelector('.unordered-list');
let arr = [];
let counterMean = arr.length; //counter in footer-bar
//add counter in footer-bar
const spanCounter = document.getElementById('count');

    
//Function counter "items left"__________________________________________
    const counterItem = (arg) => {
        const allElements = ul.querySelectorAll('.check');
        const allParentLi = ul.querySelectorAll('.new');

        let amountItems = allElements.length;
        if (arg === 0) {
            amountItems = 0;
        } else {
            for (let i = 0; i < amountItems; i++) {
                if (allElements[i].classList.contains('visible') === true || allParentLi[i].classList.contains('none') === true ) {
                    amountItems -= 1;
                }
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
            const newObject = {id:+ new Date(), mean:text};
            document.getElementById('input').value = '';

           
            let newLi = li.cloneNode(true);
            ul.appendChild(newLi);
            newLi.setAttribute('data-id', newObject.id);
            let textP = newLi.querySelector('#inputText');
            textP.innerHTML = text;  

            // console.log for array
            arr.push(newObject);
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
        
        if (target.classList.contains('pen') === true) {
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
        const pText = parentTargetLi.querySelector(`.input-p`);
        // textContent help to get text from paragraph
        let itemMeanNow = Number(document.getElementById('count').textContent); 

        if (target.classList.contains('fa-check')) {
            const state = target.classList.contains('visible');
            
            if (state === false) {
                
                target.classList.add("visible");
                pText.classList.add("line-through");
                //Changer "item left" ;
                spanCounter.innerHTML = itemMeanNow -1;

            } else if (state === true) {
                
                target.classList.remove("visible");
                pText.classList.remove("line-through");
                //Changer "item left" 
                spanCounter.innerHTML = itemMeanNow +1;
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
                if(allElements[i].classList.contains('visible') === true) {
                    elemParent.classList.remove('none');
                } else {
                    elemParent.classList.add('none');
                }
            }
            // call counter and show result of counting
            counterItem(0);
        }
    });