document.querySelector('button').addEventListener('click', allData)

async function allData(){
    const colorOptions = document.getElementById('redOrWhite').value

    const boldOptions = document.getElementById('bold-range').value.split('-')
    const boldOp1 = +boldOptions[0]
    const boldOp2 = +boldOptions[1]

    const sweetOptions = document.getElementById('sweet-range').value.split('-')
    const sweetOp1 = +sweetOptions[0]
    const sweetOp2 = +sweetOptions[1]

    const acidOptions = document.getElementById('acid-range').value.split('-')
    const acidOp1 = +acidOptions[0]
    const acidOp2 = +acidOptions[1]

    const priceOptions = document.getElementById('price-range').value.split('-')
    const priceOp1 = +priceOptions[0]
    const priceOp2 = +priceOptions[1]
   
    try{
        const response = await fetch(`https://wine-app-1.herokuapp.com/api/`)
        const data = await response.json()

        for(let i=0; i<data.length; i++){
           
            if((data[i].op == colorOptions) && 
                (data[i].boldness >= boldOp1 && data[i].boldness <= boldOp2) && 
                (data[i].sweetness >= sweetOp1 && data[i].sweetness <= sweetOp2 ) &&
                (data[i].acidic >= acidOp1 && data[i].acidic <= acidOp2 ) &&
                (data[i].price >= priceOp1 && data[i].price <= priceOp2 )){
                var newArr = []
                newArr.push(data[i])

                for(var j = 0; j<newArr.length; j++){
                    var div = document.createElement('div')
                    div.innerHTML = `${newArr[j].name} ${newArr[j].variety} ${newArr[j].vintage} ${newArr[j].keywords}`
                    div.className = "wineResult"
                    document.body.appendChild(div)
                }
            }
        }
    }catch(error){
        console.log(error)
    }
}




//see if it would be easier to integrate a loop with different options 
//check if we can put in a range of values, might have to make a slider bar
//see if we can put multiple wines in the DOM. (likely document.createElement('li'))

