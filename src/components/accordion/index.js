import React, { useState, useContext, createContext } from 'react';
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>
      {children}
      <img src="https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/icons/add.png" alt="Open" />
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);

  /* return toggleShow ? <Body {...restProps}>{children}</Body> : null; */

  return (
    <Body className={toggleShow ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};