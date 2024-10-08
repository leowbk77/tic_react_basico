import {Header, Content, Footer} from '../../components';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
    <>
        <Header />
        <Content>
            <Outlet />
        </Content>
        <Footer creatorName="leowbk77" />
    </>
    );
};

export {DefaultLayout};