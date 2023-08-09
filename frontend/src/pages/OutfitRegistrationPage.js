// 기본 패키지
import React from 'react';
import "./App.css";
import { useEffect } from 'react';
// import Webcam from 'react-webcam';

// css
import './styles.css';

// 컴포넌트
import OutfitRegistrationTitle from './components/OutfitRegistrationTitle';
import CameraTitle from './components/CameraTitle';
import CameraBox from './components/CameraBox';
import ClothesKeywordTitle from './components/ClothesKeywordTitle';
import ClothesKeywordLabel from './components/ClothesKeywordLabel';
import ImageAttachmentTitle from './components/ImageAttachmentTitle';
import ImageAttachmentLabel from './components/ImageAttachmentLabel';
import WeatherAndTempContainer from './components/WeatherAndTempContainer';

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

function OutfitRegistrationPage() {
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

export default OutfitRegistrationPage;