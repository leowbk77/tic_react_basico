import { Outlet } from 'react-router-dom';
import {Header, Content, Footer} from '../../components';

const DefaultLayout = () => {
    return (
    <>
        <Header />
        <Content >
            <Outlet />
        </Content>
        <Footer />
    </>
    );
};

export {DefaultLayout};