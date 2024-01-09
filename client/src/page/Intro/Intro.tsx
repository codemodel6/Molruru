import styled from "styled-components";
import { centerColumn } from "../../components/CSS/Global/GlobalDisplay";
const IntroBody = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;

  .introMain {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-transform: uppercase;
    font-size: 100px;
    z-index: -1;
    font-weight: bold;
  }
`;

const IntroWrapper = styled.div`
  ${centerColumn}
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #161616;
  animation: slide-out-container 4s cubic-bezier(0.91, 0.01, 0.36, 0.99) 2.8s;
  animation-fill-mode: forwards;

  .textWrapper {
    color: white;
    position: absolute;
  }

  .text {
    font-weight: lighter;
    font-size: 54px;
  }

  .text-1,
  .text-3,
  .text-4,
  .text-8,
  .text-9,
  .text-11 {
    color: black;
    -webkit-text-stroke: 1px white;
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 100%;
    }
    99% {
      opacity: 100%;
    }
    100% {
      opacity: 0%;
    }
  }

  .text-1 {
    animation: blink 0.8s linear 0.9s, blink 0.8s linear 2s;
    opacity: 0;
  }
  .text-2 {
    animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
    opacity: 0;
  }
  .text-3 {
    animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
    opacity: 0;
  }
  .text-4 {
    animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
    opacity: 0;
  }
  .text-5 {
    animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
    opacity: 0;
  }
  .text-6 {
    animation: blink 0.8s linear 0.4s, blink 0.8s linear 2.5s;
    opacity: 0;
  }
  .text-7 {
    animation: blink 0.8s linear 0.5s, blink 0.8s linear 2.4s;
    opacity: 0;
  }
  .text-8 {
    animation: blink 0.8s linear 0.6s, blink 0.8s linear 2.3s;
    opacity: 0;
  }
  .text-9 {
    animation: blink 0.8s linear 0.7s, blink 0.8s linear 2.2s;
    opacity: 0;
  }
  .text-10 {
    animation: blink 0.8s linear 0.8s, blink 0.8s linear 2.1s;
    opacity: 0;
  }
  .text-11 {
    animation: blink 0.8s linear 0.9s, blink 0.8s linear 2.2s;
    opacity: 0;
  }

  @keyframes slide-out {
    0% {
      opacity: 0;
    }
    1% {
      opacity: 100%;
    }
    19% {
      opacity: 100%;
    }
    20% {
      opacity: 0;
    }
    39% {
      opacity: 0;
    }
    40% {
      opacity: 100%;
    }
    59% {
      opacity: 100%;
    }
    60% {
      opacity: 0;
    }
    79% {
      opacity: 0;
    }
    80% {
      opacity: 100%;
    }
    100% {
      opacity: 100%;
    }
  }

  @keyframes slid-out-container {
    0% {
      height: 100vh;
    }
    40% {
      height: 100vh;
    }
    100% {
      height: 0%;
    }
  }
`;

const Intro = () => {
  return (
    <IntroBody>
      <div className="introMain">Molru</div>
      <IntroWrapper>
        <div className="textWrapper">
          <div className="text-1 text">Hello World</div>
          <div className="text-2 text">Hello World</div>
          <div className="text-3 text">Hello World</div>
          <div className="text-4 text">Hello World</div>
          <div className="text-5 text">Hello World</div>
          <div className="text-6 text">Hello World</div>
          <div className="text-7 text">Hello World</div>
          <div className="text-8 text">Hello World</div>
          <div className="text-9 text">Hello World</div>
          <div className="text-10 text">Hello World</div>
          <div className="text-11 text">Hello World</div>
        </div>
      </IntroWrapper>
    </IntroBody>
  );
};

export default Intro;
