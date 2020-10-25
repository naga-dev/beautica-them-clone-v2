import React from "react";

// Stlyes
import { Container } from "../../../styles/globals";
import { Wrapper, ContentWapper } from "./upper-header.styles";

const UpperNav = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWapper>
          <div>3 Free Samples with any Purchase</div>
          <div>Order Online 0800 108 8822 (UK) or + 44 203 471 3000</div>
        </ContentWapper>
      </Container>
    </Wrapper>
  );
};

export default UpperNav;
