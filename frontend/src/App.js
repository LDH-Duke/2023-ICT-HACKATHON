// 기본 패키지
import React from 'react';
import "./App.css";
// import Webcam from 'react-webcam';

// css
import './styles.css';
import './css/OutfitBox.css';

// 컴포넌트
import OutfitRegistrationTitle from './components/OutfitRegistrationTitle';
import OutfitBody1 from './components/OutfitBody1';
import OutfitBody2 from './components/OutfitBody2';
import OutfitFile from './components/OutfitFile';
import OutfitImg from './components/OutfitImg';
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
// 화면
  return (
      <div className="BackgroundGray">
        <div className="AppContainer">
            <OutfitRegistrationTitle />
            <div className="OutfitBody1">
              <OutfitBody1 />
            </div>
            <div className="OutfitBody2">
              <OutfitBody2 />
            </div>
            <OutfitFile />
            <div className="OutfitImg">
             <OutfitImg />
            </div>

        </div>
      </div>
  );
}

export default App;