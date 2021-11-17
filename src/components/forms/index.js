import React from 'react';
import { Base,Container,Error,Title,Text,TextSmall,Link,Input,Submit  } from './styles/forms';

export default function Forms({children, ...restprops}){
    return (<Container {...restprops}>{children}</Container>)
    
}

Forms.Base = function FormsBase({children, ...restprops}){
    return <Base {...restprops}>{children}</Base>
}

Forms.Error = function FormsError({children, ...restprops}){
    return <Error {...restprops}>{children}</Error>
}

Forms.Title = function FormsTitle({children, ...restprops}){
    return <Title {...restprops}>{children}</Title>
}

Forms.Text = function FormsText({children, ...restprops}){
    return <Text {...restprops}>{children}</Text>
}

Forms.TextSmall = function FormsTextSmall({children, ...restprops}){
    return <TextSmall {...restprops}>{children}</TextSmall>
}

Forms.Link = function FormsLink({children, ...restprops}){
    return <Link {...restprops}>{children}</Link>
}

Forms.Input = function FormsInput({children, ...restprops}){
    return <Input {...restprops}>{children}</Input>
}

Forms.Submit = function FormsSubmit({children, ...restprops}){
    return <Submit {...restprops}>{children}</Submit>
}