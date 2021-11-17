 import React from 'react';
 import {Container,Inner,Items, Pane, Title,Subtitle,Image} from './styles/jumbotron'

 export default function Jumbotron({children, direction = 'row', ...restprops}){
     return (
         <Items>
            <Inner direction={direction}>
                {children}
            </Inner>
         </Items>
     )
 }

Jumbotron.Container = function JumbotronContainer({children,...restprops}){
    return <Container {...restprops}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children,...restprops}){
    return <Pane {...restprops}>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children,...restprops}){
    return <Title {...restprops}>{children}</Title>
}
Jumbotron.Subtitle = function JumbotronSubtitle({children,...restprops}){
    return <Subtitle {...restprops}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({children,...restprops}){
    return <Image {...restprops}>{children}</Image>
}

