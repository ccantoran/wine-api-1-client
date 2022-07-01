document.querySelector('button').addEventListener('click', apiRequest)


async function apiRequest(){
    const vintage = document.getElementById('vintage').value
    const price  = document.getElementById('price').value
    const variety  = document.getElementById('variety').value.toLowerCase()

    try{
        const response = await fetch(`https://wine-app-1.herokuapp.com/api/match/${vintage}.${price}.${variety}`)
        const data = await response.json()
        console.log(data[0].name)
        
        document.getElementById('wineVariety').innerText = data[0].name
        document.getElementById('wineVariety1').innerText = `From: ${data[0].location}`
        
    }catch(error){
        console.log(error)
        document.getElementById('wineVariety').innerText = 'try again'
    }
}


// function apiRequest(){
//     const vintage = document.getElementById('vintage').value
//     const price  = document.getElementById('price').value
//     const variety  = document.getElementById('variety').value.toLowerCase()
 
//     const url = `https://wine-app-1.herokuapp.com/api/match/${vintage}.${price}.${variety}`
  
//     fetch(url)
//         .then(res => res.json()) // parse response as JSON
//         .then(data => {
//           console.log(data)
      
//           document.querySelector('h2').innerText = data.name
//         })
//         .catch(err => {
//             console.log(`error ${err}`)
//         });
//   }




//technique: if we route it to get the whole collection. Once we have a whole collection, maybe we can go in individually with a key. 
//maybe we can even run 2 fetches? one the regular way with the output in the back. 
//the other with the 1st technique described above. 


// function reverse(){
//     const location = document.querySelector('select').value.toLowerCase()
//     if(location == 'usa'){
//     apiRequest('paraduxx')
//     }else if(location == 'spain'){
//     apiRequest('kris')
// }
// }
