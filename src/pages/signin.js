import React,{useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {Forms} from '../components'
import { FirebaseContext } from '../context/firebase';
import * as Routes from '../constants/route'

export default function SignIn() {
  const history = useHistory(); //custom hook
  const {firebase} = useContext(FirebaseContext);
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  const [error,setError] = useState('');

  const isInValid = Password === '' || Email === '';

  //Event is used for when clicking the button to handle submition
  const handleSubmit = (event) => {
    event.preventDefault(); // to prevent heading to any page or do some magic
    //firebase work here!
    firebase
    .auth()
    .signInWithEmailAndPassword(Email, Password)
    .then(()=> {
      history.push(Routes.Browse)
      console.log("Login Successfully");
    })
    .catch((error)=>{
      // setPassword('');
      // setEmail('');
      console.log(error)
      setError(error.message)
    })
  }
  return <>
  <HeaderContainer>
  <Forms>
      <Forms.Title>Sign in</Forms.Title>
      {error && <Forms.Error>{error}</Forms.Error>}

      <Forms.Base onSubmit={handleSubmit} method="POST">
        
        <Forms.Input type="text" onChange={({ target })=> setEmail(target.value)} value={Email} placeholder="Email or phone number"></Forms.Input>
        <Forms.Input type="password" onChange={({target})=> setPassword(target.value)} value={Password} placeholder="Password"></Forms.Input>
        <Forms.Submit type="submit" disabled={isInValid}>Sign In</Forms.Submit>

      </Forms.Base>

      <Forms.Text>
        New to Netflix? <Forms.Link to={Routes.SignUp}>Sign Up</Forms.Link>
      </Forms.Text>
    </Forms>
  </HeaderContainer>
  <FooterContainer/>
</>

}


