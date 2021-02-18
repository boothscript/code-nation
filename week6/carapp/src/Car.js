import React from "react";
import styled from "styled-components";

const Car = ({ data }) => {
  return (
    <CarWrapper>
      <CarImg src={data.imageUrl} alt={data.title}></CarImg>
      <CarInfoWrapper>
        <Price rrp={data.rrp} currentPrice={data.currentPrice} />
        <CarTitle href="#">{data.title}</CarTitle>
        <CarSubTitle></CarSubTitle>
        <Label show={data.isBrandNew} text="BRAND NEW" />
        <Label show={data.isInStock} text="IN STOCK" />
      </CarInfoWrapper>
    </CarWrapper>
  );
};

const CarWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: -1px 3px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.3rem;
`;

const CarInfoWrapper = styled.div`
  height: 100%;
  width: 90%;
  margin: 0.5em auto;
`;
const CarImg = styled.img`
  width: 100%;
`;
const CarTitle = styled.a``;
const CarSubTitle = styled.p``;

const Price = ({ rrp, currentPrice }) => {
  const saveValue = rrp - currentPrice;
  return (
    <PriceWrapper>
      <RrpWrapper>
        <RrpLabel>RRP</RrpLabel>
        <RrpValue>{`£${rrp}`}</RrpValue>
      </RrpWrapper>
      <CurrentValue>{`£${currentPrice}`}</CurrentValue>
      <SaveWrapper>
        <SaveLabel>Save</SaveLabel>
        <SaveValue>{`£${saveValue}`}</SaveValue>
      </SaveWrapper>
    </PriceWrapper>
  );
};

const PriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const RrpWrapper = styled.div``;
const SaveWrapper = styled.div``;
const RrpLabel = styled.div``;
const RrpValue = styled.div``;
const CurrentValue = styled.div``;
const SaveLabel = styled.div``;
const SaveValue = styled.div``;

const Label = ({ show, text }) => {
  return show ? <LabelSpan>{text}</LabelSpan> : null;
};

const LabelSpan = styled.div``;

export default Car;
