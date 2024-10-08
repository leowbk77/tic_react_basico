import style from './FormTextField.module.css';

const FormTextField = (props) => {
    return (
        <input 
            type="text" 
            className={style.FormTextField} 
            {...props}
        />
    );
};

export {FormTextField};