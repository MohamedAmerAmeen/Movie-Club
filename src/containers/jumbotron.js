import React from 'react';
import Jumbodata from '../fixtures/jumbo.json'
import { Jumbotron } from '../components';

export function JumbotronContainer() {
  return (
        <Jumbotron.Container>
          {Jumbodata.map((items)=>(
            <Jumbotron key={items.id} direction={items.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{items.title}</Jumbotron.Title>
                <Jumbotron.Subtitle>{items.subTitle}</Jumbotron.Subtitle>
              </Jumbotron.Pane>
              <Jumbotron.Pane>
              <Jumbotron.Image src={items.image} alt={items.alt}/>
              </Jumbotron.Pane>
            </Jumbotron>
  ))}
          
        </Jumbotron.Container>
    );
}


