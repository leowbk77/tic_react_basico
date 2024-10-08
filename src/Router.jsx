import {Route, Routes} from 'react-router-dom';
import {AboutUs, Home} from './pages';
import { DefaultLayout } from './layouts';

const Router = () => {
    return (
    <Routes>
        <Route path='/' element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Route>
    </Routes>
    );
};

export {Router};