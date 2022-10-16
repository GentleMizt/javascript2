    let body = document.body;
    let h2 = document.querySelector('h2');
    let input = document.getElementById('input-field');
    let ul = document.getElementById('items-to-shop');
    
    // let list = Object.values(lis);
    let button = document.getElementById('btn');



    button.addEventListener('click', () => {
        
        
        if (input.value !== ""){
            let lis = document.querySelectorAll('li');
            let found = false;
            lis.forEach(li => {
                if (li.innerText === input.value){
                    found = true;
                    li.innerText = `${li.innerText} x2`
                    input.value = '';
                }
            });
            if (found){
                // alert('Item already exists')
            }
            else{
                
                let newListItem = document.createElement('li');
                let listContent = document.createTextNode(input.value);

               
                ul.append(newListItem);
                newListItem.append(listContent);
                input.value = '';
            } 
        }
    });







// write a condition
/* if the input value is already present in the list, return nothing
    if u want to take it a step further let the list value show a x2
*/