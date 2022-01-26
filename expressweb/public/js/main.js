const cityName = document.getElementById('cityName')
const submitBtn =document.getElementById('submitBtn');
const city_name =document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')
const getInfo = async (event) =>{
    event.preventDefault();
  let cityval = cityName.value;
if(cityval === ""){
city_name.innerHTML=`plz enter a city name`;
datahide.classList.add("data_hide");
}else{
    try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=d5ac500d0276c3370aa8f64bbb5d1a97`;
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        const con = arrData[0].main.temp;
        const output = Math.round(con -273.15 ) ;
        temp.innerText = output;
        // temp_status.innerText = arrData[0].weather[0].main;
        city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
     
const tempMood = arrData[0].weather[0].main;
 if(tempMood === 'Clear'){
     temp_status.innerHTML = 
"<i class='fas fa-sun' style='color:#eccc68;'></i>"
 }else if(tempMood === 'Clouds'){
     temp_status.innerHTML =
    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
 }else if(tempMood === 'Rain'){
     temp_status.innerHTML =
    "<i class='fas fa-rain' style='color:#a4b0be;'></i>"
 }else{
    temp_status.innerHTML =
    "<i class='fas fa-sun' style='color:#eccc68;'></i>"
 }

 datahide.classList.remove("data_hide");
    }
    catch{
city_name.innerHTML =`plz enter the city name properly`;
datahide.classList.remove("data_hide");
    }
   
}

}

submitBtn.addEventListener('click', getInfo );
