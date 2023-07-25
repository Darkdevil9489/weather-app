 let hum = document.getElementById('hum')
let temp = document.getElementById('temp')
let spd = document.getElementById('spd')
let submit = document.getElementById('submit')
let search = document.getElementById('search')
let name= document.getElementById('name')
let apik = '28cc6ccc3756641a18bb92a3c2b49fac'


function convertion(val){
    return (val - 273).toFixed(2)
}


submit.addEventListener('click', () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + search.value + '&appid=' + apik)
    .then(res => res.json())
  .then(data =>{
  let namecity=data['name']
  let sesion= data['weather']['0']['main']
  let tempe =data['main']['temp']
  let wind =data['wind']['speed']

name.innerHTML=`The name of city ${namecity}`
hum.innerHTML=`${sesion}`
temp.innerHTML=`temperatur is ${convertion(tempe)} C`
spd.innerHTML= `the speed of wind is ${wind}`
}
  )
 .catch(err => alert('You entered Wrong city name'))
})