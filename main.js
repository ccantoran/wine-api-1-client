document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const wineOption = document.querySelector('input').value
    try{
        const response = await fetch(`https://wine-app-1.herokuapp.com/api/${wineOption}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.variety
        //data.obj[object[key]]
    }catch(error){
        console.log(error)
    }
}











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