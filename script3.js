let body = document.body;
let h2 = document.querySelector('h2');
let input = document.getElementById('input-field');
let ul = document.getElementById('items-to-shop');
let lis = document.querySelectorAll('li');
let list = Object.values(lis);
let button = document.getElementById('btn');

let updatedLists = [];
for (let i = 0; i < list.length; i++){
    updatedLists.push(list[i].innerText);
    console.log(updatedLists);
}


button.addEventListener('click', () => {
    
    
    if (input.value !== ""){
        let found = false;
        updatedLists.push(input.value);
        console.log(updatedLists);
        for (let p = 0; p < updatedLists.length; p++){
            if (updatedLists[p] === input.value){
                found = true;
                updatedLists[p] = `${updatedLists[p]} x2`
                input.value = '';
            }
        }
        
        if (found){
            // alert('Item already exists')
        }
        else{
            let newListItem = document.createElement('li');
            let listContent = document.createTextNode(input.value);

            // body.append(ul);
            ul.append(newListItem);
            newListItem.append(listContent);
            input.value = '';
        } 
    }
});




updatedLists.forEach(updatedList => {  
    if (updatedList === input.value){
        found = true;
        updatedList = `${updatedList} x2`
        input.value = '';
    }
});   


// write a condition
/* if the input value is already present in the list, return nothing
if u want to take it a step further let the list value show a x2
*/