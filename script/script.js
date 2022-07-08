//Select DOM elements
const form = document.querySelector('form'),
    input = document.querySelector('input'),
    searchBoxButtons = document.querySelector('.searchBoxButtons');

//Find text in the page
const findText = (textToSearch)=>{
    return window.find(textToSearch)
}

//Find next
const findNextWord = () =>{
    return window.find(word, false, false, true, false)
}

//Find back
const findBack = () =>{
    return window.find(word, false, true, true, false)
}

//Show input
const showInput = ()=>{
    form.classList.toggle('show');
    //Hide search nav
    searchBoxButtons.classList.add('hide');
}

let word = '';
//Add form event listener
form.addEventListener('submit', e =>{
    //Prevent page reload
    e.preventDefault();
    //Input value
    let iVal = input.value;
    //Set word search
    word = iVal !== '' ? iVal : '';
    if(word.length > 0){
        searchBoxButtons.classList.remove('hide');
    } else{
        searchBoxButtons.classList.add('hide');
    }
    //Find text inside the page
    findText(iVal);
    // Reset form
    //form.reset();
});

//Function to find previous word when pressing "Ctrl + Enter"
let inputFind = document.getElementById('find')
inputFind.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key == 'Enter'){
      document.getElementById("back").click();
    }
  });

//Get the button
var mybutton = document.getElementById("buttonTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
