import { useAppContext } from '../../hooks';
import style from './Footer.module.css';

const Footer = () => {
    const {creatorName} = useAppContext();
    const ano = new Date().getFullYear();
    return (
        <footer className={style.Footer}>
            <h1>React Básico - {ano} - {creatorName}</h1>
        </footer>
    );
}

export {Footer};