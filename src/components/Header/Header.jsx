import style from './Header.module.css';

const Header = () => {
    return (
        <div className={style.Header}>
            <h1><span>ToDo</span> List</h1>
        </div>
    );
};

export {Header};