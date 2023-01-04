

var countries_url = 'https://restcountries.com/v3.1/all'
var c_lat = [];
var c_names = [];
var c_flags = [];
var c_capitals = []
var c_regions = [];
var c_codes = [];
var c_latlng = [];
var c_lng = []

async function countries_data (){
    var fetch_url = await fetch(countries_url)
    var result = await fetch_url.json();
;
try{
    for(i = 0 ; i < result.length; i++){
        c_names.push(result[i].name.common)
        c_capitals.push(result[i].capital)
        c_flags.push(result[i].flags.png)
        c_codes.push(result[i].idd.root)
        c_latlng.push(result[i].latlng)
        c_regions.push(result[i].region)
         c_lat.push(result[i].latlng[0])
         c_lng.push(result[i].latlng[1])
    }
    
}
catch(err){
    console.log('error in pushing details')
}
 for(i= 0; i < c_names.length; i++ ){
    var div_1st = document.createElement('div')
    div_1st.setAttribute('class','container text-center')
    document.body.append(div_1st)
    var div_row = document.createElement('div')
    div_row.setAttribute("class","row")
    div_1st.append(div_row)
    var div_col = document.createElement('div')
    div_col.setAttribute("class","col-lg-4 col-sm-12")
    div_row.append(div_col)
    var div_card = document.createElement('div')
    div_card.setAttribute("class","card")
    div_col.append(div_card)
    var div_cardbody = document.createElement('div')
    div_cardbody.setAttribute("class","container card-body")
    div_card.append(div_cardbody)
    var div_cardtitle = document.createElement('div')
    div_cardtitle.setAttribute("class","card-title bg-primary text-light p-3 ")
    div_cardtitle.textContent= `${c_names[i]}`
    div_cardbody.append(div_cardtitle)
    var card_img = document.createElement("img")
    card_img.setAttribute("src",`${c_flags[i]}`)
     div_cardbody.append(card_img)
    //  cardtext
var card_cap = document.createElement("h5")
card_cap.textContent= `Capital: ${c_capitals[i]}`
 div_cardbody.append(card_cap)

 var card_reg = document.createElement("h5")
card_reg.textContent= `Region : ${c_regions[i]}`
 div_cardbody.append(card_reg)

 var card_latlng = document.createElement("h5")
card_latlng.textContent= `Lat&Lng: ${c_latlng[i]}`
 div_cardbody.append(card_latlng)

 var card_code = document.createElement("h5")
card_code.textContent= `Code: ${c_codes[i]}`
 div_cardbody.append(card_code)

 var btn_weather = document.createElement("button")
 btn_weather.setAttribute("class","btn btn-lg btn-primary")
 btn_weather.setAttribute("onclick","weatherfun()")
 btn_weather.textContent = "weather"
 div_cardbody.append(btn_weather)

  
}
  
}  

countries_data()

async function weatherfun(a,b){
 try{  
 var data= await fetch (`https://api.openweathermap.org/data/3.0/onecall?
 lat=a
 &lon=b
 &exclude=current
 &appid=ab582ba85076f2574c480d5bf20bf150`)
var result_data = data.json()
    console.log(result_data)
 }
 catch{
    console.log("error in fetching weather data")
 }
}
weatherfun(33.44,94.04)
 

// var div_1 = document.createElement('div')
// div_1.innerHTML = `   
// <div class=container >
// <div class=row >
//     <div class= col-auto> 
// <div class=box>
//     <image class=c-img src=${result[i].flags.png} >
//      <h5> COUNTRY NAME: ${result[i].name.common} </h5>
//      <h5> CAPITAL: ${result[i].capital} </h5>
//      <h5> REGION: ${result[i].region} </h5>
//      <h5> POPULATION: ${result[i].population} </h5>
//      <h5> CODE: ${result[i].idd.root} </h5>
//      <h5> LAT & LNG: ${result[i].latlng} </h5>
//     <button id=weather-btn class=btn-primary > WEATHER </button>
    
//      </div>
     

//      </div>
//     </div>
//    </div>  `
 


