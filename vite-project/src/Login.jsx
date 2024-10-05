// import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
import ProtectedRoute from './ProtectedRoute';
import Animation from './Components/Animation';
import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
  ScaleFade,
} from '@chakra-ui/react';
import {   signInWithPopup, GoogleAuthProvider   } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
 // Import your initialized auth
import { useNavigate }  from 'react-router-dom';

const Login = ({user}) => {
   
  const auth = getAuth(); 
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue('gray.100', 'gray.700');

  const provider = new GoogleAuthProvider();


  const navigate = useNavigate();


  const googleSignOut =(()=>{
    
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('successful')
        navigate('/login')
    }).catch((error) => {
      // An error happened.
      console.log('error', error)
    });
  })
 

  const googleSignIn =  ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log('token', token);

      const users = result.user;
      return users.getIdToken();
    })
    .then((firebaseIdToken) => {
      return fetch('http://localhost:3000/auth/google/', { // Ensure protocol matches server
        method: 'POST',
        headers: {
      'Authorization': `Bearer ${firebaseIdToken}`,
          'Content-Type': 'application/json',
        },
      });
    })
    .then((response) => {
      if (response.ok) {
        return response.json(); // Parse JSON once
      } else {
        throw new Error('Failed to authenticate');
      }
    })
    .then((data) => {
      console.log('Backend Response:', data);
      navigate('/features');
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }


  return (
    <div>
      <Animation/>
{
  (!user)?<>
<Flex h="100vh" alignItems="center" justifyContent="center" >
      <Flex
        flexDirection="column"
        bg={formBackground}
        p={12}
        borderRadius={8}
        boxShadow="lg"
        width="100%"  // Adjust width of the container if needed
        maxW="400px" 
      >
        <Heading mb={6}>Log In</Heading>
        <Input
          placeholder="johndoe@gmail.com"
          type="email"
          variant="filled"
          mb={3}
        />
        <Input
          placeholder="**********"
          type="password"
          variant="filled"
          mb={6}
        />
        <Button onClick={googleSignIn} colorScheme="teal" mb={8}>
          Sign In With Google
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Enable Dark Mode?
          </FormLabel>
          <Switch
            id="dark_mode"
            colorScheme="teal"
            size="lg"
            onChange={toggleColorMode}
          />
        </FormControl>
      </Flex>
    </Flex>
    </>: <>
      <h2>{user.displayName}</h2>
      <h3>{user.email}</h3>
    <Button
           size='lg'
           height='48px'
            width='auto'
           border='2px'
           borderColor='white'
           alignSelf="center"
        onClick={googleSignOut} colorScheme="teal" mb={8}>
          Sign Out
        </Button>
    </>
}
    </div> 
  )
}

export default Login

