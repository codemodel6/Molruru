import styled from "styled-components";
import InfoQuestion from "./area/InfoQuestion";
import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import OrTab from "../../components/Organism/OrTab";
import OrTitle from "../../components/Organism/OrTitle";
import car from "../../components/CSS/image/car.jpg";
import { mapTabArr } from "../../components/dummy/TabArr";
import Map from "./area/Map";

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  background-color: rosybrown;
`;

const Information = () => {
  return (
    <GlobalWrapper height="3000px">
      <OrTitle
        imageUrl={car}
        mainText="카카오 지도를 이용해서 만들어보자"
        subText="Map"
      />
      <OrTab tabArr={mapTabArr} />
      <InfoWrapper>
        <Map />
        <InfoQuestion />
      </InfoWrapper>
    </GlobalWrapper>
  );
};

export default Information;
