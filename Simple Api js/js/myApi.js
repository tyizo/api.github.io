// Calling The Api 
const api = 'https://www.breakingbadapi.com/api/characters';

async function getData()
{
   try {
    const response = await fetch(api)
    const data = await response.json();
    printData(data)
   } catch(e){
       // Error Massege
       console.log('[-] The Is An Error\n =>', e.massegae)
   }
}
    // To print data on the screen [Front-End].

    function printData(data)
    {
        const header = document.querySelector('#header')
        const content = document.querySelector('#content')
        header.innerHTML += `

        <select class="form-control bg-dark text-white" onchange="getCh(this.value)">
            <option>Please Select</option>
            ${data.map(character => 
                `<option>${character.name}</option>`
            )}
        </select>
        ` 
    }

    // Calling name, image and nickname [Back-End].
    async function getCh(name)
    {
      if(name !== 'Please Select')
      {
        const response = await fetch(`${api}?name=${name}`)
        const data = await response.json()

        content.innerHTML = `
        <h2>${data[0].name} (${data[0].nickname})</h2>
        <h4>${data[0].portrayed}</h4>
        <img src="${data[0].img}" width="250">
        `
      }     
    }

    getData()
