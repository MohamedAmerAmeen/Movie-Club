import styled from 'styled-components/macro';
import {Link} from 'react-router-dom'



export const Group = styled.div`
display: flex;
align-items: center;
`;

export const Picture = styled.img`
background-size: contain;
border: 0;
width: 32px;
height: 32px;
cursor: pointer;
`;

export const TextLink = styled.p`
color:white;
text-decoration:none;
margin-right:30px;
font-weight: ${({active})=>(active === 'true' ? '700' : 'normal')};
cursor:pointer;
&:hover{
  font-weight:bold;
} 
&: last-of-type{
  margin-right:0;
}
`;

export const Dropdown = styled.div`
display: none;
position: absolute;
background-color: black;
padding: 10px;
width: 100px;
top: 32px;
right: 10px;
${Group}:last-of-type ${TextLink} {
  cursor: pointer;
}
${Group} {
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 0;
  }
  ${TextLink} {
    cursor: pointer;
  }
  ${Picture} {
    cursor: default;
  }
}
button {
  margin-right: 10px;
}
p {
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 0;
}
`;

export const Profile = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
position: relative;
button {
  cursor: pointer;
}
&:hover > ${Dropdown} {
  display: flex;
  flex-direction: column;
  border:1px solid black;
  border-radius:5px;
  background-color:black;
  z-index:1;
}

`;




export const Feature = styled.div`
display:flex;
${({ addPadding }) => addPadding && `padding: 150px 0 200px 0;`}
flex-direction: row;
align-item: normal;
width:50%;

@media(max-width: 1100px){
  display: none;
} 
`;

export const FeatureImage = styled.img`

`;
export const FeatureCallOut = styled.h2`
color:white;
font-weight:bold;
lign-height: normal;
text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
margin: 0 0 25px 0px;
`;

export const Text = styled.p`
color:white;
text-size:22px;
lign-height: normal;
text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
margin: 0
`;

export const Button = styled.button`
box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
background-color: #e6e6e6;
color: #000;
border-width: 0;
padding: 10px 20px;
border-radius: 5px;
max-width: 130px;
font-weight: bold;
font-size: 20px;
margin-top: 10px;
cursor: pointer;
transition: background-color 0.5s ease;
&:hover {
  background-color: #ff1e1e;
  color: white;
}`;
export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
  url(${({ src }) => 
  (src ? `https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/joker1.jpg` 
  : 'https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/misc/home-bg.jpg')})
   top left / cover
    no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;
 
export const Test = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), 
  url("https://i.im.ge/2021/08/28/QuEOQh.jpg")
   top left / cover
    no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
  `;

export const Logo = styled.img`
height: 36px;
width: 134px;
margin-right: 40px;
@media (min-width: 1449px) {
  height: 45px;
  width: 167px;
}`;

export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }

`;

