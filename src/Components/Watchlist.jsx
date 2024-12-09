

export async function addToWatchList(item , user, authToken ){
    
   console.log('item', item)
    if( !authToken) 
       throw Error('User is not authorized');

     let itemPresent = checkItem(item , authToken);
     if( itemPresent ) 
     {
      alert('movie is already present in the watchlist')
      return ;
     }
  
  let response = await fetch('http://localhost:3000/add/addTask', 
    {method: 'POST',
        headers : {
         'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item) 
      })
       const resp =  await response.json()
      console.log('movie added',resp);
}


export async function getWatchList(authToken){
   let checkItemResponse = await fetch( `http://localhost:3000/add/`,{
      method:'GET',
      headers : {
         'Authorization': `Bearer ${authToken}`,
        },
    })
    
try{
   let res = await checkItemResponse.json();
   console.log('awaitgetresponse', res)
   return res;
    }catch(err){
      console.log('error', err)
    }
}


export async function checkItem(item ,  authToken){

   console.log('item', item)
    if( !authToken) 
       throw Error('User is not authorized');

    let checkItemPresent = await fetch(`http://localhost:3000/add/${item.title}`,{
      method:'GET',
      headers : {
         'Authorization' : `Bearer ${authToken}`
      },
    })
    console.log('checckitempresent', checkItemPresent);

}