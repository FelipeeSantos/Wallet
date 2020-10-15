import React from 'react';
import { Container, Title, Dates } from "./Styles-CotentPages"

interface IContentPages {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentPages: React.FC<IContentPages> = ({title, lineColor, children }) => {

  return (
    <Container>
      <Title lineColor={lineColor}>
        <h4>{title}</h4>
      </Title>
      <Dates>
        {children}
      </Dates>
    </Container>
  );
};

export default ContentPages;
