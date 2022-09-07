const api = "ce6aeb7e8883c1fe4c551570ff34de02";
const choose = document.getElementById('city');

// console.log(city);

let city = choose.value;

choose.addEventListener('change', (e) => {
   city = e.target.value;
   console.log(city);
   updateWeather();
})

const updateWeather = () => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
      .then(resp => resp.json())
      .then(data => {
         console.log(data);

         document.querySelector('.info__city').innerHTML = `${data.name}`
         document.querySelector('.info__image').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="200px" height="200px"><img>`
         document.querySelector('.info__temp').innerHTML = `${Math.round(data.main.temp - 273)} &#8451;`
         document.querySelector('.info__description').innerHTML = `${data.weather[0].description}`;

         document.querySelector('.additional-info__wind-value').innerHTML = `${data.wind.speed}m/s`
         document.querySelector('.additional-info__humidity-value').innerHTML = `${data.main.humidity}%`
         document.querySelector('.additional-info__feels-like-value').innerHTML = `${Math.round(data.main.feels_like - 273)}&#x2103; `
      })
}

updateWeather();

















// const requestURL = 'https://jsonplaceholder.typicode.com/users'


// let b = [];

// fetch(requestURL)
//    .then(a => a.json())
//    .then(data => {
//       b.push(data)
//    })




// console.log(b);

// // let users = [];

// async function f() {
//    let usersData = await fetch("https://jsonplaceholder.typicode.com/users")
//    let usersinfo = await usersData.json();
//    let users = usersinfo;
//    console.log(users);

// }

// f();




// let p = new Promise((resolve, reject) => {
//    let a = 1 + 1;
//    if (a == 2) {
//       resolve("success")
//    } else {
//       reject("failed")
//    }
// })

// p.then((message) => {
//    console.log('then ' + message)
// }).catch((message) => {
//    console.log('catch ' + message)
// })

///------------------///


