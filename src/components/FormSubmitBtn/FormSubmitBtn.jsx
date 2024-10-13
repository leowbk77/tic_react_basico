import style from './FormSubmitBtn.module.css';
import { BTN_TYPE } from './constants';

const FormSubmitBtn = (props) => {
    const {textBtn, typeBtn = BTN_TYPE.PRIMARY, ...otherProps} = props;

    return (
        <button className={style.FormSubmitBtn} typeBtn={typeBtn} {...otherProps}>
            {textBtn}
        </button>
    );
};

export {FormSubmitBtn};