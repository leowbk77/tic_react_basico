import {Header} from './components';
import { Content } from './components';
import { Footer } from './components';
import { Home } from './pages/Home/Home';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer creatorName="leowbk77" />
    </>
  );
};

export {App};
