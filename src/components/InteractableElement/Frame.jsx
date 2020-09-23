import React from "react";
import styled from "styled-components";

const Dot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background: #fff;
    box-shadow: 0 0 5px 1px rgba(57, 76, 96, 0.15),
      0 0 0 1px rgba(53, 71, 90, 0.2);
    position: relative;
  }
`;

const DotContainer = styled.div`
  ${({ top, left, right, bottom }) => `
  position: absolute;
  width: 32px;
  height: 32px;
  ${top ? `top: ${top}px;` : ``} 
  ${bottom ? `bottom: ${bottom}px;` : ``} 
  ${left ? `left: ${left}px;` : ``} 
  ${right ? `right: ${right}px;` : ``} 
  `}
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  touch-action: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dotted ${({ theme: { palette } }) => palette.secondary.main};
`;

const Frame = () => (
  <Container>
    <DotContainer top={-15} left={-16}>
      <Dot></Dot>
    </DotContainer>
    <DotContainer top={-15} right={-15}>
      <Dot></Dot>
    </DotContainer>
    <DotContainer bottom={-16} left={-16}>
      <Dot></Dot>
    </DotContainer>
    <DotContainer bottom={-16} right={-15}>
      <Dot></Dot>
    </DotContainer>
  </Container>
);

export { Frame };
