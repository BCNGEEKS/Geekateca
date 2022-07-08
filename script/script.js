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

//Function to use an API from google translate and translate automatically in any language

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

