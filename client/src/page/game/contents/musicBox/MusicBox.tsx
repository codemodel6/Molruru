import styled from "styled-components";
import {
  centerColumn,
  centerRow,
} from "../../../../components/CSS/Global/GlobalDisplay";
import MusicList from "./MusicList";
import { useEffect, useRef, useState } from "react";
import QWER from "../../../../components/Music/QWER 고민중독.mp3";
import pause from "../../../../components/CSS/image/MusicImg/pause.png";
import play from "../../../../components/CSS/image/MusicImg/play.png";
import reStart from "../../../../components/CSS/image/MusicImg/restart.png";

const MusicBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MusicPlayerWrapper = styled.div`
  ${centerColumn}
  height: 100%;
  width: 80%;
  background-color: pink;
  padding-left: 350px;

  .player {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    width: 650px;
    background-color: red; // 이미지로 변경
    padding-top: 50px;
    border-radius: 20px;

    .imgDiv {
      background-color: orange;
      width: 70%;
      height: 400px;
      margin-bottom: 30px;
    }

    .title {
      background-color: yellow;
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .author {
      background-color: green;
      font-size: 20px;
      margin-bottom: 10px;
    }

    input {
      width: 70%;
      height: 30px;
      margin-bottom: 10px;
    }

    .tool {
      ${centerRow}
      background-color: gray;
      width: 100%;
      height: 60px;

      button {
        width: 30px;
        height: 30px;
        background-color: transparent;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const MusicBox = () => {
  // 노래 재생 상태
  const [audioState, setAudioState] = useState<boolean>(false);
  // 노래 현재 시간
  const [currentTime, setCurrentTime] = useState<number>(0);
  // 노래 전체 길이
  const [duration, setDuration] = useState<number>(0);
  // 노래 ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 훅 기능 : 오디오와 관련된 설정
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => {
      if (audio) {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration);
      }
    };

    // const intervalId = setInterval(updateTime, 1000);

    // return () => clearInterval(intervalId);
    if (audio) {
      // timeupdate는 오디오의 변경될 때 마다 실행
      audio.addEventListener("timeupdate", updateTime);
    }

    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", updateTime);
      }
    };
  }, []);

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래 시작 or 멈춤
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handlePlay = () => {
    // state가 반영이 느린 문제점을 해결
    setAudioState((prevState) => {
      const nowState = !prevState;
      if (audioRef.current) {
        if (nowState) {
          audioRef.current.play(); // 노래 시작
        } else {
          audioRef.current.pause(); // 노래 일시정지
        }
      }
      return nowState;
    });
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래의 진행도를 표시해주는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  /** - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  - 함수 기능 : 노래를 처음으로 되돌리는 함수
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
  const handleReset = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0; // 오디오 처음으로
      setCurrentTime(0); // 진행도 초기화
      audio.pause();
      setAudioState(false); // 재생 상태를 초기화
    }
  };

  // const formatTime = (time: number): string => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  // };

  return (
    <MusicBoxWrapper>
      <MusicPlayerWrapper>
        <div className="player">
          <audio ref={audioRef} src={QWER} />
          <div className="imgDiv"></div>
          <div className="title">제목입니다</div>
          <div className="author">가수입니다</div>
          <input
            type="range"
            value={currentTime}
            min="0"
            max={duration}
            step={0.1}
            onChange={handleChange}
          />
          <div className="tool">
            <button onClick={handlePlay}>
              <img src={audioState ? pause : play} alt="다시시작" />
            </button>
            <button onClick={handleReset}>
              <img src={reStart} alt="다시시작" />
            </button>
          </div>
        </div>
      </MusicPlayerWrapper>
      <MusicList />
    </MusicBoxWrapper>
  );
};

export default MusicBox;
