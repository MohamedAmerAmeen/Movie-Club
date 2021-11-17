import React,{useState, useContext} from 'react';
import { useHistory } from 'react-router-dom';
import {HeaderContainer} from '../containers/header'
import {FooterContainer} from '../containers/footer'
import {Forms} from '../components'
import { FirebaseContext } from '../context/firebase';
import * as Routes from '../constants/route'

export default function SignUp() {
  const history = useHistory(); 
  const {firebase} = useContext(FirebaseContext);
  const [firstName,setFirstName] = useState('');
  const [Email,setEmail] = useState('');
  const [Password,setPassword] = useState('');
  const [error,setError] = useState('');

  const isInValid =  firstName === '' || Password === '' || Email === '';
  
  const handleSubmit = (event) => {
    event.preventDefault(); // to prevent heading to any page or do some magic
    //firebase work here!
    firebase
    .auth()
    .createUserWithEmailAndPassword(Email,Password)
    .then((result)=>{//create particular method to make user profile
      result.user.updateProfile({
        displayName: firstName,
        photoURL: Math.floor(Math.random() * 5) + 1,
      }).then(()=>{
        history.push(Routes.Browse);
      })
    })
    .catch((error)=>{
      setError(error.message)
    })
      }
  return <>
  <HeaderContainer>
  <Forms>
      <Forms.Title>Sign Up</Forms.Title>
      {error && <Forms.Error>{error}</Forms.Error>}

      <Forms.Base onSubmit={handleSubmit} method="POST">
        <Forms.Input type="text" required onChange={({ target })=> setFirstName(target.value)} value={firstName} placeholder="Full Name"></Forms.Input>
        <Forms.Input type="email" onChange={({ target })=> setEmail(target.value)} value={Email} placeholder="Email or phone number"></Forms.Input>
        <Forms.Input type="password" onChange={({target})=> setPassword(target.value)} value={Password} placeholder="Password"></Forms.Input>
        <Forms.Submit type="submit" disabled={isInValid}>Sign Up</Forms.Submit>

      </Forms.Base>

      <Forms.Text>
        Already Have Account <Forms.Link to={Routes.SignIn}>Sign In</Forms.Link>
      </Forms.Text>
    </Forms>
  </HeaderContainer>
  <FooterContainer/>
</>


}


