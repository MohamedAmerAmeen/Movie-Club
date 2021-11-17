import React from 'react';
import { Background,Container,Button,Logo,ButtonLink,Feature,FeatureImage,Text,FeatureCallOut,Test,TextLink,Group,Dropdown,Picture,Profile  } from './styles/header';
import{Link as ReactRouterLink} from 'react-router-dom'

export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
      <Background data-testid="header-bg" {...restProps}>
        {children}
      </Background>
    ) : (
      children
    );
  }
  Header.Test = function HeaderTest({children, ...restprops}){
    return <Test {...restprops}>{children}</Test>
}
  
Header.Dropdown = function HeaderDropdown({children, ...restprops}){
    return <Dropdown {...restprops}>{children}</Dropdown>
}

Header.FeatureImage = function HeaderFeatureImage({children, ...restprops}){
    return <FeatureImage {...restprops}>{children}</FeatureImage>
}

Header.Picture = function HeaderPicture({children, ...restprops}){
    return <Picture {...restprops}>{children}</Picture>
}

Header.Profile = function HeaderProfile({children, ...restprops}){
    return <Profile {...restprops}>{children}</Profile>
}

Header.Button = function HeaderButton({children, ...restprops}){
    return <Button {...restprops}>{children}</Button>
}

Header.Group = function HeaderGroup({children, ...restprops}){
    return <Group {...restprops}>{children}</Group>
}

Header.TextLink = function HeaderTextLink({children, ...restprops}){
    return <TextLink {...restprops}>{children}</TextLink>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restprops}){
    return <FeatureCallOut {...restprops}>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({children, ...restprops}){
    return <Text {...restprops}>{children}</Text>
}

Header.Feature = function HeaderFeature({children, ...restprops}){
    return <Feature {...restprops}>{children}</Feature>
}

Header.Frame = function HeaderFrame({children, ...restprops}){
    return <Container {...restprops}>{children}</Container>
}

Header.ButtonLink = function HeaderButtonLink({children,...restprops}){
    return <ButtonLink {...restprops} >{children}</ButtonLink>
}

Header.ButtonLink = function HeaderButtonLink({children,...restprops}){
    return <ButtonLink {...restprops} >{children}</ButtonLink>
}

Header.Logo = function HeaderLogo({to, ...restprops}){
    return (<ReactRouterLink to={to}>
        <Logo {...restprops}/>
    </ReactRouterLink>);
}