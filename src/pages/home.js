import React from 'react';
import {JumbotronContainer} from '../containers/jumbotron'
import {FooterContainer} from '../containers/footer'
import {AccordionContainer} from '../containers/accordion'
import {HeaderContainer} from '../containers/header'
import { OptForm, Features } from '../components';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/route'

import 'normalize.css';

export default function Home() {
  return <>
     <HeaderContainer>
       <Features>
         <Features.Title>Unlimited movies, TV shows, and more.</Features.Title>
         <Features.SubTitle>Watch anywhere. Cancel anytime.</Features.SubTitle>
         <OptForm>
          <OptForm.Input placeholder="Please Enter Your Email"/>
          <Link to={Routes.SignUp}><OptForm.Button>Try It Now</OptForm.Button></Link>
          <OptForm.Break/>
          <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
        </OptForm>
       </Features>
      </HeaderContainer>

  <JumbotronContainer/> 
  <AccordionContainer/> 
  <FooterContainer/>
</>

}


