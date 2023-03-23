var apikey ="13b33718ab2bbdddb3efe510decb1f08"
var cityname=document.getElementById("search-form")
var searchbtn=document.getElementById("cityform")
var temp1=document.getElementById("temp1")


searchbtn.addEventListener("submit",main)
//this will check your local storage for a "storedAPI" key, and return its value, or it will use your API of choice to create it
async function storedApi(key, callback) {
    //if the API response is not in local storage
    if (localStorage.getItem(key) === null) {
        //then go fetch the response from your API and store it    
        const data = await callback();
        localStorage.setItem(key, JSON.stringify(data));
    }
    //return the API response from local storage
    return JSON.parse(localStorage.getItem(key))
}

//these are the callback functions that will fetch our API Responses
//function callApi() 
  
//fetch api: when it makes a request, it creates a promise (bc its an asynchronous request) 
//async functions ALWAYS ALWAYS ALWAYS return a promise, promise-land is an annoying place to be because promises technically run asynchronously (parallel, rather than line-by-line)
//the V8 engine/interpreter wraps the resulting value of an async function in a promise, then throws the function logic to the browser API to calculate, then the interpreter just continues
//you can see a live example of this by un-commenting the block comment at the bottom of script.js, then comparing that console log to the line 31 console log

async function main(event) {
    event.preventDefault()
    var apiurl =`http://api.openweathermap.org/data/2.5/forecast?q=${cityname.value}&appid=${apikey}&units=imperial`

fetch(apiurl)
.then((response) => response.json())
.then((data) => {
  console.log(data)
  console.log(data.list[0].main.temp)
  temp1.textContent=data.list[0].main.temp
  temp2.textContent=data.list[8].main.temp
  temp3.textContent=data.list[16].main.temp
  temp4.textContent=data.list[24].main.temp
  temp5.textContent=data.list[32].main.temp
  temp6.textContent=data.list[40].main.temp
});
  
    //main is basically our new top-level if we are writing anything that needs access to the storedAPI objects, since we don't have a bundler that gives us top-level async/await. Therefore:
    //TODO: Any code that needs to access whatever is returned from your APIs should be written inside this main function here

}

//when we make external API calls, it may be the case that we make duplicate calls, which can be wasteful. There is a computing concept called memoization, consume more memory to possibly be faster:
// https://www.freecodecamp.org/news/memoization-in-javascript-and-react/#:~:text=In%20programming%2C%20memoization%20is%20an,instead%20of%20computing%20it%20again.

/*
const apiObject = storedApi("storedAPI", callApi);
console.log(apiObject);  
*/
