import {Header} from './components';
import { Content } from './components';
import { Footer } from './components';
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Content>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam cum enim necessitatibus eos. Nesciunt quis, deleniti eos molestiae impedit excepturi sunt voluptates quam doloremque facilis molestias hic quas, dolore odit.</p>
        <p>conteudo 2</p>
      </Content>
      <Footer creatorName="leowbk77" />
    </>
  );
};

export {App};
