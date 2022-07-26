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
        console.log(data)

        var newArr = []
        for(let i=0; i<data.length; i++){

            if((data[i].op == colorOptions) && 
                (data[i].boldness >= boldOp1 && data[i].boldness <= boldOp2) && 
                (data[i].sweetness >= sweetOp1 && data[i].sweetness <= sweetOp2 ) &&
                (data[i].acidic >= acidOp1 && data[i].acidic <= acidOp2 ) &&
                (data[i].price >= priceOp1 && data[i].price <= priceOp2 )){
                
                newArr.push(data[i])
                console.log(data[i])
            }  
        }
        for(let j = 0; j < newArr.length; j++){
            if(newArr.length === 1){
                document.getElementById('div0').innerText = `${newArr[j].name} ${newArr[j].variety} ${newArr[j].vintage}`
                document.getElementById('div1').innerText = null
                document.getElementById('div2').innerText = null
                document.getElementById('div3').innerText = null
            }else if(newArr.length === 2){
                document.getElementById('div0').innerText = `${newArr[0].name} ${newArr[0].variety} ${newArr[0].vintage}`
                document.getElementById('div1').innerText = `${newArr[1].name} ${newArr[1].variety} ${newArr[1].vintage}`
                document.getElementById('div2').innerText = null
                document.getElementById('div3').innerText = null
                console.log(newArr[j].name)
                // console.log(newArr[j+1].name)
            }else if(newArr.length === 3){
                document.getElementById('div0').innerText = `${newArr[0].name} ${newArr[0].variety} ${newArr[0].vintage}`
                document.getElementById('div1').innerText = `${newArr[1].name} ${newArr[1].variety} ${newArr[1].vintage}`
                document.getElementById('div2').innerText = `${newArr[2].name} ${newArr[2].variety} ${newArr[2].vintage}`
                document.getElementById('div3').innerText = null
            }else{
            document.getElementById('div' + j).innerText = `${newArr[j].name} ${newArr[j].variety} ${newArr[j].vintage}`
            console.log(newArr[j].name)
            }
        }   
    }catch(error){
        console.log(error)
    }
    //make wine href appear
}
           