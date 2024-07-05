import styled from '@emotion/styled';
import Header from './components/common/Header/Header';
import Footer from './components/Footer';
import Mainpage from './pages/Mainpage';
import Themepage from './pages/Themepage';
//react-router-dom을 사용해서 라우팅 설정
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <Header></Header>
        <Content>
          <Route>
            <Route path="/theme/:themeKey" element={<Themepage />} />
            <Route path="/" element={<Mainpage />} />
          </Route>
        </Content>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

const Content = styled.div`
  padding: 20px;
`;
