import React from "react";
import styled from "styled-components";
import ImgM from "../images/image-product-mobile.jpg";
import ImgD from "../images/image-product-desktop.jpg";
import IconC from "../images/icon-cart.svg";

const Header = () => {
  return (
    <Main>
      <Section>
        <CardLeft></CardLeft>
        <CardRight>
          <Pc>P E R F U M E</Pc>
          <Hc>{"Gabrielle Essence Eau De Parfum"} </Hc>
          <Pd>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of ChANEL
          </Pd>
          <Prices>
            <PricesUpdated>$149.99</PricesUpdated>
            <PricesPrevious>$169.99</PricesPrevious>
          </Prices>

          <Button>
            <ImgBtn /> Add to Cart
          </Button>
        </CardRight>
      </Section>
    </Main>
  );
};
const Main = styled.div`
  width: 100%;
`;

const Section = styled.div`
  min-width: 700px;
  width: 30%;
  margin: 0 auto;
  display: flex;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    min-width: auto;
    width: 90%;
    display: flex;
  }
`;
const CardLeft = styled.div`
  width: 60%;
  background-image: url(${ImgD});
  background-position: center;
  background-size: cover;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 768px) {
    margin-top: 5px;
    width: 100%;
    height: 350px;
    border-radius: 10px 10px 0 0;
    background-image: url(${ImgM});
    background-position: center;
    background-size: cover;
  }
`;
const CardRight = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40 20;
  row-gap: 24px;
  padding: 35px 40px;
  border-top-right-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    row-gap: 12px;
    padding: 25px;
    border-radius: 0 0 10px 10px;
  }
`;

const Pc = styled.p`
  font-size: 15px;
  color: var(--Dark-grayish-blue);
  text-transform: uppercase;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Hc = styled.h1`
  font-size: 38px;
  color: var(--Very-dark-blue);
  line-height: 1.1;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 1;
  }
`;
const Pd = styled.p`
  color: var(--Dark-grayish-blue);
  width: 85%;
  line-height: 1.5;

  @media (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 15px;
    line-height: 1.7;
    font-size: 12px;
    width: 95%;
  }
`;

const ImgBtn = styled.img`
  background-image: url(${IconC});
  width: 20px;
  height: 20px;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Button = styled.button`
  width: 100%;
  padding: 17px 0;
  margin: 0 auto;
  background-color: var(--Dark-cyan);
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: 700;
  gap: 10px;
  background-repeat: no-repeat;
  color: white;

  &:hover {
    background-color: #1d9c35;
  }

  @media (max-width: 768px) {
    width: 203;
    margin: 10px;
  }
`;
const PricesUpdated = styled.p`
  font-size: 36px;
  color: var(--Dark-cyan);
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;
const PricesPrevious = styled.p`
  font-size: 14px;
  text-decoration: line-through;
  color: var(--Dark-grayish-blue);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Prices = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
`;

const Img = styled.img``;

export default Header;
