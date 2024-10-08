import style from './Footer.module.css';

const Footer = (props) => {
    const {creatorName} = props;
    const ano = new Date().getFullYear();
    return (
        <footer className={style.Footer}>
            <h1>React Básico - {ano} - {creatorName}</h1>
        </footer>
    );
}

export {Footer};