console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title= 4242
console.log(document.doctype);
console.log(document.body);
console.log(document.head);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent = "Hello"
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

// Selector 
// document.getElementById
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
const header  = document.getElementById('main-header')
console.log(headerTitle);
// headerTitle.textContent= "Hello";
// headerTitle.innerText = "Goodbay"
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h1>hI my name is ahsan </h1>';
headerTitle.style.borderBottom = 'solid 3px black'



// document.getElementsByClassName()
var headerTitleClass = document.getElementsByClassName('fw-bold')[0];
var items = document.getElementsByClassName('list-group-item'); 
console.log(items);
console.log(items[1]);
items[1].textcontent = 'Hello 2'
items[1].style.fontweight = 'bold'
items[1].style.backgroundColor  = 'yellow'
for (var i = 0; i < items.length; i++) {
    const element = items[i].style.backgroundColor = '#f4f4f4';
    console.log(element);
    
}

console.log(headerTitleClass);
// headerTitleClass.textContent = "Hello";
// headerTitleClass.innerText = "Goodbye";
console.log(headerTitleClass.innerText);
headerTitleClass.innerHTML = '<h1>Hi, my name is Ahsan</h1>';
headerTitleClass.style.borderBottom = 'solid 3px black';


// document.getElementsByTagName()
var headers = document.getElementsByTagName('h1')[0]; 
console.log(headers);
headers.textContent = "Hello";
headers.innerText = "Goodbye";
console.log(headers.innerText);
headers.innerHTML = '<h1>Hi, my name is Ahsan</h1>';
headers.style.borderBottom = 'solid 3px black';


// document.querySelector()
var headerQuery = document.querySelector('#header-title'); // Selects the first matching element
console.log(headerQuery);
headerQuery.textContent = "Hello";
headerQuery.innerText = "Goodbye";
console.log(headerQuery.innerText);
headerQuery.innerHTML = '<h1>Hi, my name is Ahsan</h1>';
headerQuery.style.borderBottom = 'solid 3px black';



// document.querySelectorAll()
var headersAll = document.querySelectorAll('.fw-bold');
headersAll.forEach(header => {
    console.log(header);
    header.textContent = "Hello";
    header.innerText = "Goodbye";
    console.log(header.innerText);
    header.innerHTML = '<h1>Hi, my name is Ahsan</h1>';
    header.style.borderBottom = 'solid 3px black';
});


// Part 2
// Traversing the dom
var headerTitle = document.getElementById('header-title');
var parentElement = headerTitle.parentElement;
console.log(parentElement);
// parentElement.style.backgroundColor = 'lightgray';

// parents Node 
var itemslist   = document.querySelector("#items");
console.log(itemslist.parentNode);
itemslist.parentNode.style.backgroundColor = '#f4f4f4'
console.log(itemslist.parentNode.parentNode.parentNode);

// parents Elements
console.log(itemslist.parentElement);
itemslist.parentElement.style.backgroundColor = '#f4f4f4'
console.log(itemslist.parentElement.parentElement.parentElement);

var itemslist   = document.querySelector("#items");
// child node 
// console.log(itemslist.childNodes);

console.log(itemslist.children);
console.log(itemslist.children[1]);
itemslist.children[1].style.backgroundColor = 'green'


// firstChild  
console.log(itemslist.firstChild);



// firstChild Element Child 
console.log(itemslist.firstElementChild);
itemslist.firstElementChild.textContent = 'Hello World'



// first Child 
var thirdItem = document.querySelectorAll('.list-group-item')[2];
console.log(thirdItem.previousElementSibling); 

thirdItem.previousElementSibling.textContent = "I am Previous Sibling";
thirdItem.previousElementSibling.style.color = "red";



// Next Siblings 
var secondItem = document.querySelectorAll('.list-group-item')[1]; 
console.log(secondItem.nextElementSibling); 

secondItem.nextElementSibling.style.backgroundColor = "lightblue";



// last child and change text 
var itemList = document.querySelector("#items");
console.log(itemList.lastElementChild); 

itemList.lastElementChild.textContent = "I am Last";
itemList.lastElementChild.style.border = "2px solid black";



// First Child and Change Text
var itemList = document.querySelector("#items");
console.log(itemList.firstElementChild); // Logs "Item 1"

itemList.firstElementChild.textContent = "I am First";
itemList.firstElementChild.style.backgroundColor = "yellow";
























