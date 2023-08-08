// 기본 패키지
import React from 'react';
import "./App.css";
import { useEffect } from 'react';
// import Webcam from 'react-webcam';

// css
// import styled from 'styled-components';
import './styles.css';

// 컴포넌트
// import Title from './components/Title';
// import Weather from './components/Weather';
// import ImageAttachmentContent from './components/ImageAttachmentContent';
// import PersonalColor from './components/PersonalColor';
import OutfitRegistrationTitle from './components/OutfitRegistrationTitle';
import CameraTitle from './components/CameraTitle';
import CameraBox from './components/CameraBox';
import ClothesKeywordTitle from './components/ClothesKeywordTitle';
import ClothesKeywordLabel from './components/ClothesKeywordLabel';
import ImageAttachmentTitle from './components/ImageAttachmentTitle';
import ImageAttachmentLabel from './components/ImageAttachmentLabel';
import WeatherAndTempContainer from './components/WeatherAndTempContainer';

// 사이드 내비바
// const SideNav = styled.div`
//   flex-direction : row;
//   display: flex;
//   background-color: #f0f0f0;
//   padding-right: 10px;
//   padding-left: 10px;
//   align-items: center;
//   flex-direction: column;
//   margin-right: 1rem;
// `;

// 카메라 컨테이너
// const CameraNav = styled.div`
//   flex: 1;
//   display: flex;
//   background-color: #f0f0f0;
//   padding-right: 10px;
//   padding-left: 5px;
//   align-items: center;
//   margin-left: 1rem;
// `

// 카메라 (웹캠)
// const videoConstraints = {
//   width: 1280,
//   height: 720,
//   facingMode: "user"
// };

// const WebcamCapture = () => (
//     <Webcam
//       audio={false}
//       height={720}
//       screenshotFormat="image/jpeg"
//       width={1280}
//       videoConstraints={videoConstraints}
//     >
//       {({ getScreenshot }) => (
//         <button
//           onClick={() => {
//             getScreenshot()
//           }}
//         >
//           촬영
//         </button>
//       )}
//     </Webcam>
// );

function App() {
  useEffect(() => {
    fetch("/main").then(
      // response 객체의 json() 이용하여 json 데이터를 객체로 변화
      res => res.json()
    ).then(
      // 데이터를 콘솔에 출력
      data => console.log(data)
    )
  }, [])

// 화면
  return (
    <div className="BackgroundGray">
      <div className="AppContainer">
          <OutfitRegistrationTitle />
          <CameraTitle />
          <CameraBox />
          <ClothesKeywordTitle />
          <ClothesKeywordLabel />
          <ImageAttachmentTitle />
          <ImageAttachmentLabel />
          <WeatherAndTempContainer />
      </div>
    </div>
  );
}

export default App;