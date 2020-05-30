const api = {
    key: "8743697ec77ad781c886e887e55d00d5",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
        
      getResults(searchbox.value);
    console.log(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchbox.value+'&appid=8743697ec77ad781c886e887e55d00d5')
      .then(response => response.json())
  .then(data => displayResults(data));
     /* .then(weather => {
        //
        if(weather.ok)
            console.log(weather.json());
        //return weather.json();
      }).then(displayResults);*/
  }
  
  function displayResults (result) {
      console.log(result);
    let city = document.querySelector('.location .city');
    city.innerHTML = result.name+'-'+result.sys.country ;
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = (Math.round(result.main.temp)-273).toPrecision(2) + '<span>°c</span>';
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerHTML = result.weather[0].main;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = (Math.round(result.main.temp_min)-273).toPrecision(2)+'°c /'+ (Math.round(result.main.temp_max)-273).toPrecision(2)+'°c';
  }
  
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];   
    let year = d.getFullYear();
    todaydate = day +', '+date+'/'+month+'/'+year;
    return todaydate;
  }