

export async function addToWatchList(item){
 console.log('item', item)
  let response = await fetch('http://localhost:3000/add/addTask', 
    {method: 'POST',
        headers : {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item) 
      })
       const resp =  await response.json()
      console.log('movie added',resp);
}