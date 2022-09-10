const api = "ce6aeb7e8883c1fe4c551570ff34de02";
const choose = document.getElementById('input');
const btn = document.getElementById('btn');

let city = 'wroclaw';

btn.addEventListener('click', () => {
   city = choose.value;
   updateContent();
   choose.value = '';
})

choose.addEventListener('change', (e) => {
   city = e.target.value;
   choose.value = '';
   updateContent();
})

const updateWeather = () => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
      .then(resp => resp.json())
      .then(data => {
         console.log(data);

         document.querySelector('.info__city').innerHTML = `${data.name}.<span class="country">${data.sys.country}</span>`
         document.querySelector('.info__image').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width="200px" height="200px"></img>`
         document.querySelector('.info__temp').innerHTML = `${Math.round(data.main.temp - 273)} &#8451;`
         document.querySelector('.info__description').innerHTML = `${data.weather[0].description}`;

         document.querySelector('.additional-info__wind-value').innerHTML = `${data.wind.speed}m/s`
         document.querySelector('.additional-info__humidity-value').innerHTML = `${data.main.humidity}%`
         document.querySelector('.additional-info__feels-like-value').innerHTML = `${Math.round(data.main.feels_like - 273)}&#x2103; `
      })

}

const forecast = () => {
   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`)
      .then(resp => resp.json())
      .then(data => {
         console.log(data)


         for (let i = 0; i < 5; i++) {
            let date = data.list[i].dt * 1000
            const obj = new Date(date)

            document.querySelector('.forecast').innerHTML += `
               <div class="forecast__block">
                  <div class="forecast__time">
                     ${obj.toLocaleString("en-US", { hour: "numeric" })}
                  </div>
                  <div class="forecast__img">
                     <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png" width="50px" height="50px"><img>
                  </div>
                  <div class="forecast__temp">
                     ${Math.round(data.list[i].main.temp - 273)}&#8451
                  </div>
               </div>`
         }
      })
}


const updateContent = () => {
   document.querySelector('.forecast').innerHTML = ``
   forecast();
   updateWeather();
}

updateContent();


