
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';

// import { useEffect } from "react";

const ProtectedRoute = ({user}) => {
console.log('userere', user);


 return<>
 { 

(user)? <Outlet/> : <Navigate to='/login'/>
    
}
  </>

}

ProtectedRoute.propTypes = {
  user : PropTypes.shape({
    displayName :   PropTypes.string,
  })  
}


export default ProtectedRoute
