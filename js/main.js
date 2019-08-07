

    //.content - потому что всё содержимое шаблона завёрнуто в невидимый `document-fragment`
    let template = document.querySelector('#template').content; 
    let li = template.querySelector('.tameplate');
    let ul = document.querySelector('.unordered-list');
    let arr = [];
    let counterMean = arr.length; //counter in footer-bar
    //add counter in footer-bar
    const spanCounter = document.getElementById('count');

    
    
    
    //Const Enter (all actions which will happen after click keyCode 13)_________________________
    const enter = input.addEventListener ("keypress", function (e) {
        if (e.keyCode === 13) {
            let text = document.getElementById('input').value.trim();
            if (text === '') {
                text = 'Empty string';
            }
            const newObject = {id:+ new Date(), mean:text};
            document.getElementById('input').value = '';

           
            let newLi = li.cloneNode(true);
            ul.appendChild(newLi);
            newLi.setAttribute('data-id', newObject.id);
            // newLi.classList.add("block"); // add class, now don't need
            let textP = newLi.querySelector('#inputText');
            textP.innerHTML = text;  

            //Change meaning for counter after use enter
            counterMean += 1;
            spanCounter.innerHTML = counterMean;
    

            // console.log for array
            arr.push(newObject);
            console.log(arr);

            
            // appear footer-bar after click enter
            const footerBar = document.getElementById('fBar');
            footerBar.style.visibility = "visible"; 
            // allow to change css meaning, you should use ""; 
            

            // delite elements________________________________
            newLi.addEventListener('click', (event) => { 
                let target = event.target; 
                const iParent = target.closest('.new');
                //closest help to searching for id, class and attributes cool


                if (!target.classList.contains('fa-times')) return;
                // target.parentNode.remove(); // remove only parentNode 1 lvl on 
                
                // Part which delite object in Array after click_________________
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


                //Changer "item left" - after remove
                counterMean = arr.length; // update this variable, after remove elements
                spanCounter.innerHTML = counterMean;


            });
            //___Finish_______________delite elements__________

        }
    });

    //____Finish____Const "Enter" ___________________________________________________________


    //click on check__________________________________________________________
    
    
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

    // Buttons in footer-bar_________________________________
    let ulFoot = document.getElementById('ulFooter');

    ulFoot.addEventListener('click', () => {
        let target = event.target;
        const ul = document.getElementsByClassName('unordered-list');
        console.log(ul);
        ul.classList.add("random-class");
        

        // const elemWithCheck = .querySelector('.visible');
       
       


        // const elemWithoutCheck = newLi.querySelector('.check');
        // const iParent = elemWithCheck.closest('.new');
        // const iParentForAllLi = elemWithoutCheck.closest('.new');
        // console.log(iParent , `0000`);
        // console.log(iParentForAllLi , `!!!!!!!!!!!!!!!!!!`);
        // if (target.classList.contains('all')) {
        //     iParent.classList.remove('none');
        // }
        // else if (target.classList.contains('active')) {
        //     iParent.classList.add('none');
        // } 
        // else if (target.classList.contains('completed')) {
        //     iParentForAllLi.classList.add('none');
        //     iParent.classList.remove('none');
            
        // }
    });






