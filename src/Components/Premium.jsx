import axios from 'axios';

const Premium = () => {
  
  const initiatePayment = async()=>{
    
   let data = {
     name : 'John Doe',
     mobileNumber : 123456,
     amount : 1000
   }
     
   try{
    const response = await axios.post('http://localhost:3000/pay/payment', data);
    console.log('response', response.data)
   }catch(err){
     console.log('error', err)
   }
  }

  return (
<div>
 <form>
  {/* <div className="form-group">
    <input type="name" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div> */}
  <button type="submit" className="btn btn-primary" style={{ width : '100px' , justifyItems : 'baseline' }} onClick={initiatePayment}>Pay For Premium</button>
 </form>
</div>
  )
}

export default Premium
