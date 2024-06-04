/** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
- /home 컴포넌트
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

import { GlobalWrapper } from "../../components/CSS/Global/GlobalWrapper";
import HmCarousel from "./area/HmCarousel";
import HmDream from "./area/HmDream";
import HmMove from "./area/HmMove";

const Home = () => {
  return (
    <GlobalWrapper height={"4000px"}>
      <HmCarousel />
      <HmMove />
      {/* <HmMove /> */}
      {/* <HmDream /> */}
    </GlobalWrapper>
  );
};

export default Home;
