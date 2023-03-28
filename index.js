var apikey = "13b33718ab2bbdddb3efe510decb1f08"
var cityname = document.getElementById("search-form")
var searchbtn = document.getElementById("cityform")
var temp1 = document.getElementById("temp1")
var temp2 = document.getElementById("temp2")
var temp3 = document.getElementById("temp3")
var temp4 = document.getElementById("temp4")
var temp5 = document.getElementById("temp5")
var temp6 = document.getElementById("temp6")
var date1 = document.getElementById("date1")
var date2 = document.getElementById("date2")
var date3 = document.getElementById("date3")
var date4 = document.getElementById("date4")
var date5 = document.getElementById("date5")
var date6 = document.getElementById("date6")
var humidity1 = document.getElementById("humidity1")
var humidity2 = document.getElementById("humidity2")
var humidity3 = document.getElementById("humidity3")
var humidity4 = document.getElementById("humidity4")
var humidity5 = document.getElementById("humidity5")
var humidity6 = document.getElementById("humidity6")
var wind1 = document.getElementById("wind1")
var wind2 = document.getElementById("wind2")
var wind3 = document.getElementById("wind3")
var wind4 = document.getElementById("wind4")
var wind5 = document.getElementById("wind5")
var wind6 = document.getElementById("wind6")
var icon1=document.getElementById("icon1")





















searchbtn.addEventListener("submit", main)
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
    var apiurl = `http://api.openweathermap.org/data/2.5/forecast?q=${cityname.value}&appid=${apikey}&units=imperial`

    fetch(apiurl)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            console.log(data.list[0].main.temp)
            temp1.textContent = data.list[0].main.temp
            date1.textContent = data.list[0].dt_txt.split(" ")[0]
            humidity1.textContent = data.list[0].main.humidity
            wind1.textContent = data.list[0].wind.speed
            icon1.textContent=data.list[0].weather[0].main
            


            temp2.textContent = data.list[8].main.temp
            date2.textContent = data.list[8].dt_txt.split(" ")[0]
            humidity2.textContent = data.list[8].main.humidity
            wind2.textContent = data.list[8].wind.speed


            temp3.textContent = data.list[16].main.temp
            date3.textContent = data.list[16].dt_txt.split(" ")[0]
            humidity3.textContent = data.list[16].main.humidity
            wind3.textContent = data.list[16].wind.speed


            temp4.textContent = data.list[24].main.temp
            date4.textContent = data.list[24].dt_txt.split(" ")[0]
            humidity4.textContent = data.list[24].main.humidity
            wind4.textContent = data.list[24].wind.speed


            temp5.textContent = data.list[32].main.temp
            date5.textContent = data.list[32].dt_txt.split(" ")[0]
            humidity5.textContent = data.list[32].main.humidity
            wind5.textContent = data.list[32].wind.speed

            temp6.textContent = data.list[39].main.temp
            date6.textContent = data.list[39].dt_txt.split(" ")[0]
            humidity6.textContent = data.list[39].main.humidity
            wind6.textContent = data.list[39].wind.speed

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
