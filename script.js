"use strict"
const getquote = document.querySelector('#btn-1');
const quote = document.querySelector('.quote');
const myQuote = document.querySelector('#myquote');
const myAuthor = document.querySelector('#myauthor');
const copy =document.querySelector('#copy');
const volume = document.getElementById('volume');
const mycontainer = document.querySelector(".container");
const myLoader = document.querySelector('.loader');
function first(){
    //Container should be visible ---->Loader should not be visible
    mycontainer.hidden = false
    myLoader.hidden = true
}
function second(){
    //Loader should be visible --->Container should not be visible
    myLoader.hidden = false
    mycontainer.hidden = true
}
first();
getquote.addEventListener('click',async function () {
    // console.log("Getting");
    // const req = fetch(`https://api.quotable.io/random`)
    //     .then(response => response.json())                          //Converting this into one Javascript object
    //     .then(data =>  console.log(data.content))
    //     .catch(err => console.log(err));

    //Logic container should be hidden and loader should be visible
    second();
    const response = await fetch(`https://api.quotable.io/random`)        //await is very important while fetching 
    let quote = await response.json()
    
    myQuote.innerText = quote.content;
    myAuthor.innerText = `~${quote.author}`;
    first();
}) 

copy.addEventListener('click',function(){
    //Copy the quote
    navigator.clipboard.writeText(quote.innerText);  //Copy the quote and paste it anywhere you want
})
volume.addEventListener('click',function(){
    //Logiv to readout that quote
    let speech = new SpeechSynthesisUtterance(myQuote.innerText); // new is for object
    speechSynthesis.speak(speech);
})


