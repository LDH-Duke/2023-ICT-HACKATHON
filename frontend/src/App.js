import React from 'react';
import "./App.css";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// import { BrowserRouter as Router } from 'react-router-dom';
// import styled from 'styled-components';
import Title from './components/Title';
import Weather from './components/Weather';
import ImageAttachmentContent from './components/ImageAttachmentContent';
import PersonalColor from './components/PersonalColor';
import './styles.css';

const Container = styled.div`
  display: flex;
`;

const SideNav = styled.div`
  width: 200px;
  background-color: #f0f0f0;
  padding: 10px;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
`;

const Content = styled.div`
  padding: 10px;
`;


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

  return (
    <Router>
      <div className="background-gray">
        <div className="background-white">
         <Title />
          <Container>
            <SideNav>
              <ul>
                <NavItem to="/weather" exact>
                  날씨
                </NavItem>
                <NavItem to="/personal-color">
                  퍼스널컬러
                </NavItem>
                <NavItem to="/image-attachment">
                  이미지 첨부
                </NavItem>
              </ul>
            </SideNav>
            <Content>
              <Routes>
                <Route path="/weather" exact component={Weather} />
                <Route path="/personal-color" component={PersonalColor} />
                <Route path="/image-attachment" component={ImageAttachmentContent} />
              </Routes>
            </Content>
          </Container>
        </div>
      </div>
    </Router>
  );
}

export default App;