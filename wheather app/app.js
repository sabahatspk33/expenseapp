 

function showdata(){
    let getInp = document.getElementById('inp')
    let getDiv = document.getElementById('show')

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getInp.value}&units=metric&appid=921e348e87806353b09caeadc8c16b41`)
    .then(data  => data.json())
    .then((data) => {
        let getData = data.main
        getDiv.innerHTML = `<div> 
        <p> temperature : ${getData.temp}</p>
        <p>  humidity : ${getData.humidity}</p>
        </div>`
    })
}


