document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const wineOption = document.querySelector('select').value
    try{
        const response = await fetch(`https://wine-app-1.herokuapp.com/api/${wineOption}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('wineVariety').innerText = data[0].variety
        document.getElementById('wineVintage').innerText = data[0].vintage
        document.getElementById('wineLocation').innerText = data[0].location
        document.getElementById('wineBold').innerText = data[0].boldness
        document.getElementById('wineSmooth').innerText = data[0].smooth
        document.getElementById('wineSweetness').innerText = data[0].sweetness
        document.getElementById('wineAcidic').innerText = data[0].acidic
        document.getElementById('winePair').innerText = data[0].pairings
        document.getElementById('winePrimary').innerText = data[0].primary
        document.getElementById('wineSecondary').innerText = data[0].secondary
        document.getElementById('wineKeywords').innerText = data[0].keywords
        document.getElementById('winePrice').innerText = data[0].price
        
    }catch(error){
        console.log(error)
    }
}



//make it appear in the DOM
//document.getElementByID('alienName').innerText = data.speciesName
//doument.getElementById('alienWorld').innerText = data.homeworld   
//doument.getElementById('alienFeatures').innerText = data.features

//apiTemplate from pokemon example
// function apiRequest(){
//     const choice = document.querySelector('input').value
//     const url = `https://wine-app-1.herokuapp.com/api/${choice}`
  
//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
          
//         //   document.querySelector('h2').innerText = data.explanation
//         //   document.querySelector('h2').style.display ="block"
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
//   }