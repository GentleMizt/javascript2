const body = document.body;
const h2 = document.querySelector('h2');
const input = document.getElementById('input-field');
const button = document.getElementById('btn');
const ul = document.getElementById('items-to-shop');
const li = document.querySelectorAll('li');
const delButton = document.getElementsByClassName('btn')

for (let i = 0; i<delButton.length; i++){
    delButton[i].addEventListener('click', deleteList);
}
function deleteList(event){
    event.target.parentNode.remove();
}

input.addEventListener('keypress', event =>{
    if (event.keyCode === 13 && input.value.length > 0){
        console.log(event.target);
        const newListItem = document.createElement('li');
        const newListContent = document.createTextNode(input.value)
        ul.append(newListItem);
        newListItem.append(newListContent);
    }
});

button.addEventListener('click', () => {
    if (input.value !== ""){
        let found = false;
        li.forEach(li_child=> {
            if (li_child.innerText === input.value){
                found = true;
                li_child.innerText = `${li_child.innerText} x2`
                input.value = '';
            }
        });
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




// FUNCTION CONSTRUCTORS
// let User = function(userName, password, age){
//     this.userName = userName;
//     this.password = password;
//     this.age = age;
//     this.retireAge = function(){
//         console.log(65-this.age);
//     }
// }

// new helps us create a new object called sauce
// note that sauce and simon here is not a variable but an object
// let sauce = new User('Hotsauce', 'dabingo', 32);
// let simon = new User('Simon', 'babalaya', 30);

// READ UP ON INHERITANCE, PROTOTYPES
// Create a beautiful registration form using html and css, it would have a submit button
// once the submit button is clicked, a user object would be created

class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    retireAge = function(){
        console.log(65-this.age)
    }
}

let person1 = new Person('Raddie', 19, 'Female');