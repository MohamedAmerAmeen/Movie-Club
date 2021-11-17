import React from 'react';
import {Container, Title, SubTitle} from './styles/features'

export default function Features({children, ...restprops}){
    return (
        <Container {...restprops}>{children}</Container>
    )
}

Features.Title = function FeaturesTitle({children,...restprops}){
   return <Title {...restprops}>{children}</Title>
}

Features.SubTitle = function FeaturesSubTitle({children,...restprops}){
    return <SubTitle {...restprops}>{children}</SubTitle>
 }
 
 