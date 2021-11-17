import React from 'react';
import FaqsData from '../fixtures/faqs.json'
import { Accordion } from '../components';
import { OptForm } from '../components';
import { Link } from 'react-router-dom';
import * as Routes from '../constants/route'

export function AccordionContainer() {
  return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
          {FaqsData.map((items)=>(
            <Accordion.Item key={items.id}>
                <Accordion.Header>{items.header}</Accordion.Header>
                
                
            </Accordion.Item>
  ))}
          
          <OptForm>
          <OptForm.Input placeholder="Please Enter Your Email"/>
          <Link to={Routes.SignUp}><OptForm.Button>Try It Now</OptForm.Button></Link>
        </OptForm>
        </Accordion>
    );
}


